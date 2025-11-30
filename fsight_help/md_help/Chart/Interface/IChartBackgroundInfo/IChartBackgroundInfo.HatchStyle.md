# IChartBackgroundInfo.HatchStyle

IChartBackgroundInfo.HatchStyle
-


# IChartBackgroundInfo.HatchStyle


## Синтаксис


HatchStyle: [GxHatchStyle](moddrawing.chm::/Enums/GxHatchStyle.htm);


## Описание


Свойство HatchStyle определяет
 тип штриховки.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.
 Диаграмма должна быть столбикового типа. В случае необходимости, диаграмма
 может быть преобразована к столбиковому типу посредством выполнения команды:
 «Chart.Type := 1 As ChartType»;


	Sub Hatch;

	Var

	    Chart : IChart;

	    Ground : IChartBackgroundInfo;

	Begin

	    Ground := Chart.Series.Item(0).Background;

	    Ground.Type := ChartBackgroundType.Hatch;

	    Ground.Color := New GxColor.CreateARGB(255,255,0,0);

	    Ground.HatchStyle := GxHatchStyle.DashedUpwardDiagonal;

	End Sub Hatch;


После выполнения примера ряд будет заштрихован.


См. также:


[IChartBackgroundInfo](IChartBackgroundInfo.htm)
 | [IChartBackgroundInfo.Type](IChartBackgroundInfo.Type.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
