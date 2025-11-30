# ChartSeriePoint.isColorSet

ChartSeriePoint.isColorSet
-


# ChartSeriePoint.isColorSet


## Синтаксис


isColorSet();


## Описание


Метод isColorSet определяет,
 установлен ли для точки цвет.


## Комментарии


Метод возвращает true - если
 для пузырька установлен цвет, возвращает false
 - если цвета пузырьков определяются автоматически.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Определим настроен ли у первой
 точки первого ряда отдельный цвет:


// Получим первый ряд данных пузырьковой диаграммы
var serie = bubbleChart.getSeries()[0];
// Получим первый пузырёк из данного ряда
var point = serie.getPoints()[0];
// Определим, установлен ли у пузырька цвет
alert(point.isColorSet());

В результате выполнения примера были выведены настройки прицела первого
 пузырька первого ряда данных.


См. также:


[ChartSeriePoint](ChartSeriePoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
