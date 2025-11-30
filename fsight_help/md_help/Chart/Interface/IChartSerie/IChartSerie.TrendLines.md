# IChartSerie.TrendLines

IChartSerie.TrendLines
-


# IChartSerie.TrendLines


## Синтаксис


TrendLines: [IChartTrendLines](../IChartTrendLines/IChartTrendLines.htm);


## Описание


Свойство TrendLines определяет
 параметры линии тренда.


## Пример


В рассматриваемом примере предполагается, что существует объект Serie типа IChartSerie.


	Sub TrendLine;

	Var

	    Serie: IChartSerie;

	    Trend: IChartTrendLine;

	Begin

	    Trend := Serie.TrendLines.Add(2 As ChartTrendType);

	End Sub TrendLine;


После выполнения примера у ряда данных появится линия тренда экспоненциального
 типа.


См. также:


[IChartSerie](IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
