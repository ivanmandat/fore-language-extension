# IChartTrendLine.Text

IChartTrendLine.Text
-


# IChartTrendLine.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет пользовательское
 наименование линии тренда.


## Комментарии


Для определения пользовательского наименования необходимо свойство UseAutomaticText установить в False.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub TrendLine;

	Var

	    Chart: IChart;

	Begin

	    Chart.Series.Item(0).TrendLines.Item(0).Text := "линия тренда";

	End Sub TrendLine;


После выполнения примера в легенде диаграммы будет отражено заданное
 наименование линии тренда.


См. также:


[IChartTrendLine](IChartTrendLine.htm) | [IChartTrendLine.UseAutomaticText](IChartTrendLine.UseAutomaticText.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
