# IChartSeries.Count

IChartSeries.Count
-


# IChartSeries.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 рядов диаграммы.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Count;

	Var

	    Chart: IChart;

	    Count: Integer;

	Begin

	    Count := Chart.Series.Count;

	End Sub Count;


После выполнения примера в переменной «Count» будет храниться количество
 рядов диаграммы.


См. также:


[IChartSeries](IChartSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
