# Элемент &lt;MapLayers&gt;

Элемент <MapLayers>
-


# Элемент MapLayers


Элемент MapLayers содержит список
 слоев карты. Описание слоя карты содержится в элементе MapLayer.


## Элемент <MapLayer>


Элемент <MapLayer> содержит
 описание одного слоя каты. Слой карты - экземпляр класса [MapLayer](../../../../../Classes/Map/MapLayer/MapLayer.htm).


Включает в себя следующие элементы:


	- [Visuals](MapLayer/Visuals/Visuals_element.htm);


	- [Milestones](MapLayer/Milestones/Milestones_element.htm).


### Атрибуты элемента MapLayer


		 Наименование атрибута
		 Тип
		 Описание


		 Id
		 String
		 Идентификатор слоя для последующей связи настроек с топоосновой.
		 Может использоваться как элемент.


		 Label
		 [MapLabel](../../../../../Classes/Map/MapLabel/MapLabel.htm)
		 Идентификатор [метки](../ItemsDictionary/MapLabels/MapLabel_element.htm)
		 для слоя , описанной в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm), или полное описание метки формы. Может использоваться
		 как элемент для полного описания метки. Идентификатор должен располагаться
		 в фигурных скобках: Label: ”{идентификатор}”.


		 ToolTip
		 [PP.Ui.ChartTooltipBase](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartTooltipBase/ChartTooltipBase.htm)
		 Идентификатор
		 [подсказки](../ItemsDictionary/MapToolTops/MapToolTip_element.htm)
		 для слоя, описанной в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm), или полное описание подсказки. Может использоваться
		 как элемент для полного описания подсказки. Идентификатор должен
		 располагаться в фигурных скобках: ToolTip:
		 ”{идентификатор}”.


		 Effect
		 [IEffect](dhtmlCommon.chm::/Classes/PP/IEffect/IEffect.htm)
		 Идентификатор
		 [эффекта](../ItemsDictionary/Effects/Effects.htm) для
		 слоя, описанного в [словаре
		 элементов](../ItemsDictionary/ItemsDictionary.htm), или полное описание эффекта. Может использоваться
		 как элемент для полного описания эффекта. Идентификатор должен
		 располагаться в фигурных скобках: Effect:
		 ”{идентификатор}”.


См. также:


[Элемент
 <MapChart>](../MapChart_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
