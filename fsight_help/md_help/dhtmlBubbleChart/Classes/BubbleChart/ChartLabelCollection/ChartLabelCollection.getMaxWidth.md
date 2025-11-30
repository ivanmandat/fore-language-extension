# ChartLabelCollection.getMaxWidth

ChartLabelCollection.getMaxWidth
-


**


# ChartLabelCollection.getMaxWidth


## Синтаксис


getMaxWidth();


## Описание


Метод getMaxWidth** рассчитывает максимальную ширину меток в коллекции.


## Комментарии


Метод возвращает значение типа Number.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Определим максимальную ширину и высоту меток в коллекции для оси X:


// Получим коллекцию меток для оси X пузырьковой диаграммы
var labels = bubbleChart.getChartArea().getAxisX().getLabels();
// Рассчитаем максимальную ширину меток в коллекции
var maxWidth = labels.getMaxWidth();
console.log("Максильмальная ширина меток для оси X: " + maxWidth);
// Рассчитаем максимальную высоту меток в коллекции
var maxHeight = labels.getMaxHeight();
console.log("Максильмальная высота меток для оси X: " + maxHeight);

В результате выполнения примера в консоли браузера была выведена максимальная ширина и высота меток для оси X:


Максильмальная ширина меток для оси X: 61

Максильмальная высота меток для оси X: 24


См. также:


[ChartLabelCollection](ChartLabelCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
