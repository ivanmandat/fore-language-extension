# IChartAxisLevelLine.Value

IChartAxisLevelLine.Value
-


# IChartAxisLevelLine.Value


## Синтаксис


Value: Double;


## Описание


Свойство Value определяет значение
 линии уровня.


## Пример


Данный модуль подключается к регламентному отчету, на листе которого
 расположена диаграмма. На диаграмме должна присутствовать линия уровня.


	Sub Custom;

	Var

	    Chart: IChart;

	    LevelLine: IChartAxisLevelLine;

	Begin

	    Chart := PrxReport.ActiveReport.ActiveSheet.Table.Objects.Item(0).Extension As IChart;

	    LevelLine := Chart.AxisY.LevelLines.Item(0);

	    LevelLine.Value := 25.0;

	    PrxReport.ActiveReport.ActiveSheet.Recalc;

	End Sub Custom;


После выполнения примера первая линия уровня на диаграмме будет иметь
 значение «25,0»:


![](IChartAxisLevelLine.Value.gif)


См. также:


[IChartAxisLevelLine](IChartAxisLevelLine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
