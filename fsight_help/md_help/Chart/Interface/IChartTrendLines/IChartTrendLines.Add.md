# IChartTrendLines.Add

IChartTrendLines.Add
-


# IChartTrendLines.Add


## Синтаксис


Add(TrendType: [ChartTrendType](../../Enums/ChartTrendType.htm)): [IChartTrendLine](../IChartTrendLine/IChartTrendLine.htm);


## Параметры


TrendType. Тип создаваемого тренда.


## Описание


Метод Add добавляет линию тренда заданного типа для ряда данных.


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.


			Sub TrendLine;
Var

    Chart: IChart;

    Trend: IChartTrendLine;
Begin

    Trend := Chart.Series.Item(0).TrendLines.Add(2 As ChartTrendType);

    Trend.ForwardForecastLength := 3 As Integer;

    Trend.UseAutomaticText := False;

    Trend.Text := "линия тренда 0";
End Sub TrendLine;


После выполнения примера у ряда данных появится линия тренда экспоненциального типа.


См. также:


[IChartTrendLines](IChartTrendLines.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
