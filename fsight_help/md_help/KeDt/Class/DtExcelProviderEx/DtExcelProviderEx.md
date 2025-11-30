# DtExcelProviderEx

DtExcelProviderEx
-


# DtExcelProviderEx


Сборка: Dt;


## Описание


Класс DtExcelProviderEx предназначен
 для получения данных из источника Excel.


## Комментарии


Преимущества DtExcelProviderEx
 по сравнению с [DtExcelProvider](../DtExcelProvider/DtExcelProvider.htm):


	- если используется OCx64, то доступна загрузка данных из Excel
	 в базу данных временных рядов;


	- метод [IDtObjectMetaData.Tables](../../Interface/IDtObjectMetaData/IDtObjectMetaData.Tables.htm)
	 возвращает только список листов;


	- из xlsx-файла корректно читаются строки длиной более 255 символов
	 и загружается более 255 столбцов;


	- решены проблемы со считыванием из xlsx-файла разнотипных данных;


	- решены проблемы с загрузкой строковых значений со смешанными
	 шрифтами: обычным и курсивом.


## Свойства, унаследованные от [IDtExcelProviderEx](../../Interface/IDtExcelProviderEx/IDtExcelProviderEx.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataRow](../../Interface/IDtExcelProviderEx/IDtExcelProviderEx.DataRow.htm)
		 Свойство DataRow
		 определяет индекс первой строки, содержащей данные.


		 ![](../../Property_Image.gif)
		 [DataSheetRow](../../Interface/IDtExcelProviderEx/IDtExcelProviderEx.DataSheetRow.htm)
		 Свойство DataSheetRow
		 для указанного листа определяет индекс первой строки, содержащей
		 данные.


		 ![](../../Property_Image.gif)
		 [File](../../Interface/IDtExcelProviderEx/IDtExcelProviderEx.File.htm)
		 Свойство File определяет
		 полное наименование файла источника данных.


		 ![](../../Property_Image.gif)
		 [Format](../../Interface/IDtExcelProviderEx/IDtExcelProviderEx.Format.htm)
		 Свойство Format
		 определяет формат файла-источника.


		 ![](../../Property_Image.gif)
		 [HasHeader](../../Interface/IDtExcelProviderEx/IDtExcelProviderEx.HasHeader.htm)
		 Свойство HasHeader
		 определяет, содержит ли файл-источник строку с заголовками данных.


		 ![](../../Property_Image.gif)
		 [HeaderRow](../../Interface/IDtExcelProviderEx/IDtExcelProviderEx.HeaderRow.htm)
		 Свойство HeaderRow
		 определяет индекс строки в файле-источнике, содержащей заголовки
		 данных.


		 ![](../../Property_Image.gif)
		 [Sheet](../../Interface/IDtExcelProviderEx/IDtExcelProviderEx.Sheet.htm)
		 Свойство Sheet
		 определяет наименование листа, на котором расположены данные.


## Свойства, унаследованные от [IDtProvider](../../Interface/IDtProvider/IDtProvider.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoFillFieldsMode](../../Interface/IDtProvider/IDtProvider.AutoFillFieldsMode.htm)
		 Свойство AutoFillFieldsMode
		 определяет режим распознавания типа полей источника данных.


		 ![](../../Property_Image.gif)
		 [CalcFieldsErrors](../../Interface/IDtProvider/IDtProvider.CalcFieldsErrors.htm)
		 Свойство CalcFieldsErrors
		 возвращает коллекцию ошибок, возникших при расчете вычисляемых
		 полей.


		 ![](../../Property_Image.gif)
		 [Eof](../../Interface/IDtProvider/IDtProvider.Eof.htm)
		 Свойство Eof возвращает
		 признак расположения курсора в источнике данных на последней записи.


		 ![](../../Property_Image.gif)
		 [FetchErrors](../../Interface/IDtProvider/IDtProvider.FetchErrors.htm)
		 Свойство FetchErrors
		 возвращает ошибки, возникшие при импорте данных.


		 ![](../../Property_Image.gif)
		 [FilterIf](../../Interface/IDtProvider/IDtProvider.FilterIf.htm)
		 Свойство FilterIf
		 возвращает условие загрузки записей из источника данных.


		 ![](../../Property_Image.gif)
		 [StringDataFormat](../../Interface/IDtProvider/IDtProvider.StringDataFormat.htm)
		 Свойство StringDataFormat
		 возвращает настройки, используемые при идентификации данных.


		 ![](../../Property_Image.gif)
		 [TypeGuessRows](../../Interface/IDtProvider/IDtProvider.TypeGuessRows.htm)
		 Свойство TypeGuessRows
		 определяет количество строк, по которым будет определяться тип
		 данных каждого поля.


## Свойства, унаследованные от [IDtObject](../../Interface/IDtObject/IDtObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](../../Interface/IDtObject/IDtObject.Active.htm)
		 Свойство Active возвращает
		 состояние источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [Fields](../../Interface/IDtObject/IDtObject.Fields.htm)
		 Свойство Fields возвращает
		 описание полей источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [GetType](../../Interface/IDtObject/IDtObject.GetType.htm)
		 Свойство GetType возвращает
		 тип источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [Metabase](../../Interface/IDtObject/IDtObject.Metabase.htm)
		 Свойство Metabase
		 определяет репозиторий, в котором выполняется импорт или экспорт
		 данных.


## Методы, унаследованные от [IDtProvider](../../Interface/IDtProvider/IDtProvider.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Fetch](../../Interface/IDtProvider/IDtProvider.Fetch.htm)
		 Метод Fetch осуществляет
		 чтение данных текущей записи из источника данных.


		 ![](../../Sub_Image.gif)
		 [FetchRows](../../Interface/IDtProvider/IDtProvider.FetchRows.htm)
		 Метод FetchRows осуществляет
		 чтение данных указанного количества записей из источника данных
		 и возвращает количество фактически считанных записей.


		 ![](../../Sub_Image.gif)
		 [ReadingRowsCount](../../Interface/IDtProvider/IDtProvider.ReadingRowsCount.htm)
		 Метод ReadingRowsCount
		 возвращает количество записей, считанных из источника данных с
		 учетом условия загрузки.


		 ![](../../Sub_Image.gif)
		 [ReadingRowsTotalCount](../../Interface/IDtProvider/IDtProvider.ReadingRowsTotalCount.htm)
		 Метод ReadingRowsTotalCount
		 возвращает количество записей, считанных из источника данных без
		 учета условия загрузки.


## Методы, унаследованные от [IDtObject](../../Interface/IDtObject/IDtObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearFields](../../Interface/IDtObject/IDtObject.ClearFields.htm)
		 Метод ClearFields
		 очищает список полей приёмника/источника данных.


		 ![](../../Sub_Image.gif)
		 [Close](../../Interface/IDtObject/IDtObject.Close.htm)
		 Метод Close закрывает
		 источник/приёмник данных.


		 ![](../../Sub_Image.gif)
		 [FieldsFromFile](../../Interface/IDtObject/IDtObject.FieldsFromFile.htm)
		 Метод FieldsFromFile
		 осуществляет чтение списка полей из файла-источника.


		 ![](../../Sub_Image.gif)
		 [Load](../../Interface/IDtObject/IDtObject.Load.htm)
		 Метод Load загружает
		 параметры источника/приёмника данных из XML.


		 ![](../../Sub_Image.gif)
		 [Open](../../Interface/IDtObject/IDtObject.Open.htm)
		 Метод Open открывает
		 источник/приёмник данных.


		 ![](../../Sub_Image.gif)
		 [Save](../../Interface/IDtObject/IDtObject.Save.htm)
		 Метод Save сохраняет
		 параметры источника/приёмника данных в формате XML.


См. также:


[Классы
 сборки Dt](../KeDt_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
