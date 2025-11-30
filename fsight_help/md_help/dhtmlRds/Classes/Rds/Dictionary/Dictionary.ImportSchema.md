# Dictionary.ImportSchema

Dictionary.ImportSchema
-


# Dictionary.ImportSchema


## Синтаксис


ImportSchema;


## Описание


Свойство ImportSchema определяет
 массив схем импорта справочника НСИ.


## Комментарии


Значение свойства устанавливается с помощью метода setImportSchema(schema),
 а возвращается - с помощью метода getImportSchema(key).
 Параметры:


schema. Схема импорта.


key. String. Ключ схемы импорта.
 Если не указано, возвращает все схемы импорта.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm)
 с наименованием «dictionaryBox» (см. «[Пример
 создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Справочник НСИ должен содержать
 схему импорта:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим все схемы импорта
sch = source.getImportSchema();
// Получим ключ первой схемы импорта
key = sch[0].k;
// Получим представление дерева
dataA = dictionaryBox.getDataArea();
tree = dataA.getActiveDictTree();
// Проверим отображение сообщений о результате импорта
console.debug("Сообщения о результате импорта: " + tree.getShowImportExportResult() ? "Включены" : "Выключены");
// Инициализируем процесс импорта
tree.importData(key);

В результате выполнения примера был инициализирован процесс импорта.


См. также:


[Dictionary](Dictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
