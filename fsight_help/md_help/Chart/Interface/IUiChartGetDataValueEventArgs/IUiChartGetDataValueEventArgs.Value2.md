# IUiChartGetDataValueEventArgs.Value2

IUiChartGetDataValueEventArgs.Value2
-


# IUiChartGetDataValueEventArgs.Value2


## Синтаксис


Value2: Double;


## Описание


Свойство Value2 используется
 для задания исходных данных по оси OX, если тип диаграммы точечный.


## Пример


В рассматриваемом примере тип диаграммы должен быть точечный.


	Sub UiChartOnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

	Begin

	    Args.Result := True;

	    Args.Value := Math.Rand;

	    Args.Value2 := Args.PointIndex + 2;

	End Sub UiChartOnGetDataValue;


После выполнения примера будет построен график из заданного количества
 рядов и точек.


См. также:


[IUiChartGetDataValueEventArgs](IUiChartGetDataValueEventArgs_.htm)
 | [UiChart.OnGetDataValue](../../Class/UiChart/UiChart.OnGetDataValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
