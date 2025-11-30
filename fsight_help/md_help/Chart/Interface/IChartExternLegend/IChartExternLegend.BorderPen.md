# IChartExternLegend.BorderPen

IChartExternLegend.BorderPen
-


# IChartExternLegend.BorderPen


## Синтаксис


BorderPen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство BorderPen определяет
 параметры границ внешней легенды.


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

	    chartPen: IGxPen;

	Begin

	    mb:= MetabaseClass.Active;

	    rep := mb.ItemById("OBJ42859").Edit As IPrxReport;

	    legend:= (rep.ActiveSheet As IprxTable).TabSheet.Objects.Item(1).Extension As IPrxChartLegend;

	    chartlegend:= legend As IChartExternLegend;

	    chartlegend.AxisIcon:= ChartLegendAxisIcon.Axis;

	    chartPen := New GxPen.CreateSolid(GxColor.FromName("Green"), 5);

	    chartlegend.BorderPen := chartPen;

	    items := chartlegend.InternalItems;

	    items.Swap(0,3);

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера границы внешней легенды будет иметь толщину
 5 миллиметров и зеленый цвет.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
