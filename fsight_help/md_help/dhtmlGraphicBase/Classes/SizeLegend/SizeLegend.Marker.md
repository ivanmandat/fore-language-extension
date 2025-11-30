# SizeLegend.Marker

SizeLegend.Marker
-


# SizeLegend.Marker


## Синтаксис


Marker: [PP.Ui.SizeLegendMarkerShape](../../Enums/SizeLegendMarkerShape.htm);


## Описание


Свойство Marker определяет
 форму маркеров легенды.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setMarker,
 а возвращается с помощью метода getMarker.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Изменим следующие
 свойства легенды размеров: форма маркеров, толщина их границы, цвет, отступ
 друг от друга, отступ текста от маркеров. Установим максимальные и минимальные
 радиусы и значения маркера, а также формат записи его максимального и
 минимального значения:


// Получим легенду размеров
var legend = bubbleChart.getSizeLegend();
// Установим квадратную форму маркеров легенды
legend.setMarker(PP.Ui.SizeLegendMarkerShape.Rectangle);
// Установим новое значение толщины границы маркеров
legend.setMarkerBorderThickness(5);
// Установим новый цвет маркеров
var color = new PP.Color(0, 100, 255);
legend.setMarkerColor(color);
// Установим отступ маркеров друг от друга
legend.setMarkerSpacing(200);
// Установим максимальный радиус маркера
legend.setMaxRadius(40);
// Установим минимальный радиус маркера
legend.setMinRadius(20);
// Установим максимальное значение маркера
legend.setMaxValue(2000);
// Установим минимальное значение маркера
legend.setMinValue(1000);
// Установим формат записи максимального значения маркера
legend.setMaxValueFormat("{0:0}")
// Установим формат записи минимального значения маркера
legend.setMinValueFormat("{0:0.0000}")
// Установим новое значение отступа текста от маркеров
legend.setTextSpacing(15);
// Обновим диаграмму
bubbleChart.refresh();
В результате выполнения примера были изменены следующие свойства легенды
 размеров: форма маркеров, толщина их границы, цвет, отступ друг от друга,
 отступ текста от маркеров. Были установлены новые максимальные и минимальные
 радиусы и значения маркера, а также формат записи его максимального и
 минимального значения:


![](SizeLegend_Marker.png)


См. также:


[SizeLegend](SizeLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
