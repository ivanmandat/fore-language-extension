# IVZMapChartPie

IVZMapChartPie
-


# IVZMapChartPie


Сборка: Visualizators;


## Описание


Интерфейс IVZMapChartPie используется
 для работы с [круговым
 показателем](UiMaps.chm::/Configure/Diagrams.htm)
 на слое карты.


## Иерархия наследования


           [IVZMapChartBaseObject](../IVZMapChartBaseObject/IVZMapChartBaseObject.htm)


           [IVZMapChartVisualElement](../IVZMapChartVisualElement/IVZMapChartVisualElement.htm)


           IVZMapChartPie


## Комментарии


Для получения объектов данного типа необходимо:


	- Получить слой карты с помощью свойства
	 IVZMapChartLayers.Item.


	- Получить массив круговых показателей с помощью свойства [IVZMapChartLayer.Pies](../IVZMapChartLayer/IVZMapChartLayer.Pies.htm).


	- Получить круговой показатель с помощью свойства [IVZPiesArray.Item](../IVZPiesArray/IVZPiesArray.Item.htm).


В результате выполнения действий будет доступна работа с круговым показателем
 на слое карты.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BorderThickness](IVZMapChartPie.BorderThickness.htm)
		 Свойство BorderThickness
		 определяет толщину границ [кругового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на карте.


		 ![](../../Property_Image.gif)
		 [LeastAnglePart](IVZMapChartPie.LeastAnglePart.htm)
		 Свойство LeastAnglePart
		 определяет наименьший угол сектора [кругового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на карте.


		 ![](../../Property_Image.gif)
		 [LeastRadiusPart](IVZMapChartPie.LeastRadiusPart.htm)
		 Свойство LeastRadiusPart
		 определяет наименьшее значение радиуса [кругового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на карте.


		 ![](../../Property_Image.gif)
		 [MaxPiesCount](IVZMapChartPie.MaxPiesCount.htm)
		 Свойство MaxPiesCount
		 определяет максимальное количество отображаемых секторов [кругового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на карте.


		 ![](../../Property_Image.gif)
		 [StartAngle](IVZMapChartPie.StartAngle.htm)
		 Свойство StartAngle
		 определяет угол поворота [кругового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на карте против часовой стрелки.


		 ![](../../Property_Image.gif)
		 [UseInvertedAngles](IVZMapChartPie.UseInvertedAngles.htm)
		 Свойство UseInvertedAngles
		 определяет признак отображения секторов [кругового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на карте в обратную сторону.


## Свойства, унаследованные от [IVZMapChartVisualElement](../IVZMapChartVisualElement/IVZMapChartVisualElement.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ToolTipStyle](../IVZMapChartVisualElement/IVZMapChartVisualElement.ToolTipStyle.htm)
		 Свойство ToolTipStyle
		 определяет стиль всплывающих подсказок визуального элемента на
		 карте.


## Свойства, унаследованные от [IVZMapChartBaseObject](../IVZMapChartBaseObject/IVZMapChartBaseObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [MapChart](../IVZMapChartBaseObject/IVZMapChartBaseObject.MapChart.htm)
		 Свойство MapChart возвращает
		 объект, содержащий параметры отображения карты в экспресс-отчёте.


		 ![](../../Property_Image.gif)
		 [Visible](../IVZMapChartBaseObject/IVZMapChartBaseObject.Visible.htm)
		 Свойство Visible определяет,
		 будет ли отображаться объект на карте.


См. также:


[Интерфейсы сборки
 Visualizators](../KeVisualizators_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
