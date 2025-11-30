# IntervalsLegend.CellSpacing

IntervalsLegend.CellSpacing
-


**


# IntervalsLegend.CellSpacing


## Синтаксис


CellSpacing: Number;


## Описание


Свойство CellSpacing определяет
 отступы между элементами легенды.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setCellSpacing,
 а возвращается с помощью метода getCellSpacing.**


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Установим новые
 значения для следующих свойств легенды: количество столбцов, отступы между
 элементами, форма маркеров, режим отображения легенды. Установим сортировку
 значений элементов легенды по убыванию и отобразим маркеры справа от текста
 элементов легенды:


// Получим легенду интервалов
var legend = bubbleChart.getLegends()[0];
// Установим количество столбцов легенды
legend.setColumnsCount(2);
// Установим отступы между элементами легенды
legend.setCellSpacing(20);
// Установим сортировку интервалов по убыванию
legend.setDescending(true);
// Установим новую форму маркеров легенды
legend.setMarker(PP.Ui.LegendMarkerShape.Rectangle);
// Установим позицию маркеров справа от текста
legend.setMarkersAtRight(true);
// Установим режим отображения легенды "между"
legend.setMode(PP.Ui.LegendMode.BetweenOnly);
// Обновим диаграмму
bubbleChart.refresh();
В результате выполнения примера были изменены следующие свойства легенды:
 количество столбцов, отступы между элементами, форма маркеров, режим отображения
 легенды. Была установлена сортировка значений элементов легенды по убыванию,
 маркеры легенды были отображены справа от текста элементов легенды:


![](IntervalsLegend_CellSpacing.png)


См. также:


[IntervalsLegend](IntervalsLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
