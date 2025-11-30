# IChartTrendLine.PeakIntervals

IChartTrendLine.PeakIntervals
-


# IChartTrendLine.PeakIntervals


## Синтаксис


PeakInterval: Integer;


## Описание


Свойство PeakInterval определяет
 интервал для пиковых значений.


## Комментарии


Свойство применимо только для линии тренда, тип которого «Пиковые значения».


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub TrendLine;

	Var

	    Chart: IChart;

	Begin

	    Chart.Series.Item(0).TrendLines.Item(0).TrendType := 5 As ChartTrendType;//задаем тип тренда «Пиковые значения»

	    Chart.Series.Item(0).TrendLines.Item(0).PeakInterval := 4;

	End Sub TrendLine;


После выполнения примера будет построена линия тренда пикового типа
 с заданным пиковым интервалом.


См. также:


[IChartTrendLine](IChartTrendLine.htm)|[IChartTrendLine.TrendType](IChartTrendLine.TrendType.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
