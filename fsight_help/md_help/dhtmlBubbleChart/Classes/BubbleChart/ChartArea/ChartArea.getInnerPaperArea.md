# ChartArea.getInnerPaperArea

ChartArea.getInnerPaperArea
-


# ChartArea.getInnerPaperArea


## Синтаксис


getInnerPaperArea();


## Описание


Метод getInnerPaperArea возвращает
 прямоугольник с размерами области построения без учета границ.


## Комментарии


Возвращаемое значение - экземпляр класса PP.[Rect](dhtmlCommon.chm::/Classes/PP/Rect/Rect.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Получим размеры области построения
 без учета границ:


// Получаем область построения пузырьковой диаграммы
var chartArea = bubbleChart.getChartArea();
// Получаем размер области построения без учета границ
console.log("Ширина области построения: " +  chartArea.getInnerPaperArea().getWidth());
console.log("Высота области построения: " + chartArea.getInnerPaperArea().getHeight());
В результате в консоль были выведены размеры области построения без
 учета границ:


Ширина области построения: 494


Высота области построения: 301


См. также:


[ChartArea](ChartArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
