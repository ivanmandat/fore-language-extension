# DtExcelProvider

DtExcelProvider
-


# DtExcelProvider


## Описание


Класс DtExcelProvider реализует
 объект, осуществляющий импорт данных из файлов Microsoft Excel.


## Комментарии


Объект данного класса может применяться для прямого импорта данных из
 файлов Microsoft Excel, а также используется при настройке объекта задачи
 Etl - [Импорт
 из Excel](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Excel.htm).


## Свойства, унаследованные от [IDtExcelProvider](../../Interface/IDtExcelProvider/IDtExcelProvider.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CheckFieldName](../../Interface/IDtExcelProvider/IDtExcelProvider.CheckFieldName.htm)


		 Свойство CheckFieldName
		 определяет, будут ли преобразовываться наименования полей таким
		 образом, чтобы можно было импортировать числовые наименования.


		 ![](../../Property_Image.gif)
		 [DriverVersion](../../Interface/IDtExcelProvider/IDtExcelProvider.DriverVersion.htm)


		 Свойство DriverVersion
		 определяет версию драйвера, используемого при работе с файлом.


		 ![](../../Property_Image.gif)
		 [File](../../Interface/IDtExcelProvider/IDtExcelProvider.File.htm)


		 Свойство File определяет
		 путь и наименование файла, из которого будет производиться импорт
		 данных.


		 ![](../../Property_Image.gif)
		 [HasHeader](../../Interface/IDtExcelProvider/IDtExcelProvider.HasHeader.htm)


		 Свойство HasHeader
		 определяет признак загрузки из первой строки файла списка заголовков
		 полей.


		 ![](../../Property_Image.gif)
		 [ImexMode](../../Interface/IDtExcelProvider/IDtExcelProvider.ImexMode.htm)


		 Свойство ImexMode определяет
		 режим, в котором будет производиться импорт из столбцов, содержащих
		 данные разных типов.


		 ![](../../Property_Image.gif)
		 [Query](../../Interface/IDtExcelProvider/IDtExcelProvider.Query.htm)


		 Свойство Query определяет
		 запрос к листам файла Excel.


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
