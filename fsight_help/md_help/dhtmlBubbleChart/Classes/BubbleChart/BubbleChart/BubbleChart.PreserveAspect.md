# BubbleChart.PreserveAspect

BubbleChart.PreserveAspect
-


# BubbleChart.PreserveAspect


## Синтаксис


PreserveAspect: Boolean;


## Описание


Свойство PreserveAspect определяет
 режим сохранения соотношения сторон, при масштабировании визуализатора.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setPreserveAspect,
 а возвращается с помощью метода getPreserveAspect.


Значение по умолчанию true -
 сохранять соотношение сторон.


Свойство актуально, если для визуализатора настроено [масштабирование](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.AreaSelectionAction.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)»).


// Зададим режим масштабирования
action = PP.Ui.AreaSelectionAction.Scale;
bubbleChart.setAreaSelectionAction(action);
// Выключим сохранение соотношения сторон
bubbleChart.setPreserveAspect(false);

В результате выполнения примера для визуализатора было настроено масштабирование,
 без сохранения соотношения сторон.


См. также:


[BubbleChart](BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
