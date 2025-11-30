# IChartExternLegend.ElementHorizontalAlignment

IChartExternLegend.ElementHorizontalAlignment
-


# IChartExternLegend.ElementHorizontalAlignment


## Синтаксис


ElementHorizontalAlignment: [ChartLegendElementHorizontalAlignment](../../Enums/ChartLegendElementHorizontalAlignment.htm);


## Описание


Свойство ElementHorizontalAlignment определяет тип горизонтального выравнивания элементов внешней легенды.


## Комментарии


По умолчанию используется выравнивание по левому краю ([ChartLegendElementHorizontalAlignment. Left](../../Enums/ChartLegendElementHorizontalAlignment.htm)).


## Пример


Для выполнения примера предполагается наличие регламентного отчёта, на листе которого расположена диаграмма и внешняя легенда. К отчету добавлен модуль, из которого с помощью гиперссылки вызывается процедура UserProc. В инспекторе сборок модуля должны быть указаны ссылки на системные сборки Chart, Report, Tab.


			Sub UserProc;

 Var

    ChartExLegend: IChartExternLegend;

 Begin

    ChartExLegend := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(1) As IChartExternLegend;

    ChartExLegend.IsMultiline := True;

    ChartExLegend.ElementHorizontalAlignment := ChartLegendElementHorizontalAlignment.Left;

 End Sub UserProc;


После выполнения примера элементы внешней легенды будут выравнены по левому краю, длинные наименования элементов будут расположены в несколько строк.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
