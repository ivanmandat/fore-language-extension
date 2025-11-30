# Элемент ItemsDictionary

Элемент ItemsDictionary
-


# Элемент ItemsDictionary


Элемент ItemsDictionary представляет
 собой объект, вложенные элементы которого используются для настройки частей
 карты.


Важно. Данный
 элемент всегда должен быть первым элементом в составе элемента [MapChart](../MapChart_element.htm).


## Вложенные элементы ItemsDictionary


		 Наименование элемента
		 Тип
		 Описание


		 [LinearGradientBrush](Brushes/Brushes.htm#lineargradientbrush)
		 Array of PP.[LinearGradientBrush](dhtmlCommon.chm::/Classes/PP/LinearGradientBrush/LinearGradientBrush.htm)
		 Элемент LinearGradientBrush
		 представляет собой коллекцию кистей со сплошной заливкой.


		 [RadialGradientBrush](Brushes/Brushes.htm#radialgradientbrush)
		 Array of PP.[RadialGradientBrush](dhtmlCommon.chm::/Classes/PP/RadialGradientBrush/RadialGradientBrush.htm)
		 Элемент RadialGradientBrush представляет
		 собой коллекцию кистей со сплошной заливкой.


		 [SolidColorBrush](Brushes/Brushes.htm#solidcolorbrush)
		 Array of PP.[SolidColorBrush](dhtmlCommon.chm::/Classes/PP/SolidColorBrush/SolidColorBrush.htm)
		 Элемент SolidColorBrush представляет
		 собой коллекцию кистей со сплошной заливкой.


		 [Font](Fonts/Fonts.htm)
		 Array of PP.[Font](dhtmlCommon.chm::/Classes/PP/Font/Font.htm)
		 Элемент Font представляет собой коллекцию
		 шрифтов


		 [MapLabel](MapLabels/MapLabel_element.htm)
		 Array of PP.[MapLabel](../../../../../Classes/Map/MapLabel/MapLabel.htm)
		 Элемент MapLabel представляет собой
		 коллекцию меток.


		 [ChartTooltipBase](MapToolTops/MapToolTip_element.htm)
		 [PP.Ui.ChartTooltipBase](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartTooltipBase/ChartTooltipBase.htm)
		 Элемент ChartTooltipBase содержит описание
		 всплывающей подсказки.


		 [MapScale](MapScale/MapScale_element.htm)
		 Array of PP.MapScale
		 Элемент MapScale представляет собой
		 коллекцию шкал.


		 [DataDependency](DataDependency/DataDependency_element.htm)
		 Array of PP.DataDependency
		 Элемент DataDependency представляет
		 собой коллекцию объектов зависимости.


		 [BlurEffect](Effects/Effects.htm#blureffect)
		 Array of PP.[BlurEffect](dhtmlCommon.chm::/Classes/PP/BlurEffect/BlurEffect.htm)
		 Элемент BlurEffect
		 представляет собой коллекцию эффектов рассеивания.


		 [BorderEffect](Effects/Effects.htm#bordereffect)
		 Array of PP.[BorderEffect](dhtmlCommon.chm::/Classes/PP/BorderEffect/BorderEffect.htm)
		 Элемент BorderEffect
		 представляет собой коллекцию эффектов подсветки границы.


		 [BrushEffect](Effects/Effects.htm#brusheffect)
		 Array of PP.[BrushEffect](dhtmlCommon.chm::/Classes/PP/BrushEffect/BrushEffect.htm)
		 Элемент BrushEffect
		 представляет собой коллекцию эффектов изменения цвета заливки.


		 [ScaleEffect](Effects/Effects.htm#scaleeffect)
		 Array of PP.[ScaleEffect](dhtmlGraphicBase.chm::/Classes/PP/ScaleEffect/ScaleEffect.htm)
		 Элемент ScaleEffect
		 представляет собой коллекцию эффектов изменения масштаба.


Последовательность элементов в ItemsDictionary
 имеет значение и должна соответствовать порядку их использования. Например,если
 шкала использует кисть, то описание кисти должно располагаться в словаре
 выше описания шкалы. В связи с этим рекомендуется следующая общая
 схема размещения элементов в словаре: кисти,
 шрифты, метки, всплывающие подсказки, шкалы, объекты зависимостей.


См. также:


[MapChart](../../../MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
