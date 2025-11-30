# IStandardCubeDataset

IStandardCubeDataset
-


# IStandardCubeDataset


## Описание


Интерфейс IStandardCubeDataset
 содержит свойства источника данных стандартного куба.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AggregateDuplicatesMode](IStandardCubeDataset.AggregateDuplicatesMode.htm)
		 Свойство AggregateDuplicatesMode
		 определяет где будет производиться агрегация дублирующихся данных.


		 ![](../../Property_Image.gif)
		 [Dataset](IStandardCubeDataset.Dataset.htm)
		 Свойство Dataset возвращает
		 структуру реляционного объекта репозитория, являющегося источником
		 данных для данного куба.


		 ![](../../Property_Image.gif)
		 [DrillThroughQuery](IStandardCubeDataset.DrillThroughQuery.htm)
		 Свойство DrillThroughQuery
		 определяет объект репозитория «Запрос»
		 для получения детализированных данных.


		 ![](../../Property_Image.gif)
		 [ForeClass](IStandardCubeDataset.ForeClass.htm)
		 Свойство ForeClass
		 возвращает наименование класса, который используется для обработки
		 процесса формирования запроса на извлечение данных.


		 ![](../../Property_Image.gif)
		 [Module](IStandardCubeDataset.Module.htm)
		 Свойство Module возвращает
		 описание модуля, в котором реализован класс для обработки процесса
		 формирования запроса на извлечение данных.


		 ![](../../Property_Image.gif)
		 [UseSubqueryOptimization](IStandardCubeDataset.UseSubqueryOptimization.htm)
		 Свойство UseSubqueryOptimization
		 определяет, будут ли использоваться подзапросы при формировании
		 запроса на извлечение данных текущего источника.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetCallback](IStandardCubeDataset.SetCallback.htm)
		 Метод SetCallback задаёт
		 для источника данных обработчик процесса формирования запроса
		 на извлечение данных.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
