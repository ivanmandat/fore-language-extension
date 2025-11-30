# IDtExcelConsumer

IDtExcelConsumer
-


# IDtExcelConsumer


Сборка: Dt;


## Описание


Интерфейс IDtExcelConsumer содержит
 свойства и методы приёмника данных - [Экспорт
 в Excel (97-2003)](UiETL.chm::/Desktop/03_ETLObjects/03_Outputs/Excel/UiEtl_Outputs_Excel.htm).


## Иерархия наследования


           [IDtObject](../IDtObject/IDtObject.htm)


           [IDtConsumer](../IDtConsumer/IDtConsumer.htm)


           [IDtBulkConsumer](../IDtBulkConsumer/IDtBulkConsumer.htm)


           IDtExcelConsumer


## Комментарии


Для экспортируемых данных укажите новый лист, так как существующий лист
 не очищается.


Важно. Файл,
 с которым осуществляется работа, должен быть закрыт и не должен использоваться
 какими-либо приложениями.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DriverVersion](IDtExcelConsumer.DriverVersion.htm)


		 Свойство DriverVersion
		 определяет версию драйвера, используемого при работе с файлом.


		 ![](../../Property_Image.gif)
		 [File](IDtExcelConsumer.File.htm)


		 Свойство File определяет
		 путь и наименование файла, в который будет производиться экспорт
		 данных.


		 ![](../../Property_Image.gif)
		 [HasHeader](IDtExcelConsumer.HasHeader.htm)


		 Свойство HasHeader
		 определяет признак выгрузки в первую строку файла списка заголовков
		 полей.


		 ![](../../Property_Image.gif)
		 [ImexMode](IDtExcelConsumer.ImexMode.htm)


		 Свойство ImexMode определяет
		 режим, в котором будет производиться экспорт столбцов, содержащих
		 данные разных типов.


		 ![](../../Property_Image.gif)
		 [Table](IDtExcelConsumer.Table.htm)


		 Свойство Table определяет
		 наименование листа файла Excel, на который будет производиться
		 экспорт данных.


## Свойства, унаследованные от [IDtConsumer](../IDtConsumer/IDtConsumer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalcFieldsErrors](../IDtConsumer/IDtConsumer.CalcFieldsErrors.htm)


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


## Методы, унаследованные от [IDtBulkConsumer](../IDtBulkConsumer/IDtBulkConsumer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [PutBulk](../IDtBulkConsumer/IDtBulkConsumer.PutBulk.htm)
		 Метод PutBulk осуществляет
		 экспорт указанного пакета данных в приёмник данных.


## Методы, унаследованные от [IDtConsumer](../IDtConsumer/IDtConsumer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clear](../IDtConsumer/IDtConsumer.Clear.htm)
		 Метод Clear очищает
		 приёмник данных.


		 ![](../../Sub_Image.gif)
		 [Put](../IDtConsumer/IDtConsumer.Put.htm)
		 Метод Put осуществляет
		 запись массива значений в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [PutRow](../IDtConsumer/IDtConsumer.PutRow.htm)
		 Метод PutRow выполняет
		 выгрузку строки значений в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [PutProvider](../IDtConsumer/IDtConsumer.PutProvider.htm)
		 Метод PutProvider осуществляет
		 экспорт всех значений указанного источника данных в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [WritingRowsCount](../IDtConsumer/IDtConsumer.WritingRowsCount.htm)
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
