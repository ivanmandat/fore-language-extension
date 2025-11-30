# DataVisualizer.AreaSelectionAction

DataVisualizer.AreaSelectionAction
-


# DataVisualizer.AreaSelectionAction


## Синтаксис


AreaSelectionAction : [PP.Ui.AreaSelectionAction](../../Enums/AreaSelectionAction.htm);


## Описание


Свойство AreaSelectionAction
 определяет действие при выделении области в визуализаторе.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setAreaSelectionAction,
 а возвращается - с помощью метода getAreaSelectionAction.


Значение по умолчанию зависит от типа визуализатора.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»).


// Определим действие при выделении - выделение области
action = PP.Ui.AreaSelectionAction.Selection;
// Зададим действие при выделении
bubbleChart.setAreaSelectionAction(action);

В результате выполнения примера при выделении области, вместо выделения
 объектов будет выделена непосредственно область визуализатора.


См. также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
