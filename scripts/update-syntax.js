const fs = require('fs');
const path = require('path');

const INDEX_FILE = path.join(__dirname, '..', 'src', 'docs-index.json');
const SYNTAX_FILE = path.join(__dirname, '..', 'syntaxes', 'fore.tmLanguage.json');

/**
 * Извлекает все имена интерфейсов и классов из индекса
 */
function extractNames() {
	if (!fs.existsSync(INDEX_FILE)) {
		console.error(`Index file not found: ${INDEX_FILE}`);
		process.exit(1);
	}
	
	const index = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf8'));
	const interfaces = [];
	const classes = [];
	
	for (const name of Object.keys(index)) {
		// Пропускаем свойства и методы (содержат точку)
		if (name.includes('.')) continue;
		
		if (name.startsWith('I') && name.length > 1) {
			interfaces.push(name);
		} else if (name.endsWith('Class')) {
			classes.push(name);
		}
	}
	
	return { interfaces, classes };
}

/**
 * Обновляет файл синтаксиса
 */
function updateSyntax() {
	console.log('Updating syntax file...');
	
	const { interfaces, classes } = extractNames();
	console.log(`Found ${interfaces.length} interfaces and ${classes.length} classes`);
	
	if (!fs.existsSync(SYNTAX_FILE)) {
		console.error(`Syntax file not found: ${SYNTAX_FILE}`);
		process.exit(1);
	}
	
	const syntax = JSON.parse(fs.readFileSync(SYNTAX_FILE, 'utf8'));
	
	// Обновляем паттерн для интерфейсов
	// Создаем regex для всех интерфейсов (но ограничиваем размер для производительности)
	// Используем общий паттерн для интерфейсов, начинающихся с I
	const interfacePattern = {
		"name": "support.type.interface.fore",
		"match": "\\bI[A-Z][A-Za-z0-9_]*\\b"
	};
	
	// Обновляем паттерн для классов
	const classPattern = {
		"name": "support.type.class.fore",
		"match": "\\b([A-Z][A-Za-z0-9_]*Class)\\b"
	};
	
	// Находим секцию types в repository
	if (!syntax.repository) {
		syntax.repository = {};
	}
	
	if (!syntax.repository.types) {
		syntax.repository.types = {
			"patterns": []
		};
	}
	
	// Обновляем паттерны
	const patterns = syntax.repository.types.patterns;
	
	// Удаляем старые паттерны для интерфейсов и классов
	syntax.repository.types.patterns = patterns.filter(p => 
		p.name !== 'support.type.interface.fore' && 
		p.name !== 'support.type.class.fore' &&
		p.name !== 'support.type.metabase.fore'
	);
	
	// Добавляем обновленные паттерны
	syntax.repository.types.patterns.push(interfacePattern);
	syntax.repository.types.patterns.push(classPattern);
	
	// Сохраняем обновленный файл
	fs.writeFileSync(SYNTAX_FILE, JSON.stringify(syntax, null, '\t'), 'utf8');
	
	console.log(`Updated syntax file: ${SYNTAX_FILE}`);
	console.log(`- Interfaces pattern: ${interfacePattern.match}`);
	console.log(`- Classes pattern: ${classPattern.match}`);
}

// Запускаем
updateSyntax();

