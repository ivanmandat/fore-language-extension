# IChartBackgroundInfo.Image

IChartBackgroundInfo.Image
-


# IChartBackgroundInfo.Image


## Синтаксис


Image: [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm);


## Описание


Свойство Image позволяет определять
 рисунок в качестве заливки.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Image;

	Var

	    Chart : IChar;

	    d : IGxImage;

	Begin

	    Chart.ChartArea.BackgroundInfo.Type := ChartBackGroundType.Picture;

	    d := New GxImage.CreateFromFile("c:\1.jpg");

	    Chart.ChartArea.BackgroundInfo.Image := d;

	End Sub Image;


После выполнения примера в области диаграммы будет расположен указанный
 рисунок.


См. также:


[IChartBackgroundInfo](IChartBackgroundInfo.htm)
 | [IChartBackgroundInfo.Type](IChartBackgroundInfo.Type.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
