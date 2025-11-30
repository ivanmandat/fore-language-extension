# IChartAxis.StepDistance

IChartAxis.StepDistance
-


# IChartAxis.StepDistance


## Синтаксис


StepDistance: Double;


## Описание


Свойство StepDistance позволяет
 задать минимальное расстояние между значениями интервала в миллиметрах.
 При задании минимального расстояния между значениями интервала необходимо
 задать соответствующее значение свойству StepMode.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


	Sub StepMode;

	Var

	    ChartAxis : IChartAxis;

	Begin

	    ChartAxis.StepMode := 4 As ChartAxisStepMode;

	    ChartAxis.StepDistance := 10 ;

	End Sub StepMode;


После выполнения примера на оси расстояние между значениями интервала
 будет 10 мм.


См. также:


[IChartAxis](IChartAxis.htm) | [IChartAxis.StepMode](IChartAxis.StepMode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
