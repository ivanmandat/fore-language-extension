# UiChart.OnGetSerieName

UiChart.OnGetSerieName
-


# UiChart.OnGetSerieName


## Синтаксис


Sub OnGetSerieName(Sender:
 Object; Args: [IUiChartSerieNameEventArgs](../../Interface/IUiChartSerieNameEventArgs/IUiChartSerieNameEventArgs.htm));


Begin


//набор операторов


End Sub
 OnGetSerieName;


## Параметры


Sender - параметр, возвращающий
 компонент, сгенерировавший событие.


Args - параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetSerieName позволяет
 определить наименование рядов. Событие наступает при отрисовке графика.


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.


	Sub UiChartOnGetSerieName(Sender: Object; Args: IUiChartSerieNameEventArgs);

	Begin

	    Args.Result := "ряд данных " + Args.SerieIndex.ToString As String;

	End Sub UiChartOnGetSerieName;


После выполнения примера имена рядов на графике будут изменены: «ряд
 данных 0», «ряд данных 1» и т.д.


См.  также:


[UiChart](UiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
