# ChartArea.Chart

ChartArea.Chart
-


**


# ChartArea.Chart


## Синтаксис


Chart: PP.Ui.[BubbleChart](../BubbleChart/BubbleChart.htm);


## Описание


Свойство Chart** определяет
 пузырьковую диаграмму текущей области построения пузырьковой диаграммы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setChart,
 а возвращается с помощью метода getChart.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Получим пузырьковую диаграмму текущей области
 построения пузырьковой диаграммы и установим новое значение коэффициента прозрачности:


// Получим область построения пузырьковой диаграммы
var chartArea = bubbleChart.getChartArea();
// Получим пузырьковую диаграмму
var chart = chartArea.getChart();
// Установим новое значение коэффициента прозрачности для пузырьковой диаграммы
chart.setOpacity(0.5, true);
В результате выполнения примера был изменен коэффициент прозрачности
 пузырьковой диаграммы:


![](ChartArea_getChart.png)


См. также:


[ChartArea](ChartArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
