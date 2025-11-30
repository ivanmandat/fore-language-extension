# IStandardCube

IStandardCube
-


# IStandardCube


Сборка: Cubes;


## Описание


Интерфейс IStandardCube содержит
 свойства объекта репозитория - Стандартный куб.


## Иерархия наследования


IStandardCube


## Комментарии


При создании нового стандартного куба для его корректной работы необходимо
 произвести следующие минимальные настройки:


	- В коллекции [Destinations](IStandardCube.Destinations.htm)
	 получите вариант отображения по умолчанию или создайте новый вариант
	 отображения.


	- Настройте измерение фактов одним из следующих образов:


		- установите свойству [ExternalFactDimension](IStandardCube.ExternalFactDimension.htm)
		 значение True и в коллекции
		 [Dimensions](../IStandardCubeDestination/IStandardCubeDestination.Dimensions.htm)
		 для справочника, который будет использоваться в качестве измерения
		 фактов, установите свойству [IStandardCubeDimension.FactDimension](../IStandardCubeDimension/IStandardCubeDimension.FactDimension.htm)
		 значение True;


		- установите свойству [ExternalFactDimension](IStandardCube.ExternalFactDimension.htm)
		 значение False и, используя
		 свойство [FactDimension](../IStandardCubeDestination/IStandardCubeDestination.FactDimension.htm), настройте
		 локальное измерение фактов.


	- В коллекцию [Datasets](../IStandardCubeDestination/IStandardCubeDestination.Datasets.htm)
	 добавьте источники данных, в коллекции [FactBindings](../IStandardCubeDestination/IStandardCubeDestination.FactBindings.htm)
	 настройте привязки фактов к добавленными источникам.


	- В коллекцию [Dimensions](../IStandardCubeDestination/IStandardCubeDestination.Dimensions.htm)
	 добавьте справочники, которые будут выступать в качестве измерений.
	 Для каждого справочника настройте [привязку](../IStandardCubeDimension/IStandardCubeDimension.Binding.htm)
	 к полям источников.


	- При необходимости в коллекции [Relations](../IStandardCubeDestination/IStandardCubeDestination.Relations.htm)
	 можно создать отношения, которые позволяют получать значения фактов
	 путём смещения относительно текущей точки расчёта, а в коллекции [CalcBindings](../IStandardCubeDestination/IStandardCubeDestination.Relations.htm)
	 настроить привязки для вычисляемых фактов.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ChildRubricator](IStandardCube.ChildRubricator.htm)
		 Свойство ChildRubricator
		 возвращает дочернюю БД временных рядов.


		 ![](../../Property_Image.gif)
		 [DefaultCallbackClass](IStandardCube.DefaultCallbackClass.htm)
		 Свойство DefaultCallbackClass
		 возвращает класс, который используется для обработки процесса
		 сохранения данных в куб.


		 ![](../../Property_Image.gif)
		 [DefaultCallbackModule](IStandardCube.DefaultCallbackModule.htm)
		 Свойство DefaultCallbackModule
		 возвращает модуль, в котором находится класс для обработки процесса
		 сохранения данных в куб.


		 ![](../../Property_Image.gif)
		 [Destinations](IStandardCube.Destinations.htm)
		 Свойство Destinations
		 возвращает коллекцию вариантов отображения стандартного куба.


		 ![](../../Property_Image.gif)
		 [ExternalFactDimension](IStandardCube.ExternalFactDimension.htm)
		 Свойство ExternalFactDimension
		 определяет, будет ли использоваться в качестве измерения фактов
		 существующий справочник репозитория.


		 ![](../../Property_Image.gif)
		 [SegmentContainer](IStandardCube.SegmentContainer.htm)
		 Свойство SegmentContainer
		 определяет контейнер сегментов для куба.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetDefaultCallback](IStandardCube.SetDefaultCallback.htm)
		 Метод SetDefaultCallback
		 задаёт для куба обработчик процесса сохранения данных в куб.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
