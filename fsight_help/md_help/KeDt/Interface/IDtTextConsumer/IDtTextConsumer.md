# IDtTextConsumer

IDtTextConsumer
-


# IDtTextConsumer


Сборка: Dt;


## Описание


Интерфейс IDtTextConsumer содержит
 свойства и методы приёмника данных - [Экспорт
 в текст](uietl.chm::/Desktop/03_ETLObjects/03_Outputs/Text/UiEtl_Outputs_Text.htm).


## Иерархия наследования


           [IDtConsumer](../IDtConsumer/IDtConsumer.htm)


           IDtTextConsumer


## Комментарии


Для работы с источником данных «[Импорт
 из текста](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Text.htm)» используйте свойства и методы интерфейса
 [IDtTextProvider](../IDtTextProvider/IDtTextProvider.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DelimitedColumnDelimiter](IDtTextConsumer.DelimitedColumnDelimiter.htm)


		 Свойство DelimitedColumnDelimiter
		 определяет символ, используемый в качестве разделителя полей в
		 текстовом файле.


		 ![](../../Property_Image.gif)
		 [DelimitedTextQualifier](IDtTextConsumer.DelimitedTextQualifier.htm)


		 Свойство DelimitedTextQualifier
		 определяет символ, используемый в качестве ограничителя текста.


		 ![](../../Property_Image.gif)
		 [Encoding](IDtTextConsumer.Encoding.htm)


		 Свойство Encoding определяет
		 кодировку символов, используемую при экспорте данных.


		 ![](../../Property_Image.gif)
		 [File](IDtTextConsumer.File.htm)


		 Свойство File определяет
		 путь и наименование текстового файла, в который будет производиться
		 экспорт данных.


		 ![](../../Property_Image.gif)
		 [FormatType](IDtTextConsumer.FormatType.htm)


		 Свойство FormatType
		 определяет формат структуры файла, в соответствии с которым будет
		 производиться экспорт данных.


		 ![](../../Property_Image.gif)
		 [RowDelimiter](IDtTextConsumer.RowDelimiter.htm)


		 Свойство RowDelimiter
		 определяет символ, используемый в качестве разделителя строк.


		 ![](../../Property_Image.gif)
		 [TextCodePage](IDtTextConsumer.TextCodePage.htm)


		 Свойство TextCodePage
		 определяет кодировку, которая будет использоваться при экспорте
		 данных в файл.


		 ![](../../Property_Image.gif)
		 [WriteHeader](IDtTextConsumer.WriteHeader.htm)


		 Свойство WriteHeader
		 определяет признак экспорта заголовков столбцов в первую строку
		 файла.


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
