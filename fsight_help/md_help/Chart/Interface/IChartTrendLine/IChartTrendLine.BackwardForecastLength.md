# IChartTrendLine.BackwardForecastLength

IChartTrendLine.BackwardForecastLength
-


# IChartTrendLine.BackwardForecastLength


## Синтаксис


BackwardForecastLength: Double;


## Описание


Свойство BackwardForecastLength
 определяет длину прогноза значений ряда назад.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub TrendLine;

	Var

	    Chart: IChart;

	Begin

	    Chart.Series.Item(0).TrendLines.Item(0).BackwardForecastLength := 3;

	End Sub TrendLine;


После выполнения примера линия тренда заданного ряда будет продлена
 на три точки назад.


См. также:


[IChartTrendLine](IChartTrendLine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
