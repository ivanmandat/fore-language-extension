# DtTextProvider

DtTextProvider
-


# DtTextProvider


## Описание


Класс DtTextProvider реализует
 объект, осуществляющий импорт данных из текстовых файлов.


## Комментарии


Объект данного класса может применяться для прямого импорта данных из
 текстовых файлов, а также используется при настройке объекта задачи Etl -
 [Импорт
 из текста](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Text.htm).


## Свойства, унаследованные от [IDtTextProvider](../../Interface/IDtTextProvider/IDtTextProvider.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllowMuchColumnDelimiter](../../Interface/IDtTextProvider/IDtTextProvider.AllowMuchColumnDelimiter.htm)


		 Свойство AllowMuchColumnDelimiter
		 определяет признак того, пропускать ли подряд идущие разделители.


		 ![](../../Property_Image.gif)
		 [DataFromClipboard](../../Interface/IDtTextProvider/IDtTextProvider.DataFromClipboard.htm)


		 Свойство DataFromClipboard
		 определяет, использовать ли в качестве источника данных
		 для импорта буфер обмена.


		 ![](../../Property_Image.gif)
		 [DelimitedColumnDelimiter](../../Interface/IDtTextProvider/IDtTextProvider.DelimitedColumnDelimiter.htm)


		 Свойство DelimitedColumnDelimiter
		 определяет символ, используемый в качестве разделителя полей в
		 текстовом файле.


		 ![](../../Property_Image.gif)
		 [DelimitedColumnDelimiters](../../Interface/IDtTextProvider/IDtTextProvider.DelimitedColumnDelimiters.htm)


		 Свойство DelimitedColumnDelimiters
		 определяет массив строк, используемый в качестве разделителей
		 полей в текстовом файле.


		 ![](../../Property_Image.gif)
		 [DelimitedTextQualifier](../../Interface/IDtTextProvider/IDtTextProvider.DelimitedTextQualifier.htm)


		 Свойство DelimitedTextQualifier
		 определяет символ, используемый в качестве ограничителя текста.


		 ![](../../Property_Image.gif)
		 [Encoding](../../Interface/IDtTextProvider/IDtTextProvider.Encoding.htm)


		 Свойство Encoding определяет
		 кодировку символов, используемую при импорте данных.


		 ![](../../Property_Image.gif)
		 [File](../../Interface/IDtTextProvider/IDtTextProvider.File.htm)


		 Свойство File определяет
		 путь и наименование текстового файла, из которого будет производиться
		 импорт данных.


		 ![](../../Property_Image.gif)
		 [FormatType](../../Interface/IDtTextProvider/IDtTextProvider.FormatType.htm)


		 Свойство FormatType
		 определяет формат структуры файла, в соответствии с которым будет
		 производиться импорт данных.


		 ![](../../Property_Image.gif)
		 [GetFieldsFromFile](../../Interface/IDtTextProvider/IDtTextProvider.GetFieldsFromFile.htm)


		 Свойство GetFieldsFromFile
		 возвращает количество полей, полученных в соответствии с установленными
		 настройками, из файла-источника.


		 ![](../../Property_Image.gif)
		 [HeaderRow](../../Interface/IDtTextProvider/IDtTextProvider.HeaderRow.htm)


		 Свойство HeaderRow
		 определяет номер строки с заголовками полей.


		 ![](../../Property_Image.gif)
		 [RangeFirstRow](../../Interface/IDtTextProvider/IDtTextProvider.RangeFirstRow.htm)


		 Свойство RangeFirstRow
		 определяет номер строки, начиная с которой будет производиться
		 импорт данных.


		 ![](../../Property_Image.gif)
		 [RangeHasHeader](../../Interface/IDtTextProvider/IDtTextProvider.RangeHasHeader.htm)


		 Свойство RangeHasHeader
		 определяет признак расположения заголовков столбцов в первой строке
		 файла.


		 ![](../../Property_Image.gif)
		 [RowDelimiter](../../Interface/IDtTextProvider/IDtTextProvider.RowDelimiter.htm)


		 Свойство RowDelimiter
		 определяет символ, используемый в качестве разделителя строк.


		 ![](../../Property_Image.gif)
		 [TextCodePage](../../Interface/IDtTextProvider/IDtTextProvider.TextCodePage.htm)


		 Свойство TextCodePage
		 определяет кодировку, которая будет использоваться при импорте
		 данных из файла.


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


См. также:


[Классы сборки Dt](../KeDt_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
