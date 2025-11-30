# DataVisualizer.getFirstScale

DataVisualizer.getFirstScale
-


**


# DataVisualizer.getFirstScale


## Синтаксис


getFirstScale();


## Описание


Метод getFirstScale** возвращает
 первую шкалу диаграммы.


## Комментарии


Метод возвращает объект типа PP.ScaleBase.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Изменим массив цветов для первой
 шкалы сопоставления данных пузырьковой диаграммы:


// Определим шкалу цветов
var colorScale = new PP.ScaleBase({
    Mode: "Uniform",
    Items: "#00ff00 #30cf00 #708f00 #b04f00 #f00f00",
    NoData: "#AFBFBF",
    TypeArguments: "Brush"
});
// Получим первую шкалу пузырьковой диаграммы - шкалу цветов
var firstScale = bubbleChart.getFirstScale();
// Получим набор цветов шкалы
var colorItems = firstScale.getItems();
// Поменяем цвета шкалы
for (var i in colorItems) {
    var item = colorItems[i];
    item.setColor(colorScale.getItems()[i].getColor());
};
// Обновим пузырьковую диаграмму
bubbleChart.refresh();

В результате выполнения примера были изменены цвета пузырьков в первой
 шкале сопоставления данных пузырьковой диаграммы:


![](DataVisualizer_Visuals.png)


См. также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
