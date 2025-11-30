# DataMapping.setup

DataMapping.setup
-


# DataMapping.setup


## Синтаксис


setup(index: Number);


## Параметры


index. Индекс, по которому необходимо получать данные из каждого измерения.


## Описание


Метод setup устанавливает настройки отображения данных и индекс, по которому необходимо получать данные из каждого измерения.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Отобразим в пузырьковой диаграмме данные, соответствующие индексу 5 относительно оси X:


// Получим объект сопоставления данных рядов цветам пузырьков
var colorVisual = bubbleChart.getColorVisual();
// Получим настройки сопоставления данных
var mapping = colorVisual.getColorMapping();
mapping.setup(5);
// Отобразим данные, соответствующие индексу 5
bubbleChart.animate(bubbleChart.getTimeline().getStepDuration());

В результате выполнения примера в пузырьковой диаграмме были отображены данные, соответствующие индексу 5 относительно оси X:


![](../Visual/Visual_Index.png)


См. также:


[DataMapping](DataMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
