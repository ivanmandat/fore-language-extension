# DtExcelConsumer

DtExcelConsumer
-


# DtExcelConsumer


## Описание


Класс DtExcelConsumer реализует
 объект, осуществляющий экспорт данных в таблицы Microsoft Excel.


## Комментарии


Объект данного класса может применяться для прямого экспорта массива
 данных в таблицы Microsoft Excel, а также используется при настройке объекта
 задачи Etl - [Экспорт
 в Excel](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/Excel/UiEtl_Outputs_Excel.htm).


## Свойства, унаследованные от [IDtExcelConsumer](../../Interface/IDtExcelConsumer/IDtExcelConsumer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DriverVersion](../../Interface/IDtExcelConsumer/IDtExcelConsumer.DriverVersion.htm)


		 Свойство DriverVersion
		 определяет версию драйвера, используемого при работе с файлом.


		 ![](../../Property_Image.gif)
		 [File](../../Interface/IDtExcelConsumer/IDtExcelConsumer.File.htm)


		 Свойство File определяет
		 путь и наименование файла, в который будет производиться экспорт
		 данных.


		 ![](../../Property_Image.gif)
		 [HasHeader](../../Interface/IDtExcelConsumer/IDtExcelConsumer.HasHeader.htm)


		 Свойство HasHeader
		 определяет признак выгрузки в первую строку файла списка заголовков
		 полей.


		 ![](../../Property_Image.gif)
		 [ImexMode](../../Interface/IDtExcelConsumer/IDtExcelConsumer.ImexMode.htm)


		 Свойство ImexMode определяет
		 режим, в котором будет производиться экспорт столбцов, содержащих
		 данные разных типов.


		 ![](../../Property_Image.gif)
		 [Table](../../Interface/IDtExcelConsumer/IDtExcelConsumer.Table.htm)


		 Свойство Table определяет
		 наименование листа файла Excel, на который будет производиться
		 экспорт данных.


## Свойства, унаследованные от [IDtConsumer](../../Interface/IDtConsumer/IDtConsumer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalcFieldsErrors](../../Interface/IDtConsumer/IDtConsumer.CalcFieldsErrors.htm)


		 Свойство CalcFieldsErrors
		 возвращает коллекцию ошибок, возникших при расчете вычисляемых
		 полей.


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


## Методы, унаследованные от [IDtBulkConsumer](../../Interface/IDtBulkConsumer/IDtBulkConsumer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [PutBulk](../../Interface/IDtBulkConsumer/IDtBulkConsumer.PutBulk.htm)
		 Метод PutBulk осуществляет
		 экспорт указанного пакета данных в приёмник данных.


## Методы, унаследованные от [IDtConsumer](../../Interface/IDtConsumer/IDtConsumer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clear](../../Interface/IDtConsumer/IDtConsumer.Clear.htm)
		 Метод Clear очищает
		 приёмник данных.


		 ![](../../Sub_Image.gif)
		 [Put](../../Interface/IDtConsumer/IDtConsumer.Put.htm)
		 Метод Put осуществляет
		 запись массива значений в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [PutRow](../../Interface/IDtConsumer/IDtConsumer.PutRow.htm)
		 Метод PutRow выполняет
		 выгрузку строки значений в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [PutProvider](../../Interface/IDtConsumer/IDtConsumer.PutProvider.htm)
		 Метод PutProvider осуществляет
		 экспорт всех значений указанного источника данных в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [WritingRowsCount](../../Interface/IDtConsumer/IDtConsumer.WritingRowsCount.htm)
		 Метод WritingRowsCount
		 возвращает количество записей, записанных в приёмник данных.


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


[Классы сборки Dt](../KeDt_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
