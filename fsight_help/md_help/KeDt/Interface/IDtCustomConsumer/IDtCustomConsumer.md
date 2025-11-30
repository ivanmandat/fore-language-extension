# IDtCustomConsumer

IDtCustomConsumer
-


# IDtCustomConsumer


Сборка: Dt;


## Описание


Интерфейс IDtCustomConsumer
 предназначен для работы с пользовательским приёмником данных.


## Иерархия наследования


           [IDtObject](../IDtObject/IDtObject.htm)


           IDtCustomConsumer


## Комментарии


Для получения пользовательского источника данных используйте свойство
 [IDtUserProviderEx.CustomProvider](../IDtUserProviderEx/IDtUserProviderEx.CustomProvider.htm).


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clear](IDtCustomConsumer.Clear.htm)


		 Метод Clear выполняет
		 очистку приёмника данных.


		 ![](../../Sub_Image.gif)
		 [ImplementPut](IDtCustomConsumer.ImplementPut.htm)


		 Метод ImplementPut
		 возвращает признак того, реализован ли метод [IDtCustomConsumer.Put](IDtCustomConsumer.Put.htm).


		 ![](../../Sub_Image.gif)
		 [Put](IDtCustomConsumer.Put.htm)


		 Метод Put выполняет
		 выгрузку массива значений в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [PutRow](IDtCustomConsumer.PutRow.htm)


		 Метод PutRow выполняет
		 выгрузку строки в приёмник данных.


		 ![](../../Sub_Image.gif)
		 [WritingRowsCount](IDtCustomConsumer.WritingRowsCount.htm)


		 Метод WritingRowsCount
		 возвращает число строк, выгруженных в приёмник данных.


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
