# DataVisualizer.EnableSelection

DataVisualizer.EnableSelection
-


**


# DataVisualizer.EnableSelection


## Синтаксис


EnableSelection: Boolean;


## Описание


Свойство EnableSelection**
 управляет доступностью выделения элементов в визуализаторе.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableSelection,
 а возвращается с помощью метода getEnableSelection.


Свойство содержит значение true
 (значение по умолчанию) - если выделение элементов доступно, и false
 - если недоступно.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Выделим элемент
 и сделаем выделение элементов недоступным:


// Выделим элемент с идентификатором Item2
bubbleChart.setItemSelection("Item2", true);
// Запретим выделение элементов
bubbleChart.setEnableSelection(false);

В результате выполнения примера был выделен элемент с идентификатором
 «Item2», после чего было запрещено выделение элементов визуализатора.


См. также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
