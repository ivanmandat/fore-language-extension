# ChartArea.getSymbolLayer

ChartArea.getSymbolLayer
-


**


# ChartArea.getSymbolLayer


## Синтаксис


getSymbolLayer();


## Описание


Метод getSymbolLayer**
 возвращает SVG-элемент, предназначенный для отрисовки слоя объектов области
 построения.


## Комментарии


Метод возвращает значение типа SVGElement.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Получим SVG-элемент, предназначенный
 для отрисовки слоя объектов области построения, получим объект слоя и
 выведем его идентификатор:


// Получим область пузырьковой диаграммы
var chartArea = bubbleChart.getChartArea();
// Получим SVG-элемент, предназначенный для отрисовки слоя объектов области построения
var symbolLayer = chartArea.getSymbolLayer();
// Получим объект слоя
var symbol = symbolLayer.childNodes[1];
// Выведем идентификатор полученного объекта
console.log("Идентификатор: " + symbol.id);

В результате выполнения примера в консоли браузера был выведен идентификатор
 объекта слоя объектов области построения:


Иденификатор: Serie0_Point0


См. также:


[ChartArea](ChartArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
