# Visual.setIndex

Visual.setIndex
-


# Visual.setIndex


## Синтаксис


setIndex(value: Number);


## Параметры


value. Индекс, по которому должны быть получены данных из измерения.


## Описание


Метод setIndex устанавливает индекс, по которому необходимо получать данные из измерения.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Отобразим в пузырьковой диаграмме данные, соответствующие индексу 5 относительно оси X, и разрешим обновление настроек сопоставления данных при смене индекса:


// Получим настройки сопоставления данных рядов оси X пузырьковой диаграммы
var xVisual = bubbleChart.getXVisual();
// Разрешим обновление настроек сопоставления данных при смене индекса
xVisual.setSetupOnStep(false);
// Установим новый индекс
xVisual.setIndex(5);
// Отобразим данные, соответствующие индексу 5
bubbleChart.animate(bubbleChart.getTimeline().getStepDuration());

В результате выполнения примера в пузырьковой диаграмме были отображены данные, соответствующие индексу 5 относительно оси X:


![](Visual_Index.png)


См. также:


[PP.Visual](Visual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
