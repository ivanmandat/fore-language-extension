# ChartArea.getTooltipLayer

ChartArea.getTooltipLayer
-


**


# ChartArea.getTooltipLayer


## Синтаксис


getTooltipLayer();


## Описание


Метод getTooltipLayer** возвращает SVG-элемент, предназначенный для отрисовки слоя подсказки.


## Комментарии


Метод возвращает значение типа SVGElement.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Получим SVG-элемент, предназначенный для отрисовки слоя подсказки, получим его родительский контейнер и выведем его размеры:


// Получим область пузырьковой диаграммы
var chartArea = bubbleChart.getChartArea();
// Получим SVG-элемент, предназначенный для отрисовки слоя подсказки
var tooltipLayer = chartArea.getTooltipLayer();
// Получим родительский контейнер слоя подсказки
var parent = tooltipLayer.parentNode;
// Выведем размеры родительского контейнера
console.log("Размеры родительского контейнера слоя подсказки: " + parent.clientWidth + "x" + parent.clientHeight);

В результате выполнения примера в консоли браузера было выведено значение размера родительского контейнера SVG-элемента, предназначенного для отрисовки слоя подсказки:


Размеры родительского контейнера слоя подсказки: 500x243


См. также:


[ChartArea](ChartArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
