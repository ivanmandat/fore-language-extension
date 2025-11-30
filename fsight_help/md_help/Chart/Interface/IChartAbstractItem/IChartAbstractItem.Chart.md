# IChartAbstractItem.Chart

IChartAbstractItem.Chart
-


# IChartAbstractItem.Chart


## Синтаксис


Chart: [IChart](../IChart/IChart.htm);


## Описание


Свойство Chart возвращает объект
 типа IChart, которому принадлежит
 элемент графика.


## Пример


В рассматриваемом примере предполагается, что существует объект Serie типа IChartSerie.


	Sub owner;

	Var

	    Series: IChartSerie;

	Begin

	    Series.Chart.DisplayLegend := True ;

	End Sub owner;


После выполнения примера у диаграммы будет отображена легенда.


См. также:


[IChartAbstractItem](IChartAbstractItem.htm)
 | [IChartSerie](../IChartSerie/IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
