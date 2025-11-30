# IChartSerie.Chart

IChartSerie.Chart
-


# IChartSerie.Chart


## Синтаксис


Chart: [IChart](../IChart/IChart.htm);


## Описание


Свойство Chart возвращает объект
 типа IChart, которому принадлежит
 данный ряд.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub owner;

	Var

	    Chart: IChart;

	    Serie: IChartSerie;

	Begin

	    Serie := Chart.Series.Item(0);

	    Series.Chart.DisplayLegend := True ;

	End Sub owner;


После выполнения примера будет отображена легенда.


См. также:


[IChartSerie](IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
