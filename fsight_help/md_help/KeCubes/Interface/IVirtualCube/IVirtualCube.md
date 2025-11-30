# IVirtualCube

IVirtualCube
-


# IVirtualCube


Сборка: Cubes;


## Описание


Интерфейс IVirtualCube содержит
 свойства объекта репозитория - Виртуальный куб.


## Иерархия наследования


IVirtualCube


## Комментарии


При создании нового виртуального куба для его корректной работы необходимо
 произвести следующие минимальные настройки:


	- В коллекцию [Sources](IVirtualCube.Sources.htm) добавьте
	 какие-либо кубы или базы данных временных рядов, которые будут являться
	 источниками данных.


	- В каждом источнике, используя свойство [IVirtualCubeSource.FixInfo](../IVirtualCubeSource/IVirtualCubeSource.FixInfo.htm),
	 зафиксируйте измерения, которые имеются только в этом источнике и
	 отсутствуют в других источниках.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Compounds](IVirtualCube.Compounds.htm)
		 Свойство Compounds
		 возвращает коллекцию составных структур виртуального куба.


		 ![](../../Property_Image.gif)
		 [FactDimension](IVirtualCube.FactDimension.htm)
		 Свойство FactDimension
		 возвращает структуру измерения фактов виртуального куба.


		 ![](../../Property_Image.gif)
		 [IsFiltrationMatrix](IVirtualCube.IsFiltrationMatrix.htm)
		 Свойство IsFiltrationMatrix
		 определяет, будет ли осуществляться фильтрация измерения метаиерархий
		 в виртуальном кубе.


		 ![](../../Property_Image.gif)
		 [IsMeta](IVirtualCube.IsMeta.htm)
		 Свойство IsMeta определяет,
		 будет ли использоваться измерение метаиерархии в виртуальном кубе.


		 ![](../../Property_Image.gif)
		 [Sources](IVirtualCube.Sources.htm)
		 Свойство Sources возвращает
		 коллекцию источников данных виртуального куба.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
