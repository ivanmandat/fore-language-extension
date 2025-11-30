# BubbleChart.getMappingMax

BubbleChart.getMappingMax
-


**


# BubbleChart.getMappingMax


## Синтаксис


getMappingMax(visualType: [PP.Ui.VisualType](../../../Enums/VisualType.htm));


## Параметры


*visualType.* Вид настройки пузырька пузырьковой диаграммы.


## Описание


Метод getMappingMax** возвращает максимальное значение для указанной оси пузырьковой диаграммы.


## Комментарии


Метод возвращает значение типа Number.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Определим минимальный и максимальный результат по осям X и Y для пузырьковой диаграммы:


// Получим минимальный и максимальный результат по оси X
var minX = bubbleChart.getMappingMin(PP.Ui.VisualType.X);
var maxX = bubbleChart.getMappingMax(PP.Ui.VisualType.X);
console.log("Минимальный результат по оси X: " + minX + ", максимальный результат: " + maxX);
// Получим минимальный и максимальный результат по оси Y
var minY = bubbleChart.getMappingMin(PP.Ui.VisualType.Y);
var maxY = bubbleChart.getMappingMax(PP.Ui.VisualType.Y);
console.log("Минимальный результат по оси Y: " + minY + ", максимальный результат: " + maxY);

В результате выполнения примера в консоли браузера был выведен минимальный и максимальный результат по осям X и Y:


Минимальный результат по оси X: 34, максимальный результат: 465

Минимальный результат по оси Y: 209, максимальный результат: 34


См. также:


[BubbleChart](BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
