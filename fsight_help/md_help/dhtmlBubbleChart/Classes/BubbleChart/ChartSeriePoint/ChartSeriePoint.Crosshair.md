# ChartSeriePoint.Crosshair

ChartSeriePoint.Crosshair
-


# ChartSeriePoint.Crosshair


## Синтаксис


Crosshair: PP.Ui.ChartCrosshair;


## Описание


Свойство Crosshair определяет
 прицел пузырька пузырьковой диаграммы (пунктирные линии к выделенному пузырьку).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Выделим мышью первый пузырёк первого
 ряда и получим настройки прицела пузырька:


// Получим первый ряд данных пузырьковой диаграммы
var serie = bubbleChart.getSeries()[0];
// Получим первый пузырёк из данного ряда
var point = serie.getPoints()[0];
// Получим настройки прицела
var crh = point.getCrosshair();
// Выведем настройки в формате JSON
alert(JSON.stringify(crh, null, 2));

В результате выполнения примера были выведены настройки прицела первого
 пузырька первого ряда данных.


См. также:


[ChartSeriePoint](ChartSeriePoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
