# IDatasetInstance

IDatasetInstance
-


# IDatasetInstance


## Описание


Интерфейс IDatasetInstance содержит
 свойства и методы для доступа к данным источников данных.


## Комментарии


Интерфейс позволяет работать с данными любого реляционного источника
 данных репозитория. К реляционным источникам данных относятся:


	- [таблица (присоединенная таблица)](../ITable/ITable.htm);


	- [запрос](../IQuery/IQuery.htm);


	- [представление](../IView/IView.htm);


	- [источник данных ODBC](../IOdbcDataset/IOdbcDataset.htm);


	- [журнал](../ILog/ILog.htm);


	- [справочник
	 НСИ](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm);


	- [составной
	 справочник НСИ](KeRds.chm::/Interface/IRdsCompoundDictionary/IRdsCompoundDictionary.htm).


Для получения данных откройте объект репозитория с помощью метода [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 или [IMetabaseObjectDescriptor.OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm)
 и приведите его к интерфейсу IDatasetInstance.


После завершения работы с данными для очистки памяти и освобождения
 ресурсов используйте метод [IDatasetInstance.Close](IDatasetInstance.Close.htm).


Примечание.
 При приведении справочника НСИ/составного справочника НСИ к IDatasetInstance
 множественные атрибуты не поддерживаются.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dataset](IDatasetInstance.Dataset.htm)
		 Свойство Dataset возвращает
		 структуру источника данных.


		 ![](../../Property_Image.gif)
		 [FieldDefs](IDatasetInstance.FieldDefs.htm)
		 Свойство FieldDefs
		 возвращает структуру всех полей источника данных.


		 ![](../../Property_Image.gif)
		 [Fields](IDatasetInstance.Fields.htm)
		 Свойство Fields возвращает
		 коллекцию значений полей текущей записи источника данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Close](IDatasetInstance.Close.htm)
		 Метод Close закрывает
		 источник данных.


		 ![](../../Sub_Image.gif)
		 [CreateBatchUpdate](IDatasetInstance.CreateBatchUpdate.htm)
		 Метод CreateBatchUpdate
		 создает обновления данных источника данных.


		 ![](../../Sub_Image.gif)
		 [Eof](IDatasetInstance.Eof.htm)
		 Метод Eof возвращает
		 True, если курсор находится
		 на последней записи в источнике данных, либо если в источнике
		 данных нет ни одной записи.


		 ![](../../Sub_Image.gif)
		 [Execute](IDatasetInstance.Execute.htm)
		 Метод Execute запускает
		 запрос на выполнение и возвращает количество обработанных записей.


		 ![](../../Sub_Image.gif)
		 [First](IDatasetInstance.First.htm)
		 Метод First осуществляет
		 переход на первую запись источника данных.


		 ![](../../Sub_Image.gif)
		 [Next](IDatasetInstance.Next.htm)
		 Метод Next осуществляет
		 переход на следующую запись в источнике данных.


		 ![](../../Sub_Image.gif)
		 [OpenCached](IDatasetInstance.OpenCached.htm)
		 Метод OpenCached позволяет
		 работать с кешем источника данных.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
