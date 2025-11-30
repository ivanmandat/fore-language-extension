# IDtCustomProvider

IDtCustomProvider
-


# IDtCustomProvider


Сборка: Dt;


## Описание


Интерфейс IDtCustomProvider
 предназначен для работы с пользовательским источником данных.


## Иерархия наследования


           [IDtObject](../IDtObject/IDtObject.htm)


           IDtCustomProvider


## Комментарии


Для получения пользовательского источника данных используйте свойство
 [IDtUserProviderEx.CustomProvider](../IDtUserProviderEx/IDtUserProviderEx.CustomProvider.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Eof](IDtCustomProvider.Eof.htm)


		 Свойство Eof возвращает
		 признак того, что курсор расположен на последней записи источника
		 данных.


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
		 [Fetch](IDtCustomProvider.Fetch.htm)


		 Метод Fetch выполняет
		 чтение текущей записи источника данных.


		 ![](../../Sub_Image.gif)
		 [FetchRows](IDtCustomProvider.FetchRows.htm)


		 Метод FetchRows выполняет
		 чтение указанного числа записей из источника данных и возвращает
		 количество фактически считанных записей.


		 ![](../../Sub_Image.gif)
		 [ImplementFetchRows](IDtCustomProvider.ImplementFetchRows.htm)


		 Метод ImplementFetchRows
		 возвращает признак того, реализован ли метод [IDtCustomProvider.FetchRows](IDtCustomProvider.FetchRows.htm).


		 ![](../../Sub_Image.gif)
		 [ReadingRowsCount](IDtCustomProvider.ReadingRowsCount.htm)


		 Метод ReadingRowsCount
		 возвращает количество считанных строк.


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
