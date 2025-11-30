# DtExcelConsumerEx

DtExcelConsumerEx
-


# DtExcelConsumerEx


Сборка: Dt;


## Описание


Класс DtExcelConsumerEx предназначен
 для выгрузки данных в приёмник Excel.


## Комментарии


Преимущества IDtExcelConsumerEx
 по сравнению с [DtExcelConsumer](../DtExcelConsumer/DtExcelConsumer.htm):


	- доступна выгрузка заголовков данных;


	- экспортируются строки длиной более 255 символов;


	- для экспортируемых данных создается новый лист, либо очищается
	 существующий;


	- сохраняются ссылки в формулах с других листов;


	- перед строковыми значениями не вставляется апостроф;


	- в начало названия листа не подставляется нижнее подчеркивание
	 при экспорте в лист, наименование которого начинается с цифры.


## Свойства, унаследованные от [IDtExcelConsumerEx](../../Interface/IDtExcelConsumerEx/IDtExcelConsumerEx.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [File](../../Interface/IDtExcelConsumerEx/IDtExcelConsumerEx.File.htm)
		 Свойство File определяет
		 полное наименование файла, в который будут выгружены данные.


		 ![](../../Property_Image.gif)
		 [ForceFullCalculation](../../Interface/IDtExcelConsumerEx/IDtExcelConsumerEx.ForceFullCalculation.htm)
		 Свойство ForceFullCalculation
		 определяет, будет ли осуществляться принудительное перевычисление
		 рабочей книги при открытии.


		 ![](../../Property_Image.gif)
		 [HasHeader](../../Interface/IDtExcelConsumerEx/IDtExcelConsumerEx.HasHeader.htm)
		 Свойство HasHeader
		 определяет, выгружать ли файл-приёмник в строку с заголовками
		 данных.


		 ![](../../Property_Image.gif)
		 [Sheet](../../Interface/IDtExcelConsumerEx/IDtExcelConsumerEx.Sheet.htm)
		 Свойство Sheet
		 определяет наименование листа, на который будут выгружены данные.


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


[Классы
 сборки Dt](../KeDt_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
