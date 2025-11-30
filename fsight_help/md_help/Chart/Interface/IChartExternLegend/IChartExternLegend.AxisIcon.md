# IChartExternLegend.AxisIcon

IChartExternLegend.AxisIcon
-


# IChartExternLegend.AxisIcon


## Синтаксис


AxisIcon: [ChartLegendAxisIcon](../../Enums/ChartLegendAxisIcon.htm);


## Описание


Свойство AxisIcon определяет
 признак отображения в легенде значка, который указывает, по какой оси
 расположен ряд (основной или дополнительной). Флаг применяется только
 при использовании в диаграмме дополнительной оси.


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

	    rep := mb.ItemById("OBJ42859").Edit As IPrxReport;

	    legend := (rep.ActiveSheet As IprxTable).TabSheet.Objects.Item(1).Extension As IPrxChartLegend;

	    chartlegend := legend As IChartExternLegend;

	    chartlegend.AxisIcon:= ChartLegendAxisIcon.None;

	    items := chartlegend.InternalItems;

	    items.Swap(0,3);

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в легенде будут отображаться значки, указывающие
 по какой оси расположен ряд (основной или дополнительной).


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
