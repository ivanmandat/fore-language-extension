# IMDCalculationSource

IMDCalculationSource
-


# IMDCalculationSource


## Описание


Интерфейс IMDCalculationSource
 содержит свойства и методы для работы с объектом-источником многомерного
 расчета на сервере БД.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IncludeInPointset](IMDCalculationSource.IncludeInPointset.htm)
		 Свойство IncludeInPointset
		 определяет, будет ли данный источник входить в первичное множество
		 источников, по которым формируется список точек для расчета.


		 ![](../../Property_Image.gif)
		 [SelectSQL](IMDCalculationSource.SelectSQL.htm)
		 Свойство SelectSQL
		 возвращает SQL-запрос, используемый для выборки данных из таблиц
		 БД.


## Свойства, унаследованные от [IMDCalculationDataset](../IMDCalculationDataset/IMDCalculationDataset.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cube](../IMDCalculationDataset/IMDCalculationDataset.Cube.htm)
		 Свойство Cube определяет
		 куб, являющийся источником/приёмником данных в многомерном расчете
		 на сервере БД.


		 ![](../../Property_Image.gif)
		 [Data](../IMDCalculationDataset/IMDCalculationDataset.Data.htm)
		 Свойство Data определяет
		 реляционный источник/приёмник данных, участвующий в многомерном
		 расчете на сервере БД.


		 ![](../../Property_Image.gif)
		 [Facts](../IMDCalculationDataset/IMDCalculationDataset.Facts.htm)
		 Свойство Facts возвращает
		 коллекцию показателей связанных с полями источника/приёмника,
		 значения которых используются при многомерном расчете на сервере
		 БД.


		 ![](../../Property_Image.gif)
		 [Fields](../IMDCalculationDataset/IMDCalculationDataset.Fields.htm)
		 Свойство Fields возвращает
		 коллекцию полей источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [IsDestination](../IMDCalculationDataset/IMDCalculationDataset.IsDestination.htm)
		 Свойство IsDestination
		 возвращает признак того, что данный объект является назначением
		 многомерного расчета на сервере БД.


		 ![](../../Property_Image.gif)
		 [Slices](../IMDCalculationDataset/IMDCalculationDataset.Slices.htm)
		 Свойство Slices возвращает
		 коллекцию срезов источника/приёмника данных.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


## Методы, унаследованные от [IMDCalculationDataset](../IMDCalculationDataset/IMDCalculationDataset.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetCube](../IMDCalculationDataset/IMDCalculationDataset.SetCube.htm)
		 Метод SetCube осуществляет
		 настройку срезов и фактов источника/приёмника данных в соответствии
		 со структурой указанного куба.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
