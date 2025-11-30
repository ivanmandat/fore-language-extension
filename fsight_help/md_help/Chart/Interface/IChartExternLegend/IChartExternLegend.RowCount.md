# IChartExternLegend.RowCount

IChartExternLegend.RowCount
-


# IChartExternLegend.RowCount


## Синтаксис


RowCount: Integer;


## Описание


Свойство RowCount задаёт количество строк внешней легенды диаграмм.


## Комментарии


Для использования свойства RowCount необходимо для свойства [ItemPlacement](IChartExternLegend.ItemPlacement.htm) установить в значение [ChartExtLegPlacement.CustomRows](../../Enums/ChartExtLegPlacement.htm).


При любом размере легенды будет использоваться заданное количество строк. При этом количество столбцов будет вычислено автоматически в зависимости от количества элементов внешней легенды и ее размеров.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта, на листе которого расположена диаграмма и внешняя легенда. К отчету добавлен модуль, из которого с помощью гиперссылки вызывается процедура UserProc. В инспекторе сборок модуля должны быть указаны ссылки на системные сборки Chart, Report, Tab.


			Sub UserProc;

Var

    ChartExLegend: IChartExternLegend;

Begin

    ChartExLegend := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(1) As IChartExternLegend;

    ChartExLegend.ItemPlacement := ChartExtLegPlacement.CustomRows;

    ChartExLegend.RowCount := 5;

End Sub UserProc;


После выполнения примера для отображения элементов во внешней легенде будет использовано 5 строк.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
