# Dictionary.ExportSchema

Dictionary.ExportSchema
-


# Dictionary.ExportSchema


## Синтаксис


ExportSchema;


## Описание


Свойство ExportSchema определяет
 массив схем экспорта справочника НСИ.


## Комментарии


Значение свойства устанавливается с помощью метода setExportSchema(schema),
 а возвращается - с помощью метода getExportSchema(key).
 Параметры:


schema. Схема экспорта.


key. String. Ключ схемы экспорта.
 Если не указано, возвращает все схемы экспорта.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm)
 с наименованием «dictionaryBox» (см. «[Пример
 создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Справочник НСИ должен содержать
 схему экспорта:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим все схемы экспорта
sch = source.getExportSchema();
// Получим ключ первой схемы импорта
key = sch[0].k;
// Получим представление дерева
dataA = dictionaryBox.getDataArea();
tree = dataA.getActiveDictTree();
// Инициализируем процесс экспорта
tree.exportData(key);
В результате выполнения примера был получен объект схемы экспорта и
 инициализирован процесс экспорта.


См. также:


[Dictionary](Dictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
