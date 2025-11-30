# IDatasetModel

IDatasetModel
-


# IDatasetModel


## Описание


Интерфейс IDatasetModel содержит
 свойства и методы для доступа к структуре источника данных.


## Комментарии


Интерфейс позволяет работать со структурой реляционного источника данных
 репозитория.


К реляционным источникам данных относятся:


	- [таблица (присоединенная таблица)](../ITable/ITable.htm);


	- [запрос](../IQuery/IQuery.htm);


	- [представление](../IView/IView.htm);


	- [источник данных ODBC](../IOdbcDataset/IOdbcDataset.htm);


	- [журнал](../ILog/ILog.htm);


	- [справочник
	 НСИ](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm);


	- [составной
	 справочник НСИ](KeRds.chm::/Interface/IRdsCompoundDictionary/IRdsCompoundDictionary.htm).


Для получения структуры откройте объект репозитория с помощью метода
 [IMetabaseObjectDescriptor.Bind](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Bind.htm)
 или [IMetabaseObjectDescriptor.Edit](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm)
 и приведите его к интерфейсу IDatasetModel.


Примечание.
 При приведении справочника НСИ/составного справочника НСИ к IDatasetModel
 множественные атрибуты не поддерживаются.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](IDatasetModel.Database.htm)
		 Свойство Database возвращает
		 объект, содержащий родительскую базу данных.


		 ![](../../Property_Image.gif)
		 [Fields](IDatasetModel.Fields.htm)
		 Свойство Fields возвращает
		 объект, содержащий коллекцию полей источника данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Open](IDatasetModel.Open.htm)
		 Метод Open открывает
		 источник данных.


		 ![](../../Sub_Image.gif)
		 [OpenWhere](IDatasetModel.OpenWhere.htm)
		 Метод OpenWhere открывает
		 источник данных, используя фильтр.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
