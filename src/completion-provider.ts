import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// Тип для записи в индексе документации
interface DocIndexEntry {
	path: string;
	description: string;
	properties: string[];
	methods: string[];
}

// Загружаем индекс документации (будет загружен из extension.ts)
let docsIndex: Record<string, DocIndexEntry> = {};

/**
 * Устанавливает индекс документации
 */
export function setDocsIndex(index: Record<string, DocIndexEntry>) {
	docsIndex = index;
}

/**
 * Completion Provider для FORe
 */
export class ForeCompletionProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
		const line = document.lineAt(position);
		const lineText = line.text.substring(0, position.character);
		
		// Проверяем, находимся ли мы после точки (доступ к свойству/методу)
		const dotMatch = lineText.match(/([A-Z][A-Za-z0-9_]*)\s*\.\s*$/);
		if (dotMatch) {
			const interfaceName = dotMatch[1];
			return this.getPropertyAndMethodCompletions(interfaceName);
		}
		
		// Проверяем, находимся ли мы в контексте объявления типа (после :)
		const typeMatch = lineText.match(/:\s*$/);
		if (typeMatch) {
			return this.getTypeCompletions();
		}
		
		// Проверяем, находимся ли мы в контексте As (приведение типа)
		const asMatch = lineText.match(/\bAs\s+$/i);
		if (asMatch) {
			return this.getTypeCompletions();
		}
		
		// Общие автодополнения для интерфейсов и классов
		return this.getGeneralCompletions();
	}
	
	/**
	 * Возвращает автодополнения для свойств и методов интерфейса
	 */
	private getPropertyAndMethodCompletions(interfaceName: string): vscode.CompletionItem[] {
		const items: vscode.CompletionItem[] = [];
		
		const docEntry = docsIndex[interfaceName];
		if (!docEntry) {
			return items;
		}
		
		// Добавляем свойства
		if (docEntry.properties && docEntry.properties.length > 0) {
			for (const prop of docEntry.properties) {
				const item = new vscode.CompletionItem(prop, vscode.CompletionItemKind.Property);
				item.detail = `${interfaceName}.${prop}`;
				item.documentation = new vscode.MarkdownString(`Свойство интерфейса **${interfaceName}**`);
				items.push(item);
			}
		}
		
		// Добавляем методы
		if (docEntry.methods && docEntry.methods.length > 0) {
			for (const method of docEntry.methods) {
				const item = new vscode.CompletionItem(method, vscode.CompletionItemKind.Method);
				item.detail = `${interfaceName}.${method}`;
				item.documentation = new vscode.MarkdownString(`Метод интерфейса **${interfaceName}**`);
				item.insertText = new vscode.SnippetString(`${method}($0)`);
				items.push(item);
			}
		}
		
		return items;
	}
	
	/**
	 * Возвращает автодополнения для типов (интерфейсы и классы)
	 */
	private getTypeCompletions(): vscode.CompletionItem[] {
		const items: vscode.CompletionItem[] = [];
		
		// Добавляем примитивные типы
		const primitiveTypes = ['Integer', 'String', 'Variant', 'Boolean', 'DateTime', 'TimeSpan', 'Array', 'ArrayList', 'HashTable'];
		for (const type of primitiveTypes) {
			const item = new vscode.CompletionItem(type, vscode.CompletionItemKind.TypeParameter);
			item.detail = 'Primitive type';
			items.push(item);
		}
		
		// Добавляем интерфейсы и классы из документации
		const maxItems = 500; // Ограничиваем количество для производительности
		let count = 0;
		
		for (const [name, entry] of Object.entries(docsIndex)) {
			if (count >= maxItems) break;
			
			// Пропускаем свойства и методы (содержат точку)
			if (name.includes('.')) continue;
			
			const isInterface = name.startsWith('I');
			const isClass = name.endsWith('Class');
			
			if (isInterface || isClass) {
				const item = new vscode.CompletionItem(
					name,
					isInterface ? vscode.CompletionItemKind.Interface : vscode.CompletionItemKind.Class
				);
				
				if (entry.description) {
					item.detail = entry.description.length > 100 
						? entry.description.substring(0, 97) + '...' 
						: entry.description;
				} else {
					item.detail = isInterface ? 'Interface' : 'Class';
				}
				
				item.documentation = new vscode.MarkdownString(
					`**${name}**\n\n${entry.description || 'No description available'}`
				);
				
				items.push(item);
				count++;
			}
		}
		
		return items;
	}
	
	/**
	 * Возвращает общие автодополнения
	 */
	private getGeneralCompletions(): vscode.CompletionItem[] {
		const items: vscode.CompletionItem[] = [];
		
		// Добавляем ключевые слова FORe
		const keywords = [
			'Begin', 'End', 'If', 'Then', 'Else', 'For', 'To', 'Do', 'While',
			'Try', 'Except', 'On', 'Var', 'Const', 'Function', 'Sub', 'Procedure',
			'Public', 'Private', 'Shared', 'Class', 'Return', 'Continue', 'Break',
			'As', 'Array', 'Of', 'And', 'Or', 'Not', 'Xor', 'Null', 'True', 'False'
		];
		
		for (const keyword of keywords) {
			const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);
			item.detail = 'FORe keyword';
			items.push(item);
		}
		
		// Добавляем популярные интерфейсы (первые 50)
		let count = 0;
		const popularInterfaces = ['IPrxReport', 'IMetabase', 'ICubeInstance', 'IDimInstance', 
			'IDatabaseInstance', 'IPrxControl', 'IPrxSheet', 'IDalCommand', 'IDalCursor'];
		
		for (const name of popularInterfaces) {
			if (docsIndex[name] && count < 50) {
				const entry = docsIndex[name];
				const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Interface);
				item.detail = entry.description || 'Interface';
				item.documentation = new vscode.MarkdownString(`**${name}**\n\n${entry.description || ''}`);
				items.push(item);
				count++;
			}
		}
		
		return items;
	}
}

