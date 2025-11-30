# IDtProvider

IDtProvider
-


# IDtProvider


Сборка: Dt;


## Описание


Интерфейс IDtProvider содержит
 базовые свойства и методы для работы с источником данных.


## Иерархия наследования


           [IDtObject](../IDtObject/IDtObject.htm)


           IDtProvider


## Комментарии


[![](../../opened.gif)![](../../closed.gif)Интерфейсы,
 являющиеся наследниками IDtProvider](javascript:TextPopup(this))


		- [IDtAccessProvider](../IDtAccessProvider/IDtAccessProvider.htm)


		- [IDtDbaseProvider](../IDtDbaseProvider/IDtDbaseProvider.htm)


		- [IDtExcelProvider](../IDtExcelProvider/IDtExcelProvider.htm)


		- [IDtExcelProviderEx](../IDtExcelProviderEx/IDtExcelProviderEx.htm)


		- [IDtMetabaseProvider](../IDtMetabaseProvider/IDtMetabaseProvider.htm)


		- [IDtOleDbProvider](../IDtOleDbProvider/IDtOleDbProvider.htm)


		- [IDtParadoxProvider](../IDtParadoxProvider/IDtParadoxProvider.htm)


		- [IDtRdsProvider](../IDtRdsProvider/IDtRdsProvider.htm)


		- [IDtRestProvider](../IDtRestProvider/IDtRestProvider.htm)


		- [IDtTextProvider](../IDtTextProvider/IDtTextProvider.htm)


		- [IDtUnpivotProvider](../IDtUnpivotProvider/IDtUnpivotProvider.htm)


		- [IDtUserProvider](../IDtUserProvider/IDtUserProvider.htm)


		- [IDtUserProviderEx](../IDtUserProviderEx/IDtUserProviderEx.htm)


		- [IDtVfpProvider](../IDtVfpProvider/IDtVfpProvider.htm)


		- [IDtWebProvider](../IDtWebProvider/IDtWebProvider.htm)


		- [IDtXmlProvider](../IDtXmlProvider/IDtXmlProvider.htm)


[![](../../opened.gif)![](../../closed.gif)Свойства и методы,
 использующие объекты, реализованные интерфейсами-наследниками IDtProvider](javascript:TextPopup(this))


		- [ICubeLoaderFromSource.Init](KeCubes.chm::/Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Init.htm)


		- [ICubeLoaderFromSource.Load](KeCubes.chm::/Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Load.htm)


		- [IDtConsumer.PutProvider](../IDtConsumer/IDtConsumer.PutProvider.htm)


		- [IEtlPlainDataCopy.Provider](KeEtl.chm::/Interface/IEtlPlainDataCopy/IEtlPlainDataCopy.Provider.htm)


		- [IEtlPlainDataProvider.Provider](KeEtl.chm::/Interface/IEtlPlainDataProvider/IEtlPlainDataProvider.Provider.htm)


		- [IMetaRdsImportSchema.Source](KeRds.chm::/Interface/IMetaRdsImportSchema/IMetaRdsImportSchema.Source.htm)


		- [IMetaRdsLoader.Source](KeRds.chm::/Interface/IMetaRdsLoader/IMetaRdsLoader.Source.htm)


		- [ITableCreator.Source](KeCubes.chm::/Interface/ITableCreator/ITableCreator.Source.htm)


Примечание.
 Для корректной работы необходимо закрывать открытый источник данных с
 помощью метода [IDtObject.Close](../IDtObject/IDtObject.Close.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoFillFieldsMode](IDtProvider.AutoFillFieldsMode.htm)
		 Свойство AutoFillFieldsMode
		 определяет режим распознавания типа полей источника данных.


		 ![](../../Property_Image.gif)
		 [CalcFieldsErrors](IDtProvider.CalcFieldsErrors.htm)
		 Свойство CalcFieldsErrors
		 возвращает коллекцию ошибок, возникших при расчете вычисляемых
		 полей.


		 ![](../../Property_Image.gif)
		 [Eof](IDtProvider.Eof.htm)
		 Свойство Eof возвращает
		 признак расположения курсора в источнике данных на последней записи.


		 ![](../../Property_Image.gif)
		 [FetchErrors](IDtProvider.FetchErrors.htm)
		 Свойство FetchErrors
		 возвращает ошибки, возникшие при импорте данных.


		 ![](../../Property_Image.gif)
		 [FilterIf](IDtProvider.FilterIf.htm)
		 Свойство FilterIf
		 возвращает условие загрузки записей из источника данных.


		 ![](../../Property_Image.gif)
		 [StringDataFormat](IDtProvider.StringDataFormat.htm)
		 Свойство StringDataFormat
		 возвращает настройки, используемые при идентификации данных.


		 ![](../../Property_Image.gif)
		 [TypeGuessRows](IDtProvider.TypeGuessRows.htm)
		 Свойство TypeGuessRows
		 определяет количество строк, по которым будет определяться тип
		 данных каждого поля.


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
		 [Fetch](IDtProvider.Fetch.htm)
		 Метод Fetch осуществляет
		 чтение данных текущей записи из источника данных.


		 ![](../../Sub_Image.gif)
		 [FetchRows](IDtProvider.FetchRows.htm)
		 Метод FetchRows осуществляет
		 чтение данных указанного количества записей из источника данных
		 и возвращает количество фактически считанных записей.


		 ![](../../Sub_Image.gif)
		 [ReadingRowsCount](IDtProvider.ReadingRowsCount.htm)
		 Метод ReadingRowsCount
		 возвращает количество записей, считанных из источника данных с
		 учетом условия загрузки.


		 ![](../../Sub_Image.gif)
		 [ReadingRowsTotalCount](IDtProvider.ReadingRowsTotalCount.htm)
		 Метод ReadingRowsTotalCount
		 возвращает количество записей, считанных из источника данных без
		 учета условия загрузки.


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
