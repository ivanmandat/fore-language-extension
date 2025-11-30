# BubbleChart.getLegend

BubbleChart.getLegend
-


**


# BubbleChart.getLegend


## Синтаксис


getLegend();


## Описание


Метод getLegend** возвращает легенду, описывающую интервалы значений пузырьковой диаграммы.


## Комментарии


Метод возвращает значение типа PP.Ui.IntervalsLegend.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Расположим элементы легенды пузырьковой диаграммы в два столбца и обработаем событие CaptionClick:


// Получим легенду пузырьковой диаграммы
var legend = bubbleChart.getLegend();
// Отображать легенду пузырьковой диаграммы будем в два столбца
legend.setColumnCount(2);
// Обновим пузырьковую диаграмму
bubbleChart.getInstance().refresh();
// Обработаем событие нажания за заголовок
bubbleChart.CaptionClick.add(function (sender, args) {
    console.log("Тип заголовка: " + args.Type);
});

В результате выполнения примера элементы легенды пузырьковой диаграммы были расположены в два столбца:


![](BubbleChart_getLegend.png)


После нажатия на заголовок легенды в консоли браузера был выведен тип данного заголовка, определённый с помощью перечисления [PP.Ui.VisualType](../../../Enums/VisualType.htm):


Тип заголовка: Color


См. также:


[BubbleChart](BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
