# IChartTrendLines.Remove

IChartTrendLines.Remove
-


# IChartTrendLines.Remove


## Синтаксис


Remove (Index: Integer);


## Параметры


Index. Индекс линии тренда.


## Описание


Метод Remove удаляет линию тренда по заданному индексу.


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.


			Sub TrendLine;
Var

    Chart: IChart;
Begin

    Chart.Series.Item(0).TrendLines.Remove(0);
End Sub TrendLine;


После выполнения примера указанная линия тренда будет удалена.


См. также:


[IChartTrendLines](IChartTrendLines.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
