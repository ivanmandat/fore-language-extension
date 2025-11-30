# RdsService.exportData

RdsService.exportData
-


# RdsService.exportData


## Синтаксис


exportData(dict: [PP.Rds.Dictionary](../Dictionary/Dictionary.htm),
 schemaKey: String, callback: PP.Delegate);


## Параметры


dict. Справочник НСИ.


schemaKey. Ключ схемы экспорта.


callback. Функция обратного
 вызова.


## Описание


Метод exportData инициализирует
 процесс экспорта данных по указанной схеме.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm)
 с наименованием «dictionaryBox» (см. «[Пример
 создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Справочник НСИ должен содержать
 схему экспорта:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим сервис для работы со справочником
var service = source.getPPService();
// Получим все схемы экспорта
sch = source.getExportSchema();
// Получим ключ первой схемы экспорта
key = sch[0].k;
// Применим схему экспорта
service.exportData(source, key)
В результате выполнения примера был инициализирован процесс экспорта.


См. также:


[RdsService](RdsService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
