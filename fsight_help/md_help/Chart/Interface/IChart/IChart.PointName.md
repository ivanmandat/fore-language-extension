# IChart.PointName

IChart.PointName
-


# IChart.PointName


## Синтаксис


PointsName(PointNo: Integer): String;


## Параметры


PointNo. Порядковый
 номер точки графика.


## Описание


Свойство PointName возвращает
 имя точки графика. Свойство доступно только для чтения.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub PointName;

	Var

	    Chart : IChart;

	    Name : String;

	Begin

	    Name := Chart.PointsName(0);

	End Sub PointName;


После выполнения примера в переменной Name
 будет храниться имя первой точки графика.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
