# IChartBackgroundInfo.GradientColor

IChartBackgroundInfo.GradientColor
-


# IChartBackgroundInfo.GradientColor


## Синтаксис


GradientColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство GradientColor позволяет
 определять цвет градиента.


## Комментарии


Работа с доступными цветами осуществляется посредством интерфейса IGxColor.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Gradient;

	Var

	    Chart : IChart;

	    Ground : IChartBackgroundInfo;

	Begin

	    Ground := Chart.ChartArea.BackgroundInfo;

	    Ground.Type := ChartBackGroundType.Gradient;

	    Ground.Color := GxColor.FromName("Blue");

	    Ground.GradientColor := GxColor.FromName("Red");

	End Sub Gradient;


После выполнения примера область диаграммы будет залита градиентом,
 где синий цвет - это цвет заливки, а красный - цвет градиента.


См. также:


[IChartBackgroundInfo](IChartBackgroundInfo.htm)
 | [IChartBackgroundInfo.Type](IChartBackgroundInfo.Type.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
