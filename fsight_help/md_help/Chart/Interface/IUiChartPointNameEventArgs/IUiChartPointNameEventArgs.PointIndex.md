# IUiChartPointNameEventArgs.PointIndex

IUiChartPointNameEventArgs.PointIndex
-


# IUiChartPointNameEventArgs.PointIndex


## Синтаксис


PointIndex: Integer;


## Описание


Свойство PointIndex возвращает
 номер точки.


## Пример


	Sub UiChartOnGetPointName(Sender: Object; Args: IUiChartPointNameEventArgs);

	Begin

	    Args.Result := "точка " + Args.PointIndex.ToString;

	End Sub UiChartOnGetPointName;


После выполнения примера имена точек на графике будут изменены: «точка
 0», «точка 1» и т.д.


См. также:


[IUiChartPointNameEventArgs](IUiChartPointNameEventArgs.htm)
 | [UiChart.OnGetPointName](../../Class/UiChart/UiChart.OnGetPointName.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
