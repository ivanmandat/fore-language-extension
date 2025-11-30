# IVZColorLegendBase

IVZColorLegendBase
-


# IVZColorLegendBase


Сборка: Visualizators;


## Описание


Интерфейс IVZColorLegendBase
 предназначен для работы с цветовой шкалой легенды визуализатора.


## Иерархия наследования


           [IVZPlacedControlBase](../IVZPlacedControlBase/IVZPlacedControlBase.htm)


           [IVZLegendBase](../IVZLegendBase/IVZLegendBase.htm)


           IVZColorLegendBase


## Комментарии


Данный интерфейс является базовым для следующих интерфейсов:


	- [IVZIntervalsLegend](../IVZIntervalsLegend/IVZIntervalsLegend.htm);


	- IVZSpectrumLegend.


Параметры цветовой шкалы визуализатора могут быть получены в свойстве
 [IVZLegends.Item](../IVZLegends/IVZLegends.Item.htm)
 после приведения к типу IVZColorLegendBase.


Данная шкала может выглядеть следующим образом:


![](../IVZDataScale/IVZDataScale.png)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoColumnsCount](IVZColorLegendBase.AutoColumnsCount.htm)


		 Свойство AutoColumnsCount
		 определяет, будет ли количество столбцов для пунктов цветовой
		 легенды устанавливаться автоматически.


		 ![](../../Property_Image.gif)
		 [BetweenFormat](IVZColorLegendBase.BetweenFormat.htm)


		 Свойство BetweenFormat
		 определяет формат записи интервалов с обеими границами.


		 ![](../../Property_Image.gif)
		 [DoHighlight](IVZColorLegendBase.DoHighlight.htm)


		 Свойство DoHighlight
		 определяет признак, разрешающий подсветку элементов цветовой шкалы
		 в легенде.


		 ![](../../Property_Image.gif)
		 [GreaterFormat](IVZColorLegendBase.GreaterFormat.htm)


		 Свойство GreaterFormat
		 определяет формат записи интервалов с левой границей.


		 ![](../../Property_Image.gif)
		 [HighlightBrush](IVZColorLegendBase.HighlightBrush.htm)


		 Свойство HighlightBrush
		 определяет кисть для подсветки элементов легенды визуализатора.


		 ![](../../Property_Image.gif)
		 [HoverMode](IVZColorLegendBase.HoverMode.htm)


		 Свойство HoverMode
		 определяет, при каком действии
		 будет подсвечиваться элемент легенды.


		 ![](../../Property_Image.gif)
		 [InactiveBrush](IVZColorLegendBase.InactiveBrush.htm)


		 Свойство InactiveBrush
		 определяет кисть для неактивного элемента визуализатора.


		 ![](../../Property_Image.gif)
		 [Items](IVZColorLegendBase.Items.htm)


		 Свойство Items определяет
		 коллекцию пунктов цветовой легенды.


		 ![](../../Property_Image.gif)
		 [LessFormat](IVZColorLegendBase.LessFormat.htm)


		 Свойство LessFormat
		 определяет формат записи интервалов с правой границей.


		 ![](../../Property_Image.gif)
		 [NoDataPosition](IVZColorLegendBase.NoDataPosition.htm)


		 Свойство NoDataPosition
		 определяет расположение элементов, соответствующих отсутствующим
		 данным, в визуализаторе.


		 ![](../../Property_Image.gif)
		 [NoDataText](IVZColorLegendBase.NoDataText.htm)


		 Свойство NoDataText
		 определяет подпись для элемента, соответствующего отсутствующим
		 данным, в визуализаторе.


		 ![](../../Property_Image.gif)
		 [NoDataVisible](IVZColorLegendBase.NoDataVisible.htm)


		 Свойство NoDataVisible
		 определяет признак видимости элемента, соответствующего отсутствующим
		 данным, в визуализаторе.


		 ![](../../Property_Image.gif)
		 [Scale](IVZColorLegendBase.Scale.htm)


		 Свойство Scale определяет
		 шкалу для цветовой легенды визуализатора.


## Свойства, унаследованные от интерфейса [IVZLegendBase](../IVZLegendBase/IVZLegendBase.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DefaultFormat](../IVZLegendBase/IVZLegendBase.DefaultFormat.htm)


		 Свойство DefaultFormat
		 определяет формат чисел легенды.


		 ![](../../Property_Image.gif)
		 [Footer](../IVZLegendBase/IVZLegendBase.Footer.htm)


		 Свойство Footer определяет
		 нижний колонтитул легенды.


		 ![](../../Property_Image.gif)
		 [FooterLine](../IVZLegendBase/IVZLegendBase.FooterLine.htm)


		 Свойство FooterLine определяет
		 объект для работы с линией нижнего колонтитула легенды визуализатора.


		 ![](../../Property_Image.gif)
		 [Header](../IVZLegendBase/IVZLegendBase.Header.htm)


		 Свойство Header определяет
		 заголовок легенды.


		 ![](../../Property_Image.gif)
		 [HeaderLine](../IVZLegendBase/IVZLegendBase.HeaderLine.htm)


		 Свойство HeaderLine
		 определяет объект для работы с линией верхнего колонтитула легенды
		 визуализатора.


		 ![](../../Property_Image.gif)
		 [IsDependent](../IVZLegendBase/IVZLegendBase.IsDependent.htm)


		 Свойство IsDependent
		 определяет зависимость легенды от данных.


		 ![](../../Property_Image.gif)
		 [IsOverlap](../IVZLegendBase/IVZLegendBase.IsOverlap.htm)


		 Свойство IsOverlap
		 определяет признак того, что легенда не уменьшает рабочую область
		 визуализатора.


## Свойства, унаследованные от интерфейса [IVZPlacedControlBase](../IVZPlacedControlBase/IVZPlacedControlBase.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Style](../IVZPlacedControlBase/IVZPlacedControlBase.Style.htm)


		 Свойство Style определяет
		 стиль для элемента управления.


		 ![](../../Property_Image.gif)
		 [HorizontalAlignment](../IVZPlacedControlBase/IVZPlacedControlBase.HorizontalAlignment.htm)


		 Свойство HorizontalAlignment
		 определяет горизонтальное выравнивание элемента управления.


		 ![](../../Property_Image.gif)
		 [VerticalAlignment](../IVZPlacedControlBase/IVZPlacedControlBase.VerticalAlignment.htm)


		 Свойство VerticalAlignment
		 определяет вертикальное выравнивание элемента управления.


		 ![](../../Property_Image.gif)
		 [Visible](../IVZPlacedControlBase/IVZPlacedControlBase.Visible.htm)


		 Свойство Visible определяет
		 видимость элемента управления.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetupLegendItems](IVZColorLegendBase.SetupLegendItems.htm)
		 Метод SetupLegendItems
		 задаёт настройки сопоставления данных из источника для цветовой
		 шкалы легенды визуализатора.


См. также:


[Интерфейсы сборки
 Visualizators](../KeVisualizators_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
