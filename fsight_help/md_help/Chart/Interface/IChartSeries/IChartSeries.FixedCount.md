# IChartSeries.FixedCount

IChartSeries.FixedCount
-


# IChartSeries.FixedCount


## Синтаксис


FixedCount: Integer;


## Описание


Свойство FixedCount определяет
 количество фиксированных (статических) рядов, оформление которых будет
 сохраняться.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Fixed;

	Var

	    Chart: IChart;

	Begin

	    Chart.Series.FixedCount := 1;

	End Sub Fixed;


После выполнения примера только у первого ряда диаграммы будут сохраняться
 изменения в оформлении.


См. также:


[IChartSeries](IChartSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
