# IChartAxis.InterGridDistance

IChartAxis.InterGridDistance
-


# IChartAxis.InterGridDistance


## Синтаксис


InterGridDistance: Double;


## Описание


Свойство InterGridDistance определяет
 минимальное межсеточное расстояние.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


	Sub Grid;

	Var

	    ChartAxis : IChartAxis;

	Begin

	    ChartAxis.InterGridDistance := 5;

	End Sub Grid;


После выполнения примера минимальное межсеточное расстояние будет 5
 мм.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
