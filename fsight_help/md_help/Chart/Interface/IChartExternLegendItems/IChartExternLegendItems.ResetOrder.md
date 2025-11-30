# IChartExternLegendItems.ResetOrder

IChartExternLegendItems.ResetOrder
-


# IChartExternLegendItems.ResetOrder


## Синтаксис


ResetOrder;


## Описание


Метод ResetOrder позволяет установить порядок расположения элементов легенды, установленный по умолчанию.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с идентификатором «Report». В отчете присутствуют объекты: диаграмма и внешняя легенда.


			Sub Main;

Var

    mb: IMetabase;

    rep: IPrxReport;

    legend: IPrxChartLegend;

    chartlegend: IChartExternLegend;

    items: IChartExternLegendItems;

Begin

    mb := MetabaseClass.Active;

    rep := mb.ItemById("OBJ12399").Open(Null) As IPrxReport;

    legend := ((rep.ActiveSheet As IprxTable).TabSheet.Objects.Item(1)) As IPrxChartLegend;

    chartlegend := legend As IChartExternLegend;

    items := chartlegend.InternalItems;

    items.ResetOrder;

End Sub Main;


После выполнения примера все элементы легенды будут расположены в порядке загрузки.


См. также:


[IChartExternLegendItems](IChartExternLegendItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
