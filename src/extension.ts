import * as vscode from 'vscode';
import * as https from 'https';
import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';

// Кэш для документации
const docCache = new Map<string, { description: string; url: string }>();

// Загружаем маппинг интерфейсов
let interfaceDocs: Record<string, { url: string; description?: string }> = {};

function loadInterfaceDocs() {
	try {
		// Пробуем несколько путей для поиска файла
		const possiblePaths = [
			path.join(__dirname, 'interface-docs.json'),
			path.join(__dirname, '..', 'src', 'interface-docs.json'),
			path.join(__dirname, '..', 'interface-docs.json')
		];
		
		for (const docsPath of possiblePaths) {
			if (fs.existsSync(docsPath)) {
				const content = fs.readFileSync(docsPath, 'utf8');
				interfaceDocs = JSON.parse(content);
				console.log(`Loaded interface docs from: ${docsPath}`);
				return;
			}
		}
		
		console.log('Interface docs file not found, using URL pattern generation');
	} catch (error) {
		console.error('Error loading interface docs:', error);
	}
}

/**
 * Формирует URL для интерфейса на основе паттерна
 */
function getInterfaceUrl(typeName: string): string | null {
	// Проверяем маппинг
	if (interfaceDocs[typeName] && interfaceDocs[typeName].url) {
		return interfaceDocs[typeName].url;
	}

	// Формируем URL по паттерну: https://help.fsight.ru/ru/mergedProjects/kesom/interface/{lowercase}/{lowercase}.htm
	// Для интерфейсов начинающихся с I
	if (typeName.startsWith('I') && typeName.length > 1) {
		const interfaceName = typeName.substring(1); // Убираем I
		const lowerName = interfaceName.toLowerCase();
		return `https://help.fsight.ru/ru/mergedProjects/kesom/interface/${lowerName}/${lowerName}.htm`;
	}

	// Для классов, заканчивающихся на Class
	if (typeName.endsWith('Class')) {
		const className = typeName.replace('Class', '');
		const lowerName = className.toLowerCase();
		return `https://help.fsight.ru/ru/mergedProjects/kesom/interface/${lowerName}/${lowerName}.htm`;
	}

	return null;
}

/**
 * Получает документацию с сайта help.fsight.ru
 */
async function fetchDocumentation(typeName: string): Promise<{ description: string; url: string } | null> {
	// Проверяем кэш
	if (docCache.has(typeName)) {
		return docCache.get(typeName)!;
	}

	const url = getInterfaceUrl(typeName);
	if (!url) {
		return null;
	}

	try {
		// Загружаем страницу документации
		const html = await fetchUrl(url);
		
		if (html) {
			// Парсим HTML и извлекаем описание
			const description = extractDescription(html, typeName);
			if (description) {
				const result = { description, url };
				docCache.set(typeName, result);
				return result;
			}
		}

		// Если описание не найдено, но URL есть, возвращаем хотя бы URL
		const result = { description: '', url };
		docCache.set(typeName, result);
		return result;
	} catch (error) {
		console.error(`Error fetching documentation for ${typeName}:`, error);
		// Возвращаем URL даже при ошибке
		if (url) {
			return { description: '', url };
		}
	}

	return null;
}

/**
 * Загружает HTML с URL с таймаутом
 */
function fetchUrl(url: string, timeout: number = 3000): Promise<string> {
	return new Promise((resolve, reject) => {
		const protocol = url.startsWith('https:') ? https : http;
		
		const request = protocol.get(url, (res) => {
			// Проверяем статус код
			if (res.statusCode !== 200) {
				reject(new Error(`HTTP ${res.statusCode}`));
				return;
			}
			
			let data = '';
			
			res.on('data', (chunk) => {
				data += chunk;
			});
			
			res.on('end', () => {
				resolve(data);
			});
		});
		
		request.on('error', (err) => {
			reject(err);
		});
		
		// Таймаут
		setTimeout(() => {
			request.destroy();
			reject(new Error('Request timeout'));
		}, timeout);
	});
}

/**
 * Извлекает описание из HTML страницы справки
 */
function extractDescription(html: string, typeName: string): string | null {
	// Удаляем скрипты и стили
	html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
	html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
	
	// 1. Ищем секцию "Описание" (Description) - это основной источник
	const descHeadingMatch = html.match(/<h[1-6][^>]*>[\s]*Описание[\s]*<\/h[1-6]>/i);
	if (descHeadingMatch) {
		const descIndex = html.indexOf(descHeadingMatch[0]);
		const afterDesc = html.substring(descIndex + descHeadingMatch[0].length);
		// Ищем первый параграф после заголовка "Описание"
		const paraMatch = afterDesc.match(/<p[^>]*>([\s\S]{20,500})<\/p>/i);
		if (paraMatch) {
			const text = cleanHtml(paraMatch[1]);
			if (text.length > 20) {
				return text.substring(0, 400);
			}
		}
	}
	
	// 2. Ищем в мета-описании
	const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
	if (metaDescMatch) {
		const metaText = metaDescMatch[1].trim();
		if (metaText.length > 20) {
			return metaText.substring(0, 300);
		}
	}
	
	// 3. Ищем заголовок с именем интерфейса и следующий параграф
	const headingMatch = html.match(new RegExp(`<h[1-6][^>]*>.*?${typeName}.*?<\\/h[1-6]>`, 'i'));
	if (headingMatch) {
		const headingIndex = html.indexOf(headingMatch[0]);
		const afterHeading = html.substring(headingIndex + headingMatch[0].length);
		const paraMatch = afterHeading.match(/<p[^>]*>([\s\S]{20,500})<\/p>/i);
		if (paraMatch) {
			const text = cleanHtml(paraMatch[1]);
			if (text.length > 20) {
				return text.substring(0, 300);
			}
		}
	}
	
	return null;
}

/**
 * Очищает HTML от тегов и нормализует пробелы
 */
function cleanHtml(html: string): string {
	return html
		.replace(/<[^>]+>/g, ' ') // Удаляем теги
		.replace(/&nbsp;/g, ' ')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, ' ') // Нормализуем пробелы
		.trim();
}

/**
 * Форматтер кода для FORe
 */
class ForeDocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {
	provideDocumentFormattingEdits(
		document: vscode.TextDocument,
		options: vscode.FormattingOptions,
		token: vscode.CancellationToken
	): vscode.ProviderResult<vscode.TextEdit[]> {
		const text = document.getText();
		const formatted = this.formatForeCode(text, options);
		
		if (formatted === text) {
			return [];
		}
		
		const range = new vscode.Range(
			document.positionAt(0),
			document.positionAt(text.length)
		);
		
		return [new vscode.TextEdit(range, formatted)];
	}
	
	private formatForeCode(code: string, options: vscode.FormattingOptions): string {
		const lines = code.split(/\r?\n/);
		const formattedLines: string[] = [];
		let indentLevel = 0;
		const indentString = options.insertSpaces 
			? ' '.repeat(options.tabSize) 
			: '\t';
		
		for (let i = 0; i < lines.length; i++) {
			let line = lines[i];
			const trimmed = line.trim();
			
			// Пропускаем пустые строки в начале и множественные пустые строки
			if (trimmed === '') {
				// Оставляем максимум одну пустую строку
				if (formattedLines.length > 0 && formattedLines[formattedLines.length - 1] !== '') {
					formattedLines.push('');
				}
				continue;
			}
			
			// Определяем текущий уровень отступа
			const currentIndent = this.getIndentLevel(line, indentString);
			
			// Уменьшаем отступ для End, Else, Except
			if (this.isEndKeyword(trimmed)) {
				indentLevel = Math.max(0, indentLevel - 1);
			}
			
			// Форматируем строку
			const formattedLine = this.formatLine(trimmed, indentLevel, indentString);
			formattedLines.push(formattedLine);
			
			// Увеличиваем отступ для Begin, Then, Do, Except
			if (this.isBeginKeyword(trimmed)) {
				indentLevel++;
			}
		}
		
		// Убираем лишние пустые строки в конце
		while (formattedLines.length > 0 && formattedLines[formattedLines.length - 1] === '') {
			formattedLines.pop();
		}
		
		return formattedLines.join('\n') + (formattedLines.length > 0 ? '\n' : '');
	}
	
	private getIndentLevel(line: string, indentString: string): number {
		let level = 0;
		let pos = 0;
		while (pos < line.length && (line[pos] === '\t' || line[pos] === ' ')) {
			if (line[pos] === '\t') {
				level++;
				pos++;
			} else {
				let spaces = 0;
				while (pos < line.length && line[pos] === ' ') {
					spaces++;
					pos++;
				}
				level += Math.floor(spaces / (indentString.length || 1));
			}
		}
		return level;
	}
	
	private isEndKeyword(line: string): boolean {
		const upper = line.toUpperCase();
		return upper.startsWith('END ') || 
			   upper === 'END' ||
			   upper.startsWith('ELSE') ||
			   upper.startsWith('EXCEPT');
	}
	
	private isBeginKeyword(line: string): boolean {
		const upper = line.toUpperCase();
		return upper.startsWith('BEGIN') ||
			   (upper.includes(' THEN') && !upper.startsWith('IF NOT')) ||
			   (upper.includes(' DO') && !upper.startsWith('EXCEPT')) ||
			   upper.startsWith('EXCEPT');
	}
	
	private formatLine(line: string, indentLevel: number, indentString: string): string {
		// Применяем отступ
		const indent = indentString.repeat(indentLevel);
		
		// Форматируем операторы (добавляем пробелы вокруг :=, =, <>, <=, >=, etc.)
		line = line
			.replace(/([^<>=:]):=([^=])/g, '$1 := $2')  // :=
			.replace(/([^<>=!])=([^=])/g, '$1 = $2')     // =
			.replace(/<>/g, ' <> ')                      // <>
			.replace(/([^<])<=([^=])/g, '$1 <= $2')     // <=
			.replace(/([^>])>=([^=])/g, '$1 >= $2')     // >=
			.replace(/([^<])<([^=<>])/g, '$1 < $2')      // <
			.replace(/([^>])>([^=<>])/g, '$1 > $2')     // >
			.replace(/\s+/g, ' ')                        // Множественные пробелы
			.trim();
		
		// Форматируем ключевые слова (делаем первую букву заглавной)
		line = this.formatKeywords(line);
		
		return indent + line;
	}
	
	private formatKeywords(line: string): string {
		// Список ключевых слов FORe
		const keywords = [
			'Begin', 'End', 'If', 'Then', 'Else', 'For', 'To', 'Do', 'While', 
			'Repeat', 'Until', 'Case', 'Of', 'Try', 'Except', 'On', 'Do',
			'Var', 'Const', 'Function', 'Sub', 'Procedure', 'Public', 'Private', 
			'Shared', 'Class', 'Return', 'Continue', 'Break', 'As', 'Array', 'Of',
			'And', 'Or', 'Not', 'Xor', 'Div', 'Mod', 'In'
		];
		
		let formatted = line;
		for (const keyword of keywords) {
			const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
			formatted = formatted.replace(regex, keyword);
		}
		
		return formatted;
	}
}

/**
 * Диагностический провайдер для FORe (линтинг)
 */
class ForeDiagnosticProvider {
	private diagnosticCollection: vscode.DiagnosticCollection;
	
	constructor() {
		this.diagnosticCollection = vscode.languages.createDiagnosticCollection('fore-linter');
	}
	
	updateDiagnostics(document: vscode.TextDocument): void {
		const diagnostics: vscode.Diagnostic[] = [];
		const text = document.getText();
		const lines = text.split(/\r?\n/);
		
		// Проверяем сбалансированность блоков
		this.checkBlockBalance(lines, diagnostics);
		
		// Проверяем синтаксис
		this.checkSyntax(lines, diagnostics);
		
		this.diagnosticCollection.set(document.uri, diagnostics);
	}
	
	dispose(): void {
		this.diagnosticCollection.dispose();
	}
	
	private checkBlockBalance(lines: string[], diagnostics: vscode.Diagnostic[]): void {
		const stack: Array<{ type: string; line: number; keyword: string }> = [];
		
		// Вспомогательная функция для поиска последнего элемента в стеке
		const findLastIndex = (predicate: (item: { type: string; line: number; keyword: string }) => boolean): number => {
			for (let i = stack.length - 1; i >= 0; i--) {
				if (predicate(stack[i])) {
					return i;
				}
			}
			return -1;
		};
		
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			const upper = line.trim().toUpperCase();
			
			// Открывающие блоки
			if (upper.startsWith('BEGIN')) {
				stack.push({ type: 'begin', line: i, keyword: 'Begin' });
			} else if (upper.startsWith('IF ') || upper.includes(' IF ')) {
				if (upper.includes(' THEN')) {
					stack.push({ type: 'if', line: i, keyword: 'If' });
				}
			} else if (upper.startsWith('TRY')) {
				stack.push({ type: 'try', line: i, keyword: 'Try' });
			} else if (upper.startsWith('FOR ') || upper.includes(' FOR ')) {
				if (upper.includes(' DO')) {
					stack.push({ type: 'for', line: i, keyword: 'For' });
				}
			} else if (upper.startsWith('WHILE ') || upper.includes(' WHILE ')) {
				if (upper.includes(' DO')) {
					stack.push({ type: 'while', line: i, keyword: 'While' });
				}
			} else if (upper.startsWith('CASE ') || upper.includes(' CASE ')) {
				// Проверяем, что Case не находится внутри строки (SQL запрос)
				const caseMatch = line.match(/\bCASE\b/i);
				if (caseMatch && caseMatch.index !== undefined) {
					const beforeCase = line.substring(0, caseMatch.index);
					// Подсчитываем количество кавычек до Case - если нечетное, значит мы внутри строки
					const singleQuotes = (beforeCase.match(/'/g) || []).length;
					const doubleQuotes = (beforeCase.match(/"/g) || []).length;
					// Если мы внутри строки (в кавычках), пропускаем
					if (singleQuotes % 2 === 0 && doubleQuotes % 2 === 0) {
						stack.push({ type: 'case', line: i, keyword: 'Case' });
					}
				}
			}
			
			// Закрывающие блоки
			if (upper.startsWith('END ')) {
				const endMatch = upper.match(/^END\s+(\w+)/);
				if (endMatch) {
					const endType = endMatch[1].toLowerCase();
					if (endType === 'function' || endType === 'sub' || endType === 'procedure') {
						// Удаляем соответствующий Begin
						const beginIndex = findLastIndex(item => item.type === 'begin');
						if (beginIndex >= 0) {
							stack.splice(beginIndex, 1);
						} else {
							diagnostics.push({
								range: new vscode.Range(i, 0, i, line.length),
								message: `Несоответствующий End: нет открывающего Begin`,
								severity: vscode.DiagnosticSeverity.Warning,
								source: 'fore-linter'
							});
						}
					} else if (endType === 'if') {
						const ifIndex = findLastIndex(item => item.type === 'if');
						if (ifIndex >= 0) {
							stack.splice(ifIndex, 1);
						} else {
							diagnostics.push({
								range: new vscode.Range(i, 0, i, line.length),
								message: `Несоответствующий End If: нет открывающего If`,
								severity: vscode.DiagnosticSeverity.Warning,
								source: 'fore-linter'
							});
						}
					} else if (endType === 'try') {
						const tryIndex = findLastIndex(item => item.type === 'try');
						if (tryIndex >= 0) {
							stack.splice(tryIndex, 1);
						} else {
							diagnostics.push({
								range: new vscode.Range(i, 0, i, line.length),
								message: `Несоответствующий End Try: нет открывающего Try`,
								severity: vscode.DiagnosticSeverity.Warning,
								source: 'fore-linter'
							});
						}
					} else if (endType === 'for') {
						const forIndex = findLastIndex(item => item.type === 'for');
						if (forIndex >= 0) {
							stack.splice(forIndex, 1);
						}
					} else if (endType === 'while') {
						const whileIndex = findLastIndex(item => item.type === 'while');
						if (whileIndex >= 0) {
							stack.splice(whileIndex, 1);
						}
					} else if (endType === 'select' || endType === 'case') {
						const caseIndex = findLastIndex(item => item.type === 'case');
						if (caseIndex >= 0) {
							stack.splice(caseIndex, 1);
						}
					}
				} else if (upper === 'END') {
					// Просто End - должен закрывать Begin
					const beginIndex = findLastIndex(item => item.type === 'begin');
					if (beginIndex >= 0) {
						stack.splice(beginIndex, 1);
					}
				}
			} else if (upper.startsWith('EXCEPT')) {
				const tryIndex = findLastIndex(item => item.type === 'try');
				if (tryIndex < 0) {
					diagnostics.push({
						range: new vscode.Range(i, 0, i, line.length),
						message: `Except без соответствующего Try`,
						severity: vscode.DiagnosticSeverity.Warning,
						source: 'fore-linter'
					});
				}
			} else if (upper.startsWith('ELSE')) {
				// Else не требует проверки баланса, это часть If
			}
		}
		
		// Проверяем незакрытые блоки
		for (const item of stack) {
			diagnostics.push({
				range: new vscode.Range(item.line, 0, item.line, lines[item.line].length),
				message: `Незакрытый блок ${item.keyword}`,
				severity: vscode.DiagnosticSeverity.Warning,
				source: 'fore-linter'
			});
		}
	}
	
	private checkSyntax(lines: string[], diagnostics: vscode.Diagnostic[]): void {
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			const trimmed = line.trim();
			const upper = trimmed.toUpperCase();
			
			// Проверка на отсутствие точки с запятой после объявлений
			if (upper.startsWith('FUNCTION ') || upper.startsWith('SUB ') || upper.startsWith('PROCEDURE ')) {
				if (!trimmed.endsWith(';') && !trimmed.includes(':')) {
					// Это нормально, если есть параметры
				}
			}
			
			// Проверка на правильное использование := для присваивания
			if (trimmed.includes('=') && !trimmed.includes(':=') && 
				!upper.includes(' IF ') && !upper.includes(' THEN ') && 
				!upper.includes(' CASE ') && !upper.includes(' SELECT ')) {
				// Это может быть сравнение, не ошибка
			}
			
			// Проверка на использование Then без If
			// В FORe If и Then почти всегда на одной строке, поэтому проверяем только явные ошибки
			const hasIf = /\bIF\b/i.test(trimmed);
			const hasThen = /\bTHEN\b/i.test(trimmed);
			
			// Проверяем, что Then не находится внутри строки (SQL запрос)
			let thenInString = false;
			if (hasThen) {
				const thenMatch = trimmed.match(/\bTHEN\b/i);
				if (thenMatch && thenMatch.index !== undefined) {
					const beforeThen = trimmed.substring(0, thenMatch.index);
					const singleQuotes = (beforeThen.match(/'/g) || []).length;
					const doubleQuotes = (beforeThen.match(/"/g) || []).length;
					// Если мы внутри строки (в кавычках), пропускаем проверку
					thenInString = (singleQuotes % 2 !== 0) || (doubleQuotes % 2 !== 0);
				}
			}
			
			// Если на строке есть и If и Then - это нормально, пропускаем проверку
			// Проверяем только если Then есть, а If нет на этой строке, и Then не в строке
			if (hasThen && !hasIf && !thenInString) {
				// Ищем соответствующий If выше (проверяем до 100 строк назад для многострочных условий)
				let ifFound = false;
				let ifCount = 0; // Счетчик вложенных If блоков
				
				// Идем назад от текущей строки
				for (let j = i - 1; j >= 0 && j >= i - 100; j--) {
					const prevLine = lines[j].trim();
					const prevUpper = prevLine.toUpperCase();
					
					// Пропускаем комментарии и пустые строки
					if (prevUpper.startsWith('//') || prevUpper.startsWith('{') || prevUpper.startsWith('/*') || prevLine === '') {
						continue;
					}
					
					// Проверяем End If - увеличиваем счетчик вложенности
					if (prevUpper.startsWith('END IF') || /\bEND\s+IF\b/i.test(prevUpper)) {
						ifCount++;
						continue;
					}
					
					// Если нашли If с Then
					if (/\bIF\b/i.test(prevUpper) && /\bTHEN\b/i.test(prevUpper)) {
						if (ifCount === 0) {
							// Это наш If
							ifFound = true;
							break;
						} else {
							// Это вложенный If, уменьшаем счетчик
							ifCount--;
						}
					}
				}
				
				// Выдаем предупреждение только если точно не нашли соответствующий If
				// И только если Then находится в начале строки (явная ошибка)
				if (!ifFound && trimmed.match(/^\s*THEN\b/i)) {
					diagnostics.push({
						range: new vscode.Range(i, 0, i, line.length),
						message: `Then без соответствующего If`,
						severity: vscode.DiagnosticSeverity.Warning,
						source: 'fore-linter'
					});
				}
			}
		}
	}
}

/**
 * Провайдер для навигации (Go to Definition, Find References)
 */
class ForeDefinitionProvider implements vscode.DefinitionProvider, vscode.ReferenceProvider {
	provideDefinition(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken
	): vscode.ProviderResult<vscode.Definition | vscode.LocationLink[]> {
		const wordRange = document.getWordRangeAtPosition(position);
		if (!wordRange) {
			return null;
		}
		
		const word = document.getText(wordRange);
		const definitions = this.findDefinitions(document, word);
		
		return definitions.length > 0 ? definitions : null;
	}
	
	provideReferences(
		document: vscode.TextDocument,
		position: vscode.Position,
		context: vscode.ReferenceContext,
		token: vscode.CancellationToken
	): vscode.ProviderResult<vscode.Location[]> {
		const wordRange = document.getWordRangeAtPosition(position);
		if (!wordRange) {
			return null;
		}
		
		const word = document.getText(wordRange);
		const references = this.findReferences(document, word);
		
		return references.length > 0 ? references : null;
	}
	
	private findDefinitions(document: vscode.TextDocument, symbol: string): vscode.Location[] {
		const text = document.getText();
		const lines = text.split(/\r?\n/);
		const definitions: vscode.Location[] = [];
		
		// Паттерны для поиска определений
		const functionPattern = new RegExp(`(?:Public\\s+)?(?:Shared\\s+)?Function\\s+${this.escapeRegex(symbol)}\\s*\\(`, 'i');
		const subPattern = new RegExp(`(?:Public\\s+)?(?:Shared\\s+)?Sub\\s+${this.escapeRegex(symbol)}\\s*\\(`, 'i');
		const classPattern = new RegExp(`(?:Public\\s+)?Class\\s+${this.escapeRegex(symbol)}\\s*:`, 'i');
		const varPattern = new RegExp(`(?:Var|Const)\\s+${this.escapeRegex(symbol)}\\s*[:=]`, 'i');
		const propertyPattern = new RegExp(`(?:Public\\s+)?(?:Shared\\s+)?Property\\s+${this.escapeRegex(symbol)}\\s*:`, 'i');
		
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			
			if (functionPattern.test(line) || subPattern.test(line) || 
				classPattern.test(line) || varPattern.test(line) || propertyPattern.test(line)) {
				const match = line.match(new RegExp(`\\b${this.escapeRegex(symbol)}\\b`, 'i'));
				if (match) {
					const index = line.indexOf(match[0]);
					definitions.push(new vscode.Location(
						document.uri,
						new vscode.Position(i, index)
					));
				}
			}
		}
		
		return definitions;
	}
	
	private findReferences(document: vscode.TextDocument, symbol: string): vscode.Location[] {
		const text = document.getText();
		const lines = text.split(/\r?\n/);
		const references: vscode.Location[] = [];
		const symbolRegex = new RegExp(`\\b${this.escapeRegex(symbol)}\\b`, 'gi');
		
		// Исключаем паттерны определений
		const definitionPatterns = [
			new RegExp(`(?:Public\\s+)?(?:Shared\\s+)?Function\\s+${this.escapeRegex(symbol)}\\s*\\(`, 'i'),
			new RegExp(`(?:Public\\s+)?(?:Shared\\s+)?Sub\\s+${this.escapeRegex(symbol)}\\s*\\(`, 'i'),
			new RegExp(`(?:Public\\s+)?Class\\s+${this.escapeRegex(symbol)}\\s*:`, 'i'),
			new RegExp(`(?:Var|Const)\\s+${this.escapeRegex(symbol)}\\s*[:=]`, 'i'),
			new RegExp(`(?:Public\\s+)?(?:Shared\\s+)?Property\\s+${this.escapeRegex(symbol)}\\s*:`, 'i'),
			new RegExp(`End\\s+(?:Function|Sub|Class)\\s+${this.escapeRegex(symbol)}`, 'i')
		];
		
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			
			// Пропускаем строки с определениями
			if (definitionPatterns.some(pattern => pattern.test(line))) {
				continue;
			}
			
			let match;
			while ((match = symbolRegex.exec(line)) !== null) {
				references.push(new vscode.Location(
					document.uri,
					new vscode.Position(i, match.index)
				));
			}
			symbolRegex.lastIndex = 0; // Сбрасываем для следующей строки
		}
		
		return references;
	}
	
	private escapeRegex(str: string): string {
		return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
}

/**
 * Провайдер для поиска символов (Symbol search)
 */
class ForeDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
	provideDocumentSymbols(
		document: vscode.TextDocument,
		token: vscode.CancellationToken
	): vscode.ProviderResult<vscode.SymbolInformation[] | vscode.DocumentSymbol[]> {
		const text = document.getText();
		const lines = text.split(/\r?\n/);
		const symbols: vscode.DocumentSymbol[] = [];
		
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			const trimmed = line.trim();
			const upper = trimmed.toUpperCase();
			
			// Функции
			const functionMatch = trimmed.match(/(?:Public\s+)?(?:Shared\s+)?Function\s+(\w+)\s*\(/i);
			if (functionMatch) {
				const name = functionMatch[1];
				const endLine = this.findEndLine(lines, i, 'Function', name);
				symbols.push(new vscode.DocumentSymbol(
					name,
					'Function',
					vscode.SymbolKind.Function,
					new vscode.Range(i, line.indexOf(name), endLine, lines[endLine].length),
					new vscode.Range(i, 0, i, line.length)
				));
			}
			
			// Процедуры
			const subMatch = trimmed.match(/(?:Public\s+)?(?:Shared\s+)?Sub\s+(\w+)\s*\(/i);
			if (subMatch) {
				const name = subMatch[1];
				const endLine = this.findEndLine(lines, i, 'Sub', name);
				symbols.push(new vscode.DocumentSymbol(
					name,
					'Sub',
					vscode.SymbolKind.Method,
					new vscode.Range(i, line.indexOf(name), endLine, lines[endLine].length),
					new vscode.Range(i, 0, i, line.length)
				));
			}
			
			// Классы
			const classMatch = trimmed.match(/(?:Public\s+)?Class\s+(\w+)\s*:/i);
			if (classMatch) {
				const name = classMatch[1];
				const endLine = this.findEndLine(lines, i, 'Class', name);
				symbols.push(new vscode.DocumentSymbol(
					name,
					'Class',
					vscode.SymbolKind.Class,
					new vscode.Range(i, line.indexOf(name), endLine, lines[endLine].length),
					new vscode.Range(i, 0, i, line.length)
				));
			}
			
			// Константы
			const constMatch = trimmed.match(/Const\s+(\w+)\s*=/i);
			if (constMatch) {
				const name = constMatch[1];
				symbols.push(new vscode.DocumentSymbol(
					name,
					'Const',
					vscode.SymbolKind.Constant,
					new vscode.Range(i, line.indexOf(name), i, line.length),
					new vscode.Range(i, 0, i, line.length)
				));
			}
		}
		
		return symbols;
	}
	
	private findEndLine(lines: string[], startLine: number, type: string, name: string): number {
		const endPattern = new RegExp(`End\\s+${type}\\s+${name}`, 'i');
		for (let i = startLine + 1; i < lines.length; i++) {
			if (endPattern.test(lines[i])) {
				return i;
			}
		}
		return startLine;
	}
}

/**
 * Hover provider для FORe
 */
class ForeHoverProvider implements vscode.HoverProvider {
	async provideHover(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken
	): Promise<vscode.Hover | null> {
		const range = document.getWordRangeAtPosition(position, /\bI[A-Z][A-Za-z0-9_]*\b|\b[A-Z][A-Za-z0-9_]*Class\b/);
		
		if (!range) {
			return null;
		}

		const word = document.getText(range);
		
		// Проверяем, является ли это интерфейсом или классом FORe
		if (!word.match(/^I[A-Z]/) && !word.endsWith('Class')) {
			return null;
		}

		// Получаем URL для интерфейса
		const url = getInterfaceUrl(word);
		
		// Показываем базовую информацию
		const markdown = new vscode.MarkdownString();
		markdown.appendMarkdown(`**${word}**\n\n`);
		
		if (url) {
			// Пробуем получить документацию с таймаутом
			try {
				const doc = await Promise.race([
					fetchDocumentation(word),
					new Promise<{ description: string; url: string } | null>((resolve) => setTimeout(() => resolve(null), 2000))
				]);
				
				if (doc && doc.description) {
					markdown.appendText(doc.description);
					markdown.appendMarkdown(`\n\n`);
				}
				
				markdown.appendMarkdown(`[📖 Открыть в справке Foresight](${doc?.url || url})`);
			} catch (error) {
				// При ошибке показываем хотя бы ссылку
				markdown.appendMarkdown(`[📖 Открыть в справке Foresight](${url})`);
			}
		} else {
			// Если URL не найден, используем поиск
			markdown.appendMarkdown(`[📖 Поиск в справке Foresight](https://help.fsight.ru/ru/search.html?q=${encodeURIComponent(word)})`);
		}
		
		markdown.isTrusted = true;
		
		return new vscode.Hover(markdown, range);
	}
}

export function activate(context: vscode.ExtensionContext) {
	console.log('FORe Language extension is now active!');

	// Загружаем маппинг интерфейсов
	loadInterfaceDocs();

	// Регистрируем hover provider
	const hoverProvider = vscode.languages.registerHoverProvider('fore', new ForeHoverProvider());
	context.subscriptions.push(hoverProvider);
	
	// Регистрируем форматтер кода
	const formatter = vscode.languages.registerDocumentFormattingEditProvider('fore', new ForeDocumentFormattingEditProvider());
	context.subscriptions.push(formatter);
	
	// Регистрируем диагностический провайдер (линтинг)
	const diagnosticProvider = new ForeDiagnosticProvider();
	
	// Обновляем диагностику при изменении документа
	const updateDiagnostics = (document: vscode.TextDocument) => {
		if (document.languageId === 'fore') {
			diagnosticProvider.updateDiagnostics(document);
		}
	};
	
	// Проверяем все открытые документы при активации
	vscode.workspace.textDocuments.forEach(updateDiagnostics);
	
	// Подписываемся на изменения
	const changeSubscription = vscode.workspace.onDidChangeTextDocument(e => {
		updateDiagnostics(e.document);
	});
	
	const openSubscription = vscode.workspace.onDidOpenTextDocument(updateDiagnostics);
	
	context.subscriptions.push(diagnosticProvider, changeSubscription, openSubscription);
	
	// Регистрируем провайдеры навигации
	const definitionProvider = vscode.languages.registerDefinitionProvider('fore', new ForeDefinitionProvider());
	const referenceProvider = vscode.languages.registerReferenceProvider('fore', new ForeDefinitionProvider());
	const symbolProvider = vscode.languages.registerDocumentSymbolProvider('fore', new ForeDocumentSymbolProvider());
	
	context.subscriptions.push(definitionProvider, referenceProvider, symbolProvider);
}

export function deactivate() {}

