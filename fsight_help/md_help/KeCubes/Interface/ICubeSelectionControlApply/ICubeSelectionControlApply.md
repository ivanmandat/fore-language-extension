# ICubeSelectionControlApply

ICubeSelectionControlApply
-


# ICubeSelectionControlApply


## Описание


Интерфейс ICubeSelectionControlApply
 содержит свойства и методы для управления отметкой измерений куба.


## Комментарии


Параметры управления отметкой можно получить, используя один из следующих
 методов:


	- [ICalculatedCubeInstance.CreateApply](../ICalculatedCubeInstance/ICalculatedCubeInstance.CreateApply.htm);


	- [ICubeInstanceDestination.CreateApplyDimensions](../ICubeInstanceDestination/ICubeInstanceDestination.CreateApplyDimensions.htm);


	- [ICubeInstanceSource.CreateApplyDimensions](../ICubeInstanceSource/ICubeInstanceSource.CreateApplyDimensions.htm);


	- [ICubeLoaderInstance.CreateApplyDimensions](../ICubeLoaderInstance/ICubeLoaderInstance.CreateApplyDimensions.htm);


	- [ICubeSelectionControl.CreateApply](../ICubeSelectionControl/ICubeSelectionControl.CreateApply.htm);


	- [IMDCalculationInstance.CreateApply](../IMDCalculationInstance/IMDCalculationInstance.CreateApply.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Control](ICubeSelectionControlApply.Control.htm)
		 Свойство Control возвращает
		 родительский объект из которого получены текущие параметры управления
		 отметкой.


		 ![](../../Property_Image.gif)
		 [Instance](ICubeSelectionControlApply.Instance.htm)
		 Свойство Instance определяет
		 экземпляр открытого объекта, для которого созданы текущие параметры
		 управления отметкой.


		 ![](../../Property_Image.gif)
		 [Mode](ICubeSelectionControlApply.Mode.htm)
		 Свойство Mode возвращает
		 режим, в котором будет осуществляться применение параметров управления.


		 ![](../../Property_Image.gif)
		 [Options](ICubeSelectionControlApply.Options.htm)
		 Свойство Options позволяет
		 применить настройки управления через управляющее измерение в вычисляемом
		 кубе.


		 ![](../../Property_Image.gif)
		 [ResultSelection](ICubeSelectionControlApply.ResultSelection.htm)
		 Свойство ResultSelection
		 возвращает результирующую отметку, полученную после применения
		 параметров управления.


		 ![](../../Property_Image.gif)
		 [SourceSelection](ICubeSelectionControlApply.SourceSelection.htm)
		 Свойство SourceSelection
		 определяет отметку управляющих измерений, в соответствии с которой
		 будет изменена отметка в управляемых измерениях.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Apply](ICubeSelectionControlApply.Apply.htm)
		 Метод Apply осуществляет
		 построение отметки куба в заданном режиме.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
