# IChartBackgroundInfo.ImageDrawStyle

IChartBackgroundInfo.ImageDrawStyle
-


# IChartBackgroundInfo.ImageDrawStyle


## Синтаксис


ImageDrawStyle: [ChartImageDrawStyle](../../Enums/ChartImageDrawStyle.htm);


## Описание


Свойство ImageDrawStyle определяет
 положение рисунка в заливаемой области.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.
 Тип заливки должен быть опеределен - «Picture».


	Sub Image;

	Var

	    Chart: IChart;

	    d : IGxImage;

	Begin

	    Chart.ChartArea.BackgroundInfo.Type := ChartBackGroundType.Picture;

	    d := New GxImage.CreateFromFile("c:\1.jpg");

	    Chart.ChartArea.BackgroundInfo.Image := d;

	    Chart.ChartArea.BackgroundInfo.ImageDrawStyle := 6 As ChartImageDrawStyle;

	End Sub Image;


После выполнения примера рисунок будет растянут на всю область диаграммы.


См. также:


[IChartBackgroundInfo](IChartBackgroundInfo.htm)
 | [IChartBackgroundInfo.Type](IChartBackgroundInfo.Type.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
