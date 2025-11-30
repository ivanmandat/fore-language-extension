# DtUserConsumerEx

DtUserConsumerEx
-


# DtUserConsumerEx


Сборка: Dt;


## Описание


Класс DtUserConsumerEx предназначен
 для выгрузки данных с помощью пользовательского алгоритма.


## Комментарии


Пользовательский алгоритм должен быть реализован на языке Fore
 и содержатся в модуле/сборке в текущем репозитории.


## Свойства, унаследованные от [IDtUserConsumerEx](../../Interface/IDtUserConsumerEx/IDtUserConsumerEx.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CustomConsumer](../../Interface/IDtUserConsumerEx/IDtUserConsumerEx.CustomConsumer.htm)
		 Свойство CustomConsumer
		 возвращает приёмник данных, полученный с помощью пользовательского
		 алгоритма.


		 ![](../../Property_Image.gif)
		 [Macro](../../Interface/IDtUserConsumerEx/IDtUserConsumerEx.Macro.htm)
		 Свойство Macro определяет
		 наименование класса, реализующего пользовательский алгоритм выгрузки
		 данных.


		 ![](../../Property_Image.gif)
		 [Module](../../Interface/IDtUserConsumerEx/IDtUserConsumerEx.Module.htm)
		 Свойство Module определяет
		 модуль/сборку Fore репозитория, где реализован пользовательский
		 алгоритм выгрузки данных.


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
