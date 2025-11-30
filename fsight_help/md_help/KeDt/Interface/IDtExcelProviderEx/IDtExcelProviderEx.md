# IDtExcelProviderEx

IDtExcelProviderEx
-


# IDtExcelProviderEx


Сборка: Dt;


## Описание


Интерфейс IDtExcelProviderEx
 предназначен для получения данных из источника Excel (формат *.xlsx).


## Иерархия наследования


           [IDtObject](../IDtObject/IDtObject.htm)


           [IDtProvider](../IDtProvider/IDtProvider.htm)


           IDtExcelProviderEx


## Комментарии


Преимущества IDtExcelProviderEx
 по сравнению с [IDtExcelProvider](../IDtExcelProvider/IDtExcelProvider.htm):


	- загрузка данных из Excel в базу данных временных рядов доступна,
	 если используется 64-х разрядная операционная система;


	- метод [IDtObjectMetaData.Tables](../IDtObjectMetaData/IDtObjectMetaData.Tables.htm)
	 возвращает только список листов;


	- из xlsx-файла корректно читаются строки длиной более 255 символов
	 и загружается более 255 столбцов;


	- решены проблемы со считыванием из xlsx-файла разнотипных данных;


	- решены проблемы с загрузкой строковых значений со смешанными
	 шрифтами: обычным и курсивом.


Важно. Файл,
 с которым осуществляется работа, должен быть закрыт и не должен использоваться
 какими-либо приложениями.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataRow](IDtExcelProviderEx.DataRow.htm)
		 Свойство DataRow
		 определяет индекс первой строки, содержащей данные.


		 ![](../../Property_Image.gif)
		 [DataSheetRow](IDtExcelProviderEx.DataSheetRow.htm)
		 Свойство DataSheetRow
		 для указанного листа определяет индекс первой строки, содержащей
		 данные.


		 ![](../../Property_Image.gif)
		 [File](IDtExcelProviderEx.File.htm)
		 Свойство File определяет
		 полное наименование файла источника данных.


		 ![](../../Property_Image.gif)
		 [Format](IDtExcelProviderEx.Format.htm)
		 Свойство Format
		 определяет формат файла-источника.


		 ![](../../Property_Image.gif)
		 [HasHeader](IDtExcelProviderEx.HasHeader.htm)
		 Свойство HasHeader
		 определяет, содержит ли файл-источник строку с заголовками данных.


		 ![](../../Property_Image.gif)
		 [HeaderRow](IDtExcelProviderEx.HeaderRow.htm)
		 Свойство HeaderRow
		 определяет индекс строки в файле-источнике, содержащей заголовки
		 данных.


		 ![](../../Property_Image.gif)
		 [Sheet](IDtExcelProviderEx.Sheet.htm)
		 Свойство Sheet
		 определяет наименование листа, на котором расположены данные.


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


[Интерфейсы
 сборки Dt](../KeDt_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
