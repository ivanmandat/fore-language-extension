# IChart.PointsCount

IChart.PointsCount
-


# IChart.PointsCount


## Синтаксис


PointsCount: Integer;


## Описание


Свойство PointsCount возвращает
 количество точек графика.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub PointCount;

	Var

	    Chart : IChart;

	    Count : Integer;

	Begin

	    Count := Chart.PointsCount;

	End Sub PointCount;


После выполнения примера в переменной Count
 будет храниться количество точек графика.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
