# Элемент &lt;MapShapes&gt;

Элемент <MapShapes>
-


# Элемент MapShapes


Элемент MapShapes содержит параметры
 областей, образующих слой карты.


[Пример настройки области карты](MapShapes_exmpl.htm)


## Элемент MapShape


Элемент MapShape содержит описание
 области карты. Область карты - экземпляр класса [MapShape](../../../../../Classes/Map/MapShape/MapShape.htm).


### Атрибуты элемента <MapShape>


		 Наименование атрибута
		 Тип
		 Описание


		 Id
		 String
		 Идентификатор области для последующей связи настроек с топоосновой.
		 Может использоваться как элемент.


		 Label
		 [MapLabel](../../../../../Classes/Map/MapLabel/MapLabel.htm)
		 Идентификатор [метки](../ItemsDictionary/MapLabels/MapLabel_element.htm)
		 для области, описанной в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm) или полное описание метки формы. Может использоваться
		 как элемент для полного описания метки. Идентификатор должен располагаться
		 в фигурных скобках: Label: ”{идентификатор}”.


		 ToolTip
		 [PP.Ui.ChartTooltipBase](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartTooltipBase/ChartTooltipBase.htm)
		 Идентификатор
		 [подсказки](../ItemsDictionary/MapToolTops/MapToolTip_element.htm)
		 для области, описанной в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm) или полное описание подсказки. Может использоваться
		 как элемент для полного описания подсказки. Идентификатор должен
		 располагаться в фигурных скобках: ToolTip:
		 ”{идентификатор}”.


		 Effect
		 [IEffect](dhtmlCommon.chm::/Classes/PP/IEffect/IEffect.htm)
		 Идентификатор
		 [эффекта](../ItemsDictionary/Effects/Effects.htm) для
		 области, описанного в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm) или полное описание эффекта. Может использоваться
		 как элемент для полного описания эффекта. Идентификатор должен
		 располагаться в фигурных скобках: Effect:
		 ”{идентификатор}”.


См. также:


[Элемент
 MapChart](../MapChart_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
