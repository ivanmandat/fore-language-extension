# IChartTrendLine.TrendType

IChartTrendLine.TrendType
-


# IChartTrendLine.TrendType


## Синтаксис


TrendType: [ChartTrendType](../../Enums/ChartTrendType.htm);


## Описание


Свойство TrendType определяет
 тип линии тренда на графике.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub TrendLine;

	Var

	    Chart: IChart;

	Begin

	    Chart.Series.Item(0).TrendLines.Item(0).TrendType := 2 As ChartTrendType;

	End Sub TrendLine;


После выполнения примера тип линии тренда изменится на экспоненциальный.


См. также:


[IChartTrendLine](IChartTrendLine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
