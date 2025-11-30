# PieOriginOffset: Атрибут SVG карты

PieOriginOffset: Атрибут SVG карты
-


# Атрибут PieOriginOffset


Атрибут PieOriginOffset служит
 для указания точки, из которой будут строиться круговые показатели. Координаты
 точки указываются в процентном значении относительно размера прямоугольной
 области, которая ограничивает фигуру. Отсчет ведется из левого нижнего
 угла области.


При конвертации в формат tbs значения данного атрибута будут установлены
 в качестве значений параметра PieOriginOffset
 для элементов карты. Если атрибут PieOriginOffset
 не задан, то для параметров будет указано значение по умолчанию - точка
 0.5,0.5.


## Синтаксис


<fs:Attribute Name="PieOriginOffset"
 Type="point">


    <fs:Data
 Id="RU-MOS" Value="0.3,0.3" />


    ...


</fs:Attribute>


## Комментарии


Если на топооснове задана одна метрика, и определён атрибут для отступов
 у слоя:


<fs:Attribute Name="PieOriginOffset"
 Type="point">


то отступы применяются. Если задано более одной метрики, то для задания
 отступов у слоя используйте свойства [IVZMapChartLayer.PlaceVisualsOneByOne](KeVisualizators.chm::/Interface/IVZMapChartLayer/IVZMapChartLayer.PlaceVisualsOneByOne.htm)
 или [MapLayer.PlaceVisualsOneByOne](dhtmlMapChart.chm::/Classes/Map/MapLayer/MapLayer.PlaceVisualsOneByOne.htm).


См. также:


[Элемент
 <fs:Attributes>](../fs_Attributes_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
