# IChartSerieBase.PieDistanceCoef

IChartSerieBase.PieDistanceCoef
-


# IChartSerieBase.PieDistanceCoef


## Синтаксис


PieDistanceCoef: Double;


## Описание


Свойство PieDistanceCoef определяет
 расстояние от центра круговой диаграммы до крайней дольки ряда.


## Комментарии


Расстояние выражается в долях к диаметру круговой диаграммы.


## Пример


В рассматриваемом примере предполагается, что существует объект Serie типа IChartSerie.


	Sub Pie;

	Var

	    Serie : IChartSerie;

	Begin

	    Serie.PieDistanceCoef := 0.2;

	End Sub Pie;


После выполнения примера крайняя долька ряда диаграммы будет отодвинута
 от остальных на заданное расстояние.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
