# IChartSeries.Move

IChartSeries.Move
-


# IChartSeries.Move


## Синтаксис


Move(IndexFrom: Integer; IndexTo: Integer);


## Параметры


IndexFrom - индекс позиции
 перемещаемого ряда;


IndexTo - индекс позиции, в
 которую необходимо поместить ряд.


## Описание


Метод Move изменяет индекс ряда,
 то есть происходит изменение порядка рядов в списке.


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.


	Sub UserProc;

	Var

	    Chart: IChart;

	Begin

	    Chart.Series.Move(0,1);

	End Sub UserProc;


После выполнения примера будет изменено положение ряда на диаграмме.


См. также:


[IChartSeries](IChartSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
