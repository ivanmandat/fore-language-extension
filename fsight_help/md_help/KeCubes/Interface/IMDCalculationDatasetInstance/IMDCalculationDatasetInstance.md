# IMDCalculationDatasetInstance

IMDCalculationDatasetInstance
-


# IMDCalculationDatasetInstance


## Описание


Интерфейс IMDCalculationDatasetInstance
 содержит базовые свойства и методы для работы с данными отстроенного источника/приёмника
 данных многомерного расчёта на сервере БД.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dataset](IMDCalculationDatasetInstance.Dataset.htm)
		 Свойство Dataset возвращает
		 свойства источника/приёмника данных многомерного расчета на сервере
		 БД.


		 ![](../../Property_Image.gif)
		 [DimensionSet](IMDCalculationDatasetInstance.DimensionSet.htm)
		 Свойство DimensionSet
		 возвращает набор измерений отстроенного источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [Facts](IMDCalculationDatasetInstance.Facts.htm)
		 Свойство Facts возвращает
		 фиктивное измерение показателей, которые связаны с полями данных.


		 ![](../../Property_Image.gif)
		 [IsDestination](IMDCalculationDatasetInstance.IsDestination.htm)
		 Свойство IsDestination
		 возвращает признак того, что данный объект является назначением
		 многомерного расчета на сервере БД.


		 ![](../../Property_Image.gif)
		 [Slices](IMDCalculationDatasetInstance.Slices.htm)
		 Свойство Slices возвращает
		 коллекцию cрезов отстроенного источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [View](IMDCalculationDatasetInstance.View.htm)
		 Свойство View возвращает
		 параметры отображения элементов в измерениях и в формулах многомерного
		 расчета.


## Свойства, унаследованные от [INamedEntityModel](foresys.chm::/interface/inamedentitymodel/inamedentitymodel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Id.htm)
		 Свойство Id возвращает
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Name.htm)
		 Свойство Name возвращает
		 наименование объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CoordToKey](IMDCalculationDatasetInstance.CoordToKey.htm)
		 Метод CoordToKey осуществляет
		 преобразование координаты, соответствующей элементу в источнике/приёмнике
		 данных, в уникальный ключ элемента.


		 ![](../../Sub_Image.gif)
		 [CoordToText](IMDCalculationDatasetInstance.CoordToText.htm)
		 Метод CoordToText возвращает
		 строковое представление элемента, которому соответствует координата
		 в источнике/приёмнике данных.


		 ![](../../Sub_Image.gif)
		 [KeyToCoord](IMDCalculationDatasetInstance.KeyToCoord.htm)
		 Метод KeyToCoord осуществляет
		 преобразование уникального ключа элемента в координату в источнике/приёмнике
		 данных.


		 ![](../../Sub_Image.gif)
		 [KeyToText](IMDCalculationDatasetInstance.KeyToText.htm)
		 Метод KeyToText возвращает
		 строковое представление элемента, которому соответствует уникальный
		 ключ.


		 ![](../../Sub_Image.gif)
		 [NewCoord](IMDCalculationDatasetInstance.NewCoord.htm)
		 Метод NewCoord создает
		 объект, представляющий собой координату элемента в источнике/приёмнике
		 данных.


		 ![](../../Sub_Image.gif)
		 [NewKey](IMDCalculationDatasetInstance.NewKey.htm)
		 Метод NewKey создает
		 объект, представляющий собой уникальный ключ, которому соответствует
		 элемент в источнике/приёмнике данных.


		 ![](../../Sub_Image.gif)
		 [SetDimensionSet](IMDCalculationDatasetInstance.SetDimensionSet.htm)
		 Метод SetDimensionSet
		 устанавливает набор измерений для отстроенного источника/приёмника
		 данных.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
