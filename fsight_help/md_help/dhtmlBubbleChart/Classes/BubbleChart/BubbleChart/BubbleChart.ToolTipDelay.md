# BubbleChart.ToolTipDelay

BubbleChart.ToolTipDelay
-


# BubbleChart.ToolTipDelay


## Синтаксис


ToolTipDelay: Integer;


## Описание


Свойство ToolTipDelay определяет
 задержку перед отображением всплывающей подсказки.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setToolTipDelay,
 а возвращается с помощью метода getToolTipDelay.


Свойство задается в милисекундах.


По умолчанию содержит значение 500.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»). Установим задержку перед отображением
 всплывающей подсказки:


// Установим задержку перед отображением всплывающей подсказки
bubbleChart.setToolTipDelay(1500);
В результате выполнения примера была установлена задержка перед отображением
 всплывающей подсказки.


См. также:


[BubbleChart](BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
