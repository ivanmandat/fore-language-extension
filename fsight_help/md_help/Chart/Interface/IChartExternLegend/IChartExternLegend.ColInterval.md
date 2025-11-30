# IChartExternLegend.ColInterval

IChartExternLegend.ColInterval
-


# IChartExternLegend.ColInterval


## Синтаксис


ColInterval: Double;


## Описание


Свойство ColInterval задаёт расстояние между столбцами легенды диаграмм.


## Комментарии


Значение задаётся в миллиметрах.


Для использования свойства ColInterval установите свойство [ColIntervalAuto](IChartExternLegend.ColIntervalAuto.htm) в значение False.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта, на листе которого расположена диаграмма и внешняя легенда. К отчету добавлен модуль, из которого с помощью гиперссылки вызывается процедура UserProc. В инспекторе сборок модуля должны быть указаны ссылки на системные сборки Chart, Report, Tab.


			Sub UserProc;

Var

    Chart: IChartExternLegend;

Begin

    Chart := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(1) As IChartExternLegend;

    Chart.ColIntervalAuto := False;

    Chart.ColInterval := 10;

End Sub UserProc;


После выполнения примера расстояние между столбцами внешней легенды изменится на 10 миллиметров.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
