# IChartAxisLevelLine.DrawUnderSeries

IChartAxisLevelLine.DrawUnderSeries
-


# IChartAxisLevelLine.DrawUnderSeries


## Синтаксис


DrawUnderSeries: Boolean;


## Описание


Свойство DrawUnderSeries определяет
 порядок расположения линии уровня. Если значение данного свойства True, то линия уровня располагается
 под рядами данных, если False
 - линия уровня располагается поверх рядов данных.


Значение по умолчанию - False.


## Пример


Данный модуль подключается к регламентному отчету, на листе которого
 расположена диаграмма. На диаграмме должна присутствовать линия уровня.


	Sub Custom;

	Var

	    Chart: IChart;

	Begin

	    Chart := PrxReport.ActiveReport.ActiveSheet.Table.Objects.Item(0).Extension As IChart;

	    Chart.AxisY.LevelLines.Item(0).DrawUnderSeries := True;

	    PrxReport.ActiveReport.ActiveSheet.Recalc;

	End Sub Custom;


После выполнения примера линия уровня на диаграмме будет расположена
 под рядами данных.


Ниже приведен пример уровня расположенного поверх рядов данных (сверху)
 и уровня расположенного под рядами данных (снизу):


![](../IChartAxis/IChartAxis.LevelLines.gif)


См. также:


[IChartAxisLevelLine](IChartAxisLevelLine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
