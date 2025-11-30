# BubbleChart.getMapping

BubbleChart.getMapping
-


**


# BubbleChart.getMapping


## Синтаксис


getMapping(visualType: [PP.Ui.VisualType](../../../Enums/VisualType.htm));


## Параметры


*visualType.* Вид настройки пузырька пузырьковой диаграммы.


## Описание


Метод getMapping** возвращает настройки сопоставления координат по указанной оси для элементов пузырьковой диаграммы.


## Комментарии


Метод возвращает значение типа PP.DataMapping.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Изменим минимальные и максимальные значения для осей X и Y пузырьковой диаграммы:


// Получим настройки сопоставления координат по оси X для элементов пузырьковой диаграммы
var xDataMapping = bubbleChart.getMapping(PP.Ui.VisualType.X);
var yDataMapping = bubbleChart.getMapping(PP.Ui.VisualType.Y);
// Установим минимальное и максимальное значение для оси X пузырьковой диаграммы
var xDataTransformer = xDataMapping.getDataTransformer();
xDataTransformer.setMinValue(-10000);
xDataTransformer.setMaxValue(70000);
// Установим минимальное и максимальное значение для оси Y пузырьковой диаграммы
var yDataTransformer = yDataMapping.getDataTransformer();
yDataTransformer.setMinValue(25);
yDataTransformer.setMaxValue(130);
// Обновим пузырьковую диаграмму
bubbleChart.refresh();

В результате выполнения примера для оси X было установлено минимальное значение -10000 и максимальное значение, равное 70000. Соответствующим образом для оси Y были заданы значения 25 и 130:


![](BubbleChart_XVisual.png)


См. также:


[BubbleChart](BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
