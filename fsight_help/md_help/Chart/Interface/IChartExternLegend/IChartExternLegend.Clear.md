# IChartExternLegend.Clear

IChartExternLegend.Clear
-


# IChartExternLegend.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет удаление
 всех диаграмм из списка подключенных к внешней легенде.


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

	    mb:= MetabaseClass.Active;

	    rep:= mb.ItemById("OBJ42859").Edit As IPrxReport;

	    legend:= (rep.ActiveSheet As IprxTable).TabSheet.Objects.Item(1).Extension As IPrxChartLegend;

	    chartlegend:= legend As IChartExternLegend;

	    chartlegend.AxisIcon:= ChartLegendAxisIcon.Axis;

	    items:= chartlegend.InternalItems;

	    items.Swap(0,3);

	   chartlegend.Clear;

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будут удалены все диаграммы из списка подключенных
 к внешней легенде.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
