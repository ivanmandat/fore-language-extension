# IChartAxis.TextAngle

IChartAxis.TextAngle
-


# IChartAxis.TextAngle


## Синтаксис


TextAngle: Double;


## Описание


Свойство TextAngle определяет
 угол поворота надписи.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


	Sub Angle;

	Var

	    ChartAxis : IChartAxis;

	Begin

	    ChartAxis.TextAngle := 5;

	End Sub Angle;


После выполнения примера текст по оси будет смещен на 5 градусов против
 часовой стрелки.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
