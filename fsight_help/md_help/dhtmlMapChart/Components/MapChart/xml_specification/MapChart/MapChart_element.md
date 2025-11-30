# Элемент &lt;MapChart&gt;

Элемент <MapChart>
-


# Элемент MapChart


Элемент MapChart описывает настройки
 карты. Это корневой элемент карты.


Элемент MapChart - экземпляр
 класса [MapChart](../../../../Classes/Map/MapChart/MapChart.htm).


Включает в себя элементы:


	- [ItemsDictionary](ItemsDictionary/ItemsDictionary.htm);


	- [MapLayers](MapLayers/MapLayers_element.htm);


	- [DataSources](DataSources/DataSources_element.htm);


	- [MapArrows](MapArrows/MapArrows_element.htm);


	- [MapLegends](MapLegends/MapLegends_element.htm);


	- [MapShapes](MapShapes/MapShapes_element.htm);


	- [MapTerritoryTranscript](MapTerritoryTranscript/MapTerritoryTranscript_element.htm);


	- [RegionsNames](RegionsNames/RegionsNames_element.htm)


## Атрибуты элемента MapChart


		 Наименование атрибута
		 Тип
		 Описание


		 Topobase
		 String
		 Адрес svg-файла с топоосновой.


		 Scale
		 Double
		 Масштаб.


		 Background
		 [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm)
		 Либо идентификатор
		 кисти, описанной в словаре элементов, либо полное описание кисти.
		 При полном описании кисти может использоваться как элемент. Идентификатор
		 должен располагаться в фигурных скобках: Background:
		 ”{идентификатор}”.


		 TopobaseHorizontalAlignment
		 HorizontalAlignment
		 Горизонтальное выравнивание карты.
		 Допустимые значения:


			- Left.
			 По левому краю;


			- Center.
			 По центру;


			- Right.
			 По правому краю;


			- Custom.
			 Пользовательские настройки.


		 TopobaseVerticalAlignment
		 VerticalAlignment
		 Вертикальное выравнивание карты.
		 Допустимые значения:


			- Top.
			 По верхнему краю;


			- Center.
			 По центру;


			- Bottom.
			 По нижнему краю;


			- Custom.
			 Пользовательские настройки.


		 Type
		 [PP.MapChartType](../../../../Enums/MapChartType.htm)
		 Технология отрисовки карты. Допустимые
		 значения:


			- SVG;


			- Google;


			- OpenStreetMap;


			- Yandex;


			- Bing;


			- ArcGis;


			- Silverlight.


[Пример настройки элемента MapChart](MapChart_element_exmpl.htm)


См. также:


[MapChart](../../MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
