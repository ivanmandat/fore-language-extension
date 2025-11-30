# ChartCanvasSerie.AutoRotateMarker

ChartCanvasSerie.AutoRotateMarker
-


# ChartCanvasSerie.AutoRotateMarker


## Синтаксис


AutoRotateMarker: Boolean;


## Описание


Свойство AutoRotateMarker определяет,
 установлен ли на диаграмме [автоматический поворот](uidiagrams.chm::/Series.htm#markers)
 [маркеров](UiDiagrams.chm::/Tuning_format/Format_line/Markers_Setup.htm)
 для ряда данных.


## Комментарии


Значение свойства задаётся в конструкторе [ChartCanvasSerie](Constructor_ChartCanvasSerie.htm)
 или с помощью метода setAutoRotateMarker,
 а возвращается с помощью метода getAutoRotateMarker.


Допустимые значения:


	- true. Маркеры автоматически
	 изменяют своё направление по касательной к линии ряда диаграммы;


	- false. По умолчанию.
	 Использование автоматического поворота маркеров для диаграммы определяется
	 с помощью свойства [Chart.AutoRotateMarker](../Chart/Chart.AutoRotateMarker.htm).


Автоматический поворот доступен для [типа
 маркера](UiDiagrams.chm::/Tuning_format/Format_line/Markers_Setup.htm#marker_type) «Треугольник»/«Обратный треугольник»/«Ромб»
 на диаграммах:


	- линейная;


	- точечная;


	- лепестковая;


	- ступенчатая.


В зависимости от изменения значений линейного ряда диаграммы угол наклона
 маркера динамически изменяется.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Chart](../../../Components/Chart/Chart.htm) с наименованием
 «chart» (см. «[Пример
 создания линейной диаграммы](../../../Components/Chart/ChartLine.htm)»). Добавьте в свойства линейной диаграммы
 отображение маркеров в виде треугольников:


MarkersSymbol: "triangle"

Выполните в консоли автоматический поворот маркеров для первого ряда
 данных:


serie1.setAutoRotateMarker(true);
chart.redraw(true);

После выполнения примера маркеры на диаграмме первого ряда будут автоматически
 повернуты по направлению графика.


См. также:


[ChartCanvasSerie](ChartCanvasSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
