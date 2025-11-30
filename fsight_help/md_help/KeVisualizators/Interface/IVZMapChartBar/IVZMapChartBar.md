# IVZMapChartBar

IVZMapChartBar
-


# IVZMapChartBar


Сборка: Visualizators;


## Описание


Интерфейс IVZMapChartBar используется
 для работы со [столбиковым
 показателем](UiMaps.chm::/Configure/Diagrams.htm)
 на слое карты.


## Иерархия наследования


           [IVZMapChartBaseObject](../IVZMapChartBaseObject/IVZMapChartBaseObject.htm)


           [IVZMapChartVisualElement](../IVZMapChartVisualElement/IVZMapChartVisualElement.htm)


           IVZMapChartBarPie


## Комментарии


Для получения объектов данного типа необходимо:


	- Получить слой карты с помощью IVZMapChartLayers.Item.


	- Получить массив столбиковых показателей с помощью [IVZMapChartLayer.Bars](../IVZMapChartLayer/IVZMapChartLayer.Bars.htm).


	- Получить столбиковый показатель с помощью [IVZBarsArray.Item](../IVZBarsArray/IVZBarsArray.Item.htm).


В результате выполнения действий будет доступна работа со [столбиковым показателем](UiMaps.chm::/Configure/Diagrams.htm)
 на слое карты.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Axis](IVZMapChartBar.Axis.htm)
		 Свойство Axis определяет
		 объект для работы с осью [столбикового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на слое карты.


		 ![](../../Property_Image.gif)
		 [BarDistance](IVZMapChartBar.BarDistance.htm)
		 Свойство BarDistance
		 определяет расстояние между столбиками [столбикового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на слое карты.


		 ![](../../Property_Image.gif)
		 [BorderThickness](IVZMapChartBar.BorderThickness.htm)
		 Свойство BorderThickness
		 определяет толщину границ [столбикового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на слое карты.


		 ![](../../Property_Image.gif)
		 [HideZeroHeight](IVZMapChartBar.HideZeroHeight.htm)
		 Свойство HideZeroHeight
		 определяет признак скрытия столбиков нулевой высоты в [столбиковом показателе](UiMaps.chm::/Configure/Diagrams.htm)
		 на слое карты.


		 ![](../../Property_Image.gif)
		 [IsAllPeriod](IVZMapChartBar.IsAllPeriod.htm)
		 Свойство IsAllPeriod
		 определяет признак отображения данных в [столбиковом показателе](UiMaps.chm::/Configure/Diagrams.htm)
		 на слое карты за весь период.


		 ![](../../Property_Image.gif)
		 [IsPercentage](IVZMapChartBar.IsPercentage.htm)
		 Свойство IsPercentager
		 определяет признак использования процентного накопления в [столбиковом показателе](UiMaps.chm::/Configure/Diagrams.htm)
		 на слое карты.


		 ![](../../Property_Image.gif)
		 [LeastHeightPart](IVZMapChartBar.LeastHeightPart.htm)
		 Свойство LeastHeightPart
		 определяет минимальную высоту столбиков [столбикового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на слое карты.


		 ![](../../Property_Image.gif)
		 [LeastWidthPart](IVZMapChartBar.LeastWidthPart.htm)
		 Свойство LeastWidthPart
		 определяет минимальную ширину столбиков [столбикового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на слое карты.


		 ![](../../Property_Image.gif)
		 [MaxBarsCount](IVZMapChartBar.MaxBarsCount.htm)
		 Свойство MaxBarsCount
		 определяет максимальное количество отображаемых столбиков [столбикового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на слое карты.


		 ![](../../Property_Image.gif)
		 [PercentageHeight](IVZMapChartBar.PercentageHeight.htm)
		 Свойство PercentageHeight
		 определяет высоту делений [столбикового показателя](UiMaps.chm::/Configure/Diagrams.htm)
		 на слое карты при использовании процентного накопления.


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
