# IChartTrendLine.UseAutomaticText

IChartTrendLine.UseAutomaticText
-


# IChartTrendLine.UseAutomaticText


## Синтаксис


UseAutomaticText: Boolean;


## Описание


Свойство UseAutomaticText определяет
 автоматическое наименование линии.


## Комментарии


Если значение данного свойства True,
 то линии тренда присваивается автоматическое наименование. При значении
 False этого не происходит и следует
 определить свойство Text.


По умолчанию свойство имеет значение True.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub TrendLine;

	Var

	    Chart: IChart;

	Begin

	    Chart.Series.Item(0).TrendLines.Item(0).UseAutomaticText := False;

	    Chart.Series.Item(0).TrendLines.Item(0).Text := "линия тренда";

	End Sub TrendLine;


После выполнения примера в легенде диаграммы будет отражено заданное
 наименование линии тренда.


См. также:


[IChartTrendLine](IChartTrendLine.htm) | [IChartTrendLine.Text](IChartTrendLine.Text.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
