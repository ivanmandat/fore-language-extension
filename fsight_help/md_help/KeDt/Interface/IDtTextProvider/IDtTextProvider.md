# IDtTextProvider

IDtTextProvider
-


# IDtTextProvider


Сборка: Dt;


## Описание


Интерфейс IDtTextProvider содержит
 свойства и методы источника данных - [Импорт
 из текста](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Text.htm).


## Иерархия наследования


           [IDtProvider](../IDtProvider/IDtProvider.htm)


           IDtTextProvider


## Комментарии


Для работы с приёмником данных «[Экспорт
 в текст](uietl.chm::/Desktop/03_ETLObjects/03_Outputs/Text/UiEtl_Outputs_Text.htm)» используйте свойства и методы интерфейса [IDtTextConsumer](../IDtTextConsumer/IDtTextConsumer.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllowMuchColumnDelimiter](IDtTextProvider.AllowMuchColumnDelimiter.htm)


		 Свойство AllowMuchColumnDelimiter
		 определяет признак того, пропускать ли подряд идущие разделители.


		 ![](../../Property_Image.gif)
		 [DataFromClipboard](IDtTextProvider.DataFromClipboard.htm)


		 Свойство DataFromClipboard
		 определяет, использовать ли в качестве источника данных
		 для импорта буфер обмена.


		 ![](../../Property_Image.gif)
		 [DelimitedColumnDelimiter](IDtTextProvider.DelimitedColumnDelimiter.htm)


		 Свойство DelimitedColumnDelimiter
		 определяет символ, используемый в качестве разделителя полей в
		 текстовом файле.


		 ![](../../Property_Image.gif)
		 [DelimitedColumnDelimiters](IDtTextProvider.DelimitedColumnDelimiters.htm)


		 Свойство DelimitedColumnDelimiters
		 определяет массив строк, используемый в качестве разделителей
		 полей в текстовом файле.


		 ![](../../Property_Image.gif)
		 [DelimitedTextQualifier](IDtTextProvider.DelimitedTextQualifier.htm)


		 Свойство DelimitedTextQualifier
		 определяет символ, используемый в качестве ограничителя текста.


		 ![](../../Property_Image.gif)
		 [Encoding](IDtTextProvider.Encoding.htm)


		 Свойство Encoding определяет
		 кодировку символов, используемую при импорте данных.


		 ![](../../Property_Image.gif)
		 [File](IDtTextProvider.File.htm)


		 Свойство File определяет
		 путь и наименование текстового файла, из которого будет производиться
		 импорт данных.


		 ![](../../Property_Image.gif)
		 [FormatType](IDtTextProvider.FormatType.htm)


		 Свойство FormatType
		 определяет формат структуры файла, в соответствии с которым будет
		 производиться импорт данных.


		 ![](../../Property_Image.gif)
		 [GetFieldsFromFile](IDtTextProvider.GetFieldsFromFile.htm)


		 Свойство GetFieldsFromFile
		 возвращает количество полей, полученных в соответствии с установленными
		 настройками, из файла-источника.


		 ![](../../Property_Image.gif)
		 [HeaderRow](IDtTextProvider.HeaderRow.htm)


		 Свойство HeaderRow
		 определяет номер строки с заголовками полей.


		 ![](../../Property_Image.gif)
		 [RangeFirstRow](IDtTextProvider.RangeFirstRow.htm)


		 Свойство RangeFirstRow
		 определяет номер строки, начиная с которой будет производиться
		 импорт данных.


		 ![](../../Property_Image.gif)
		 [RangeHasHeader](IDtTextProvider.RangeHasHeader.htm)


		 Свойство RangeHasHeader
		 определяет признак расположения заголовков столбцов в первой строке
		 файла.


		 ![](../../Property_Image.gif)
		 [RowDelimiter](IDtTextProvider.RowDelimiter.htm)


		 Свойство RowDelimiter
		 определяет символ, используемый в качестве разделителя строк.


		 ![](../../Property_Image.gif)
		 [TextCodePage](IDtTextProvider.TextCodePage.htm)


		 Свойство TextCodePage
		 определяет кодировку, которая будет использоваться при импорте
		 данных из файла.


## Свойства, унаследованные от [IDtProvider](../IDtProvider/IDtProvider.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoFillFieldsMode](../IDtProvider/IDtProvider.AutoFillFieldsMode.htm)
		 Свойство AutoFillFieldsMode
		 определяет режим распознавания типа полей источника данных.


		 ![](../../Property_Image.gif)
		 [CalcFieldsErrors](../IDtProvider/IDtProvider.CalcFieldsErrors.htm)
		 Свойство CalcFieldsErrors
		 возвращает коллекцию ошибок, возникших при расчете вычисляемых
		 полей.


		 ![](../../Property_Image.gif)
		 [Eof](../IDtProvider/IDtProvider.Eof.htm)
		 Свойство Eof возвращает
		 признак расположения курсора в источнике данных на последней записи.


		 ![](../../Property_Image.gif)
		 [FetchErrors](../IDtProvider/IDtProvider.FetchErrors.htm)
		 Свойство FetchErrors
		 возвращает ошибки, возникшие при импорте данных.


		 ![](../../Property_Image.gif)
		 [FilterIf](../IDtProvider/IDtProvider.FilterIf.htm)
		 Свойство FilterIf
		 возвращает условие загрузки записей из источника данных.


		 ![](../../Property_Image.gif)
		 [StringDataFormat](../IDtProvider/IDtProvider.StringDataFormat.htm)
		 Свойство StringDataFormat
		 возвращает настройки, используемые при идентификации данных.


		 ![](../../Property_Image.gif)
		 [TypeGuessRows](../IDtProvider/IDtProvider.TypeGuessRows.htm)
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


## Методы, унаследованные от [IDtProvider](../IDtProvider/IDtProvider.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Fetch](../IDtProvider/IDtProvider.Fetch.htm)
		 Метод Fetch осуществляет
		 чтение данных текущей записи из источника данных.


		 ![](../../Sub_Image.gif)
		 [FetchRows](../IDtProvider/IDtProvider.FetchRows.htm)
		 Метод FetchRows осуществляет
		 чтение данных указанного количества записей из источника данных
		 и возвращает количество фактически считанных записей.


		 ![](../../Sub_Image.gif)
		 [ReadingRowsCount](../IDtProvider/IDtProvider.ReadingRowsCount.htm)
		 Метод ReadingRowsCount
		 возвращает количество записей, считанных из источника данных с
		 учетом условия загрузки.


		 ![](../../Sub_Image.gif)
		 [ReadingRowsTotalCount](../IDtProvider/IDtProvider.ReadingRowsTotalCount.htm)
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
