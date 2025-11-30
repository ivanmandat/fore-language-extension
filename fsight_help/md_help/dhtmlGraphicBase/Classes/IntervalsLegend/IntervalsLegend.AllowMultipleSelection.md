# IntervalsLegend.AllowMultipleSelection

IntervalsLegend.AllowMultipleSelection
-


# IntervalsLegend.AllowMultipleSelection


## Синтаксис


AllowMultipleSelection: Boolean;


## Описание


Свойство AllowMultipleSelection
 определяет возможность множественной отметки элементов легенды.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 При выборе элемента легенды сохраняется выделение выбранных
	 ранее элементов;


	- False. Может
	 быть выделен только один элемент.


Значение свойства устанавливается из JSON и с помощью метода setAllowMultipleSelection,
 а возвращается с помощью метода getAllowMultipleSelection.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с
 наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»).


// Получим легенду интервалов значений
var legend = bubbleChart.getLegend();
// Установим цвет и прозрачность кисти для подсветки элементов легенды
var brush = legend.getHighlightBrush();
brush.setColor("#FFE500");
brush.setOpacity(0.2);
legend.setHighlightBrush(brush);
// Установим цвет подсвеченных элементов легенды
legend.setHighlightItemColor("LightSeaGreen");
// Установим режим отображения подсветки по щелчку
legend.setHoverMode(PP.HoverMode.Click);
// Разрешим подсветку элементов легенды
legend.setDoHighlight(true);
// Запретим множественную отметку элементов легенды
legend.setAllowMultipleSelection(false);
// Обновим диаграмму
bubbleChart.refresh();
В результате выполнения примера были изменены следующие свойства легенды:
 цвет и прозрачность кисти подсветки элементов легенды, цвет подсвеченных
 элементов, был установлен режим отображения подсветки по щелчку, разрешена
 подсветка и запрещена множественная отметка элементов легенды.


См. также:


[IntervalsLegend](IntervalsLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
