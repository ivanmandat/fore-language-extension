# IChartExternLegend.RowInterval

IChartExternLegend.RowInterval
-


# IChartExternLegend.RowInterval


## Синтаксис


RowInterval: Double;


## Описание


Свойство RowInterval задаёт расстояние между строками внешней легенды диаграмм.


## Комментарии


Значение задаётся в миллиметрах.


Для использования свойства RowInterval установите свойство [RowIntervalAuto](IChartExternLegend.RowIntervalAuto.htm) в значение False.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта, на листе которого расположена диаграмма и внешняя легенда. К отчету добавлен модуль, из которого с помощью гиперссылки вызывается процедура UserProc. В инспекторе сборок модуля должны быть указаны ссылки на системные сборки Chart, Report, Tab.


			Sub UserProc;

Var

    Chart: IChartExternLegend;

Begin

    Chart := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(1) As IChartExternLegend;

    Chart.RowIntervalAuto := False;

    Chart.RowInterval := 10;

End Sub UserProc;


После выполнения примера расстояние между строками внешней легенды будет 10 миллиметров.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
