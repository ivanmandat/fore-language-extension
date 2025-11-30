# UiChart.OnGetRelativeSerieEnabled

UiChart.OnGetRelativeSerieEnabled
-


# UiChart.OnGetRelativeSerieEnabled


## Синтаксис


Sub OnGetRelativeSerieEnabled(Sender:
 Object; Args: [IUiChartRelativeSerieEnabledEventArgs](../../Interface/UiChartRelativeSerieEnabledEventArgs/IUiChartRelativeSerieEnabledEventArgs.htm));

Begin

    //набор операторов

End Sub OnGetRelativeSerieEnabled;


## Параметры


Sender - параметр, возвращающий
 компонент, сгенерировавший событие;


Args - параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetRelativeSerieEnabled
 позволяет определить, будут ли использоваться относительные ряды.


## Комментарии


Относительные ряды - группировка рядов для объединения настроек.


Для определения индекса родительского ряда используйте [UiChart.OnGetParentSerieIndex](UiChart.OnGetParentSerieIndex.htm).


## Пример


Использование события приведено в примере для [IChart.DisplayMode](../../Interface/IChart/IChart.DisplayMode.htm).


См. также:


[UiChart](UiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
