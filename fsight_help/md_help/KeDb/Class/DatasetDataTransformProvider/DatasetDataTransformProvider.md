# DatasetDataTransformProvider

DatasetDataTransformProvider
-


# DatasetDataTransformProvider


Сборка: Db;


## Описание


Класс DatasetDataTransformProvider реализует источник данных, поддерживающий преобразование данных.


## Комментарии


Преобразование данных осуществляется в переопределенном методе [OnFetch](../../Interface/IDatasetDataTransform/IDatasetDataTransform.OnFetch.htm).


## Свойства объекта класса, унаследованные от [IDatasetDataTransformProvider](../../Interface/IDatasetDataTransformProvider/IDatasetDataTransformProvider.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Source](../../Interface/IDatasetDataTransformProvider/IDatasetDataTransformProvider.Source.htm)
		 Свойство Source определяет
		 источник данных, значения которого перед загрузкой будут преобразованы.


		 ![](../../Property_Image.gif)
		 [Transform](../../Interface/IDatasetDataTransformProvider/IDatasetDataTransformProvider.Transform.htm)
		 Свойство Transform
		 определяет объект, осуществляющий преобразование данных перед
		 загрузкой.


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
