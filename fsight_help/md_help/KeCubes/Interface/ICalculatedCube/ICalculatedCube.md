# ICalculatedCube

ICalculatedCube
-


# ICalculatedCube


Сборка: Cubes;


## Описание


Интерфейс ICalculatedCube содержит
 свойства объекта репозитория - Вычисляемый куб.


## Иерархия наследования


ICalculatedCube


## Комментарии


При создании нового вычисляемого куба для его корректной работы необходимо
 произвести следующие минимальные настройки:


	- В коллекцию [Sources](ICalculatedCube.Sources.htm)
	 добавьте какие-либо кубы или базы данных временных рядов, которые
	 будут являться источниками данных.


	- В коллекцию [Dimensions](ICalculatedCube.Dimensions.htm)
	 добавьте справочники, которые будут выступать в качестве измерений.


	- После построения [экземпляра](../ICalculatedCubeInstance/ICalculatedCubeInstance.htm)
	 вычисляемого куба, настройте [формулы](../ICalculatedCubeInstance/ICalculatedCubeInstance.Formula.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CacheFormulas](ICalculatedCube.CacheFormulas.htm)
		 Свойство CacheFormulas
		 определяет, будут ли кешироваться выражения при вычислении куба.


		 ![](../../Property_Image.gif)
		 [Dimensions](ICalculatedCube.Dimensions.htm)
		 Свойство Dimensions
		 возвращает коллекцию измерений вычисляемого куба.


		 ![](../../Property_Image.gif)
		 [EvaluateOnly](ICalculatedCube.EvaluateOnly.htm)
		 Свойство EvaluateOnly
		 определяет, по каким координатам будут вычисляться значения результирующей
		 матрицы.


		 ![](../../Property_Image.gif)
		 [ExternalFactDimension](ICalculatedCube.ExternalFactDimension.htm)
		 Свойство ExternalFactDimension
		 определяет, будет ли для вычисляемого куба использоваться локальное
		 измерение фактов.


		 ![](../../Property_Image.gif)
		 [FormulasDestinationVisible](ICalculatedCube.FormulasDestinationVisible.htm)
		 Свойство FormulasDestinationVisible
		 определяет, будет ли доступен вариант отображения формул куба
		 при просмотре куба в OLAP.


		 ![](../../Property_Image.gif)
		 [IncludeNulls](ICalculatedCube.IncludeNulls.htm)
		 Свойство IncludeNulls
		 определяет, будут ли пустые значения включены в результирующую
		 матрицу.


		 ![](../../Property_Image.gif)
		 [InternalFactDimension](ICalculatedCube.InternalFactDimension.htm)
		 Свойство InternalFactDimension
		 параметры локального измерения фактов вычисляемого куба.


		 ![](../../Property_Image.gif)
		 [Sources](ICalculatedCube.Sources.htm)
		 Свойство Sources возвращает
		 коллекцию кубов-источников данных для данного вычисляемого куба.


		 ![](../../Property_Image.gif)
		 [TimeDimension](ICalculatedCube.TimeDimension.htm)
		 Свойство TimeDimension
		 определяет измерение, которое будет управлять периодом действия
		 формул.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
