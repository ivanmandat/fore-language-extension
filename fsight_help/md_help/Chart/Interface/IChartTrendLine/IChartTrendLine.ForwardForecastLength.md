# IChartTrendLine.ForwardForecastLength

IChartTrendLine.ForwardForecastLength
-


# IChartTrendLine.ForwardForecastLength


## Синтаксис


ForwardForecastLength: Double;


## Описание


Свойство ForwardForecastLength
 определяет длину прогноза значений ряда вперед.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub TrendLine;

	Var

	    Chart: IChart;

	Begin

	    Chart.Series.Item(0).TrendLines.Item(0).ForwardForecastLength := 3;

	End Sub TrendLine;


После выполнения примера линия тренда заданного ряда будет продлена
 на три точки вперед.


См. также:


[IChartTrendLine](IChartTrendLine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
