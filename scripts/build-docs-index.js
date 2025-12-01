const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'fsight_help', 'md_help');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'docs-index.json');

/**
 * Извлекает описание из markdown файла
 */
function extractDescription(content) {
	// Ищем секцию "## Описание" и извлекаем текст до следующей секции
	const descMatch = content.match(/##\s*Описание\s*\n+\s*(.*?)(?=\n##|$)/is);
	if (descMatch) {
		let desc = descMatch[1]
			.replace(/!\[.*?\]\(.*?\)/g, '') // Удаляем изображения
			.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Удаляем markdown ссылки, оставляем текст
			.replace(/\n+/g, ' ') // Заменяем переносы строк на пробелы
			.replace(/\s+/g, ' ') // Множественные пробелы в один
			.trim();
		
		// Берем первые 500 символов
		if (desc.length > 500) {
			desc = desc.substring(0, 497) + '...';
		}
		
		return desc || null;
	}
	return null;
}

/**
 * Извлекает свойства из markdown файла
 */
function extractProperties(content) {
	const props = [];
	const propsSection = content.match(/##\s*Свойства\s*\n+\s*(.*?)(?=\n##|$)/is);
	if (propsSection) {
		// Ищем ссылки на свойства в формате [PropertyName](link)
		const propMatches = propsSection[1].matchAll(/\[([A-Z][A-Za-z0-9_]+)\]\([^)]+\)/g);
		for (const match of propMatches) {
			const propName = match[1];
			// Пропускаем общие слова и служебные элементы
			if (propName && !props.includes(propName) && 
				!['Имя', 'Свойства', 'Краткое', 'Описание'].includes(propName)) {
				props.push(propName);
			}
		}
	}
	return props;
}

/**
 * Извлекает методы из markdown файла
 */
function extractMethods(content) {
	const methods = [];
	const methodsSection = content.match(/##\s*Методы\s*\n+\s*(.*?)(?=\n##|$)/is);
	if (methodsSection) {
		// Ищем ссылки на методы в формате [MethodName](link)
		const methodMatches = methodsSection[1].matchAll(/\[([A-Z][A-Za-z0-9_]+)\]\([^)]+\)/g);
		for (const match of methodMatches) {
			const methodName = match[1];
			// Пропускаем общие слова и служебные элементы
			if (methodName && !methods.includes(methodName) && 
				!['Имя', 'Методы', 'Краткое', 'Описание'].includes(methodName)) {
				methods.push(methodName);
			}
		}
	}
	return methods;
}

/**
 * Рекурсивно сканирует директорию и находит все markdown файлы
 */
function findMarkdownFiles(dir, fileList = []) {
	const files = fs.readdirSync(dir);
	
	for (const file of files) {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);
		
		if (stat.isDirectory()) {
			findMarkdownFiles(filePath, fileList);
		} else if (file.endsWith('.md')) {
			fileList.push(filePath);
		}
	}
	
	return fileList;
}

/**
 * Определяет, является ли файл файлом интерфейса или класса
 */
function isInterfaceOrClassFile(filePath) {
	const fileName = path.basename(filePath, '.md');
	const dirName = path.dirname(filePath);
	
	// Проверяем, что файл находится в папке Interface или Class
	if (dirName.includes('Interface') || dirName.includes('Class')) {
		const parentDir = path.basename(dirName);
		// Основной файл интерфейса/класса - имя файла совпадает с именем папки
		// Или для интерфейсов - имя файла начинается с I и не содержит точки (не свойство/метод)
		if (fileName === parentDir) {
			return true;
		}
		// Для интерфейсов, которые могут быть в другой структуре
		if (fileName.startsWith('I') && !fileName.includes('.')) {
			return true;
		}
	}
	
	return false;
}

/**
 * Извлекает имя интерфейса/класса из пути файла
 */
function extractName(filePath) {
	const fileName = path.basename(filePath, '.md');
	const dirName = path.dirname(filePath);
	const parentDir = path.basename(dirName);
	
	// Если имя файла совпадает с именем папки, используем его
	if (fileName === parentDir) {
		return fileName;
	}
	
	// Иначе используем имя файла
	return fileName;
}

/**
 * Создает относительный путь от DOCS_DIR
 */
function getRelativePath(filePath) {
	return path.relative(DOCS_DIR, filePath).replace(/\\/g, '/');
}

/**
 * Основная функция
 */
function buildDocsIndex() {
	console.log('Building documentation index...');
	console.log(`Scanning directory: ${DOCS_DIR}`);
	
	if (!fs.existsSync(DOCS_DIR)) {
		console.error(`Error: Documentation directory not found: ${DOCS_DIR}`);
		process.exit(1);
	}
	
	const index = {};
	const allFiles = findMarkdownFiles(DOCS_DIR);
	console.log(`Found ${allFiles.length} markdown files`);
	
	let processedCount = 0;
	
	for (const filePath of allFiles) {
		if (isInterfaceOrClassFile(filePath)) {
			try {
				const content = fs.readFileSync(filePath, 'utf8');
				const name = extractName(filePath);
				const relativePath = getRelativePath(filePath);
				
				const description = extractDescription(content);
				const properties = extractProperties(content);
				const methods = extractMethods(content);
				
				index[name] = {
					path: relativePath,
					description: description || '',
					properties: properties,
					methods: methods
				};
				
				processedCount++;
				if (processedCount % 100 === 0) {
					console.log(`Processed ${processedCount} files...`);
				}
			} catch (error) {
				console.warn(`Error processing ${filePath}: ${error.message}`);
			}
		}
	}
	
	// Сохраняем индекс
	const outputDir = path.dirname(OUTPUT_FILE);
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}
	
	fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, '\t'), 'utf8');
	
	console.log(`\nDone! Processed ${processedCount} interfaces/classes`);
	console.log(`Index saved to: ${OUTPUT_FILE}`);
	console.log(`Total entries: ${Object.keys(index).length}`);
}

// Запускаем
buildDocsIndex();

