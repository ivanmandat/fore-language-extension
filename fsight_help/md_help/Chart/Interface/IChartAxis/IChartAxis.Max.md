# IChartAxis.Max

IChartAxis.Max
-


# IChartAxis.Max


## Синтаксис


Max: Double;


## Описание


Свойство Max определяет максимум
 на оси.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


Для оси диаграммы не должен вычисляться автоматический максимум.


При необходимости, вычисление автоматического максимума можно отменить,
 присвоив свойству [IChartAxis.AutoMax](IChartAxis.AutoMax.htm)
 значение False.


	Sub Max;

	Var

	    ChartAxis : IChartAxis;

	Begin

	    ChartAxis.AutoMax := False;

	    ChartAxis.Max := 540;

	End Sub Max;


После выполнения примера максимальное число на оси будет 540.


См. также:


[IChartAxis](IChartAxis.htm) | [IChartAxis.AutoMax](IChartAxis.AutoMax.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
