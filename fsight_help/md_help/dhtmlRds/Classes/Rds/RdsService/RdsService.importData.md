# RdsService.importData

RdsService.importData
-


# RdsService.importData


## Синтаксис


importData(dict: [PP.Rds.Dictionary](../Dictionary/Dictionary.htm),
 schemaKey: String, callback: PP.Delegate);


## Параметры


dict. Справочник НСИ.


schemaKey. Ключ схемы импорта.


callback. Функция обратного
 вызова.


## Описание


Метод importData инициализирует
 процесс импорта данных по указанной схеме.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm)
 с наименованием «dictionaryBox» (см. «[Пример
 создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Справочник НСИ должен содержать
 схему импорта:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим сервис для работы со справочником
var service = source.getPPService();
// Получим все схемы импорта
sch = source.getImportSchema();
// Получим ключ первой схемы импорта
key = sch[0].k;
// Применим схему импорта
service.importData(source, key)
В результате выполнения примера был инициализирован процесс импорта.


См. также:


[RdsService](RdsService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
