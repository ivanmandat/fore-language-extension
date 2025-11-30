# IUiChartSerieNameEventArgs.Result

IUiChartSerieNameEventArgs.Result
-


# IUiChartSerieNameEventArgs.Result


## Синтаксис


Result: String;


## Описание


Свойство Result позволяет определить
 наименование рядов на графике.


## Пример


	Sub UiChartOnGetSerieName(Sender: Object; Args: IUiChartSerieNameEventArgs);

	Begin

	    Args.Result := "ряд данных " + Args.SerieIndex.ToString;

	End Sub UiChartOnGetSerieName;


После выполнения примера имена рядов будут изменены: «ряд данных 0»,
 «ряд данных 1» и т.д.


См. также:


[IUiChartSerieNameEventArgs](IUiChartSerieNameEventArgs.htm)
 | [UiChart.OnGetSerieName](../../Class/UiChart/UiChart.OnGetSerieName.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
