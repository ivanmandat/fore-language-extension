# IAutoCube

IAutoCube
-


# IAutoCube


Сборка: Cubes;


## Описание


Интерфейс IAutoCube содержит
 свойства объекта репозитория - Автоматический куб.


## Иерархия наследования


IAutoCube


## Комментарии


При создании нового стандартного куба для его корректной работы необходимо
 произвести следующие минимальные настройки:


	- В свойстве [Database](IAutoCube.Database.htm) укажите
	 базу данных, в которой будут храниться данные куба.


	- В коллекцию [Dimensions](IAutoCube.Dimensions.htm)
	 добавьте справочники, которые будут выступать в качестве измерений.


	- Если данные в автоматический куб должны загружаться из внешнего
	 источника, то укажите этот источник в свойстве [Source](IAutoCube.Source.htm).
	 [Свяжите](../IAutoCubeDimension/IAutoCubeDimension.MapDimension.htm)
	 измерения куба-источника и автоматического куба, [зафиксируйте](../IAutoCubeSource/IAutoCubeSource.FixInfo.htm)
	 те измерения, которые не будут связаны.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](IAutoCube.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой хранятся данные куба.


		 ![](../../Property_Image.gif)
		 [Destinations](IAutoCube.Destinations.htm)
		 Свойство Destinations
		 возвращает коллекцию вариантов отображения автоматического куба.


		 ![](../../Property_Image.gif)
		 [Dimensions](IAutoCube.Dimensions.htm)
		 Свойство Dimensions
		 возвращает коллекцию измерений автоматического куба.


		 ![](../../Property_Image.gif)
		 [Source](IAutoCube.Source.htm)
		 Свойство Source возвращает
		 параметры куба-источника данных для автоматического куба.


		 ![](../../Property_Image.gif)
		 [Transform](IAutoCube.Transform.htm)
		 Свойство Transform
		 возвращает объект, осуществляющий преобразование данных при изменении
		 положения измерений в структуре куба.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
