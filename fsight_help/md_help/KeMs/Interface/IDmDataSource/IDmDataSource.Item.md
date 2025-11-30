# IDmDataSource.Item

IDmDataSource.Item
-


# IDmDataSource.Item


## Синтаксис


		Item(Record: Integer; Field: Integer): Variant;


## Параметры


Record. Индекс записи;


Field. Индекс поля.


## Описание


Свойство Item возвращает
 значение указанного поля из источника данных.


## Комментарии


Индексация записей и полей сквозная и начинается с нуля.


Для получения количества полей в источнике данных используйте свойство
 [IDmDataSource.FieldCount](IDmDataSource.FieldCount.htm),
 для получения количества записей - свойство [IDmDataSource.RecordCount](IDmDataSource.RecordCount.htm).


Примечание.
 Если работа ведется с табличным источником данных, то Item
 всегда возвращает значение Null.


## Пример


Использование свойства приведено в примере для [IDmClusteringDetails.CategoriesCount](../IDmClusteringDetails/IDmClusteringDetails.CategoriesCount.htm).


См. также:


[IDmDataSource](IDmDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
