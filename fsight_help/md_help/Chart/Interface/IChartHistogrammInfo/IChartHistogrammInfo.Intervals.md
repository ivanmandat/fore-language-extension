# IChartHistogrammInfo.Intervals

IChartHistogrammInfo.Intervals
-


# IChartHistogrammInfo.Intervals


## Синтаксис


Intervals: Integer;


## Описание


Свойство Intervals определяет
 количество интервалов гистограммы. Для определения количества интервалов
 необходимо [AutoIntervals](IChartHistogrammInfo.AutoIntervals.htm)
 установить в False.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub UserProc;

	Var

	    Chart : IChart;

	Begin

	    Chart.DisplayHistogramm := True;

	    Chart.HistogrammInfo.AutoIntervals := False;

	    Chart.HistogrammInfo.Intervals := 5 As Integer;

	End Sub UserProc;


После выполнения примера на гистограмме будет представлено 5 интервалов.


См. также:


[IChartHistogrammInfo](IChartHistogrammInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
