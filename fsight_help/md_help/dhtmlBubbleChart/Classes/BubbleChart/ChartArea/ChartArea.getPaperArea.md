# ChartArea.getPaperArea

ChartArea.getPaperArea
-


**


# ChartArea.getPaperArea


## Синтаксис


getPaperArea();


## Описание


Метод getPaperArea** возвращает контейнер области построения пузырьковой диаграммы.


## Комментарии


Метод возвращает значение типа PP.Rect.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Получим контейнер области построения пузырьковой диаграммы и выведем его размеры:


// Получим область пузырьковой диаграммы
var chartArea = bubbleChart.getChartArea();
// Получим контейнер области построения пузырьковой диаграммы
var paperArea = chartArea.getPaperArea();
// Выведем размеры контейнера области построения пузырьковой диаграммы
console.log("Ширина: " + paperArea.getWidth() + " Высота: " + paperArea.getHeight());

В результате выполнения примера в консоли браузера были выведены размеры контейнера области построения пузырьковой диаграммы:


Ширина: 500 Высота: 239


См. также:


[ChartArea](ChartArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
