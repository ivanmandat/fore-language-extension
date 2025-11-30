# IChartAxisLevelLine.Index

IChartAxisLevelLine.Index
-


# IChartAxisLevelLine.Index


## Синтаксис


Index: Integer;


## Описание


Свойство доступно только для чтения.


Свойство Index возвращает индекс
 линии уровня.


## Пример


Данный модуль подключается к регламентному отчету, на листе которого
 расположена диаграмма. На диаграмме должна присутствовать линия уровня.


	Sub Custom;

	Var

	    Chart: IChart;

	    LevelLines: IChartAxisLevelLine;

	    i: Integer;

	Begin

	    Chart := PrxReport.ActiveReport.ActiveSheet.Table.Objects.Item(0).Extension As IChart;

	    LevelLines := Chart.AxisY.LevelLines.Item(0);

	    i := LevelLines.Index;

	End Sub Custom;


После выполнения примера в переменной i
 будет храниться индекс линии уровня.


См. также:


[IChartAxisLevelLines](../IChartAxisLevelLines/IChartAxisLevelLines.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
