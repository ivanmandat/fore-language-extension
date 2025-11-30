# DatasetDataArrayProvider

DatasetDataArrayProvider
-


# DatasetDataArrayProvider


Сборка: Db;


## Описание


Класс DatasetDataArrayProvider реализует пользовательский источник данных.


## Комментарии


Данные в пользовательский источник загружаются при выполнении метода [AttachArray](../../Interface/IDatasetDataArrayProvider/IDatasetDataArrayProvider.AttachArray.htm) из массива. Структура пользовательского источника должна соответствовать содержащимся в массиве данным.


## Свойства объекта класса, унаследованные от [IDatasetDataAbstractProvider](../../Interface/IDatasetDataAbstractProvider/IDatasetDataAbstractProvider.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataFields](../../Interface/IDatasetDataAbstractProvider/IDatasetDataAbstractProvider.DataFields.htm)
		 Свойство DataFields
		 возвращает коллекцию полей для дополнительной настройки.


## Свойства объекта класса, унаследованные от [IDatasetDataProvider](../../Interface/IDatasetDataProvider/IDatasetDataProvider.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FieldDefs](../../Interface/IDatasetDataProvider/IDatasetDataProvider.FieldDefs.htm)
		 Свойство FieldDefs
		 возвращает структуру полей источника данных.


## Методы объекта класса, унаследованные от [IDatasetDataArrayProvider](../../Interface/IDatasetDataArrayProvider/IDatasetDataArrayProvider.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AttachArray](../../Interface/IDatasetDataArrayProvider/IDatasetDataArrayProvider.AttachArray.htm)
		 Метод AttachArray загружает
		 данные из массива в источник данных.


## Методы объекта класса, унаследованные от [IDatasetDataAbstractProvider](../../Interface/IDatasetDataAbstractProvider/IDatasetDataAbstractProvider.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddField](../../Interface/IDatasetDataAbstractProvider/IDatasetDataAbstractProvider.AddField.htm)
		 Метод AddField создает
		 поле в пользовательском источнике данных.


См. также:


[Классы сборки Db](../KeDb_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
