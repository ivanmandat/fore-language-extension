# IChartSource.GetChart

IChartSource.GetChart
-


# IChartSource.GetChart


## Синтаксис


GetChart: [IChart](../IChart/IChart.htm);


## Описание


Метод GetChart получает диаграмму.


## Пример


В рассматриваемом примере предполагается существование объекта Cb типа ChartBox.


	Sub UserProc;

	Var

	    Cb : ChartBox;

	    CS : IChartSource;

	    Chart : IChart;

	Begin

	    CS := Cb.Source;

	    Chart := CS.GetChart As IChart;

	    Chart.Type := ChartType.Lines;

	    Chart.Orientation := ChartOrientation.UpToDown;

	End Sub UserProc;


После выполнения примера будут изменены параметры диаграммы.


См. также:


[IChartSource](IChartSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
