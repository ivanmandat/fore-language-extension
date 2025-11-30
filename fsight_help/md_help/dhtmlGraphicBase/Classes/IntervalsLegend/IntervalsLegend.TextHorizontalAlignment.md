# IntervalsLegend.TextHorizontalAlignment

IntervalsLegend.TextHorizontalAlignment
-


**


# IntervalsLegend.TextHorizontalAlignment


## Синтаксис


TextHorizontalAlignment: [PP.HorizontalAlignment](dhtmlCommon.chm::/Enums/PP.HorizontalAlignment.htm);


## Описание


Свойство TextHorizontalAlignment
 определяет горизонтальное выравнивание текста элементов легенды.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setTextHorizontalAlignment,
 а возвращается с помощью метода getTextHorizontalAlignment.**


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Определим и установим
 массив сопоставлений названий элементов легенды цветам. Установим
 выравнивание текста элементов по правой стороне и отступы текста элементов
 легенды от маркеров. Активируем подсветку элементов и обработаем событие
 [Selecting](IntervalsLegend.Selecting.htm) и [Selected](IntervalsLegend.Selected.htm),
 выполнив в консоли браузера следующий пример:


// Получим легенду интервалов
var legend = bubbleChart.getLegend();
// Определим массив сопоставлений названий цветам элементов легенды
var c = new PP.Color();
var el1 = {
    Name: "Элемент1",
    Color: c
}
var el2 = {
    Name: "Элемент2",
    Color: c
}
var arr = new Array();
arr[0] = el1;
arr[1] = el2;
// Установим сопоставление названий цветам элементов легенды
legend.setItems(arr);
// Установим выравнивание текста по правой стороне
legend.setTextHorizontalAlignment(PP.HorizontalAlignment.Right);
// Установим отступ текста элемента легенды от маркера
legend.setTextSpacing(30);
// Обновим диаграмму
bubbleChart.refresh();
// Активируем подсветку элементов
legend.setDoHighlight(true);
var processSelectedEvent = true;
// Обработаем событие Selecting
legend.Selecting.add(function () {
    console.log("Инициировано событие Selecting")
});
// Обработаем событие Selected
legend.Selected.add(function () {
    if (processSelectedEvent) {
        console.log("Инициировано событие Selected");
        processSelectedEvent = false;
    }
});
Наведем курсор мыши на элемент легенды.


В результате выполнения примера был установлен массив сопоставлений
 названий элементов легенды цветам. Было установлено выравнивание
 текста элементов по правой стороне и отступы текста элементов легенды
 от маркеров:


![](IntervalsLegend_TextHorizontalAlignment.png)


Также в консоли браузера были выведены сообщения о вызове обработанных
 событий:


Инициировано событие Selecting


Инициировано событие Selected


См. также:


[IntervalsLegend](IntervalsLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
