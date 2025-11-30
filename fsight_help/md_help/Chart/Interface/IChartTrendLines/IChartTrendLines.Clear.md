# IChartTrendLines.Clear

IChartTrendLines.Clear
-


# IChartTrendLines.Clear


## Синтаксис


Clear;


## Описание


Метод Clear удаляет все линии трендов на диаграмме.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


			Sub TrendLine;
Var

    Chart: IChart;
Begin

    Chart.Series.Item(0).TrendLines.Clear;
End Sub TrendLine;


После выполнения примера все линии тренда будут удалены.


См. также:


[IChartTrendLines](IChartTrendLines.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
