# IChartBackgroundInfo.GradientAngle

IChartBackgroundInfo.GradientAngle
-


# IChartBackgroundInfo.GradientAngle


## Синтаксис


GradientAngle: Double;


## Описание


Свойство GradientAngle определяет
 угол градиента.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Angle;

	Var

	    Chart : IChart;

	    Ground : IChartBackgroundInfo;

	Begin

	    Ground := Chart.ChartArea.BackgroundInfo;

	    Ground.Type := ChartBackGroundType.Gradient;

	    Ground.Color := GxColor.FromName("Blue");

	    Ground.GradientColor := GxColor.FromName("Red");

	    Ground.GradientAngle := 30;

	End Sub Angle;


После выполнения примера область диаграммы будет залита градиентом с
 углом 30 градусов и красным цветом градиента.


См. также:


[IChartBackgroundInfo](IChartBackgroundInfo.htm)
 | [IChartBackgroundInfo.Type](IChartBackgroundInfo.Type.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
