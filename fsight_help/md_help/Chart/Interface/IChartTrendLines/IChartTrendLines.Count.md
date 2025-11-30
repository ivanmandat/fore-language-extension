# IChartTrendLines.Count

IChartTrendLines.Count
-


# IChartTrendLines.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество линий трендов.


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.


			Sub TrendLine;
Var

    Chart: IChart;

    Count: Integer;

    Trends: IChartTrendLines;
Begin

    Trends := Chart.Series.Item(0).TrendLines;

    Count := Trends.Count;
End Sub TrendLine;


После выполнения примера в переменной «Count» будет храниться количество линий тренда.


См. также:


[IChartTrendLines](IChartTrendLines.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
