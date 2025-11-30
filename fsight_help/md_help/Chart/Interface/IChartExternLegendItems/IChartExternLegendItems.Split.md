# IChartExternLegendItems.Split

IChartExternLegendItems.Split
-


# IChartExternLegendItems.Split


## Синтаксис


Split(Index: Integer);


## Параметры


 Index. Индекс элемента
 внешней легенды.


## Описание


Метод Split позволяет разделить
 элемент внешней легенды диаграмм, индекс которого передается в качестве
 входного параметра Index.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Report». В отчете
 присутствуют объекты: диаграмма и внешняя легенда.


	Sub UserProc;

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

	    items.Split(3);

	End Sub UserProc;


После выполнения примера четвертый элемент легенды будет разделен на
 составляющие.


См. также:


[IChartExternLegendItems](IChartExternLegendItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
