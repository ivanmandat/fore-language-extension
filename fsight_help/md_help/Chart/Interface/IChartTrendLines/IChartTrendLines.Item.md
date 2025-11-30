# IChartTrendLines.Item

IChartTrendLines.Item
-


# IChartTrendLines.Item


## Синтаксис


Item(Index: Integer): [IChartTrendLine](../IChartTrendLine/IChartTrendLine.htm);


## Параметры


Index. Номер линии тренда. Нумерация начинается с нуля.


## Описание


Свойство Item позволяет определять настройки конкретной линии тренда.


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.


			Sub TrendLine;
Var

    Chart: IChart;

    Trend: IChartTrendLine;
Begin

    Trend := Chart.Series.Item(0).TrendLines.Item(0);

    Trend.TrendType := 1 As ChartTrendType;
End Sub TrendLine;


После выполнения примера тип линии тренда будет изменен на логарифмический.


См. также:


[IChartTrendLines](IChartTrendLines.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
