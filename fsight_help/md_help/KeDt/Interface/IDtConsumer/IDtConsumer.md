# IDtConsumer

IDtConsumer
-


# IDtConsumer


Сборка: Dt;


## Описание


Интерфейс IDtConsumer содержит
 базовые свойства и методы для работы с приёмником данных.


## Иерархия наследования


           [IDtObject](../IDtObject/IDtObject.htm)


           IDtConsumer


## Комментарии


[![](../../opened.gif)![](../../closed.gif)Интерфейсы,
 являющиеся наследниками IDtConsumer](javascript:TextPopup(this))


		- [IDtAccessConsumer](../IDtAccessConsumer/IDtAccessConsumer.htm)


		- [IDtBulkConsumer](../IDtBulkConsumer/IDtBulkConsumer.htm)


		- [IDtCustomConsumer](../IDtCustomConsumer/IDtCustomConsumer.htm)


		- [IDtDbaseConsumer](../IDtDbaseConsumer/IDtDbaseConsumer.htm)


		- [IDtExcelConsumer](../IDtExcelConsumer/IDtExcelConsumer.htm)


		- [IDtExcelConsumerEx](../IDtExcelConsumerEx/IDtExcelConsumerEx.htm)


		- [IDtMetabaseConsumer](../IDtMetabaseConsumer/IDtMetabaseConsumer.htm)


		- [IDtOleDbConsumer](../IDtOleDbConsumer/IDtOleDbConsumer.htm)


		- [IDtRdsConsumer](../IDtRdsConsumer/IDtRdsConsumer.htm)


		- [IDtSqlCommandConsumer](../IDtSqlCommandConsumer/IDtSqlCommandConsumer.htm)


		- [IDtTextConsumer](../IDtTextConsumer/IDtTextConsumer.htm)


		- [IDtUserConsumer](../IDtUserConsumer/IDtUserConsumer.htm)


		- [IDtUserConsumerEx](../IDtUserConsumerEx/IDtUserConsumerEx.htm)


		- [IDtVfpConsumer](../IDtVfpConsumer/IDtVfpConsumer.htm)


		- [IDtXmlConsumer](../IDtXmlConsumer/IDtXmlConsumer.htm)


[![](../../opened.gif)![](../../closed.gif)Свойства и методы,
 использующие объекты, реализованные интерфейсами-наследниками IDtConsumer](javascript:TextPopup(this))


		- [ICubeMetaExporter.Consumer](KeCubes.chm::/Interface/ICubeMetaExporter/ICubeMetaExporter.Consumer.htm).


		- [IEtlPlainDataConsumer.Consumer](KeEtl.chm::/Interface/IEtlPlainDataConsumer/IEtlPlainDataConsumer.Consumer.htm).


		- [IEtlPlainDataCopy.Consumer](KeEtl.chm::/Interface/IEtlPlainDataCopy/IEtlPlainDataCopy.Consumer.htm).


		- [IMetaRdsExportSchema.Consumer](KeRds.chm::/Interface/IMetaRdsExportSchema/IMetaRdsExportSchema.Consumer.htm).


Примечание.
 Для корректной работы необходимо закрывать открытый приёмник данных с
 помощью метода [IDtObject.Close](../IDtObject/IDtObject.Close.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalcFieldsErrors](IDtConsumer.CalcFieldsErrors.htm)


		 Свойство CalcFieldsErrors
		 возвращает коллекцию ошибок, возникших при расчете вычисляемых
		 полей.


## Свойства, унаследованные от [IDtObject](../IDtObject/IDtObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](../IDtObject/IDtObject.Active.htm)
		 Свойство Active возвращает
		 состояние источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [Fields](../IDtObject/IDtObject.Fields.htm)
		 Свойство Fields возвращает
		 описание полей источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [GetType](../IDtObject/IDtObject.GetType.htm)
		 Свойство GetType возвращает
		 тип источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [Metabase](../IDtObject/IDtObject.Metabase.htm)
		 Свойство Metabase
		 определяет репозиторий, в котором выполняется импорт или экспорт
		 данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clear](IDtConsumer.Clear.htm)
		 Метод Clear очищает
		 приёмник данных.


		 ![](../../Sub_Image.gif)
		 [Put](IDtConsumer.Put.htm)
		 Метод Put осуществляет
		 запись массива значений в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [PutRow](IDtConsumer.PutRow.htm)
		 Метод PutRow выполняет
		 выгрузку строки значений в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [PutProvider](IDtConsumer.PutProvider.htm)
		 Метод PutProvider осуществляет
		 экспорт всех значений указанного источника данных в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [WritingRowsCount](IDtConsumer.WritingRowsCount.htm)
		 Метод WritingRowsCount
		 возвращает количество записей, записанных в приёмник данных.


## Методы, унаследованные от [IDtObject](../IDtObject/IDtObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearFields](../IDtObject/IDtObject.ClearFields.htm)
		 Метод ClearFields
		 очищает список полей приёмника/источника данных.


		 ![](../../Sub_Image.gif)
		 [Close](../IDtObject/IDtObject.Close.htm)
		 Метод Close закрывает
		 источник/приёмник данных.


		 ![](../../Sub_Image.gif)
		 [FieldsFromFile](../IDtObject/IDtObject.FieldsFromFile.htm)
		 Метод FieldsFromFile
		 осуществляет чтение списка полей из файла-источника.


		 ![](../../Sub_Image.gif)
		 [Load](../IDtObject/IDtObject.Load.htm)
		 Метод Load загружает
		 параметры источника/приёмника данных из XML.


		 ![](../../Sub_Image.gif)
		 [Open](../IDtObject/IDtObject.Open.htm)
		 Метод Open открывает
		 источник/приёмник данных.


		 ![](../../Sub_Image.gif)
		 [Save](../IDtObject/IDtObject.Save.htm)
		 Метод Save сохраняет
		 параметры источника/приёмника данных в формате XML.


См. также:


[Интерфейсы сборки Dt](../KeDt_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
