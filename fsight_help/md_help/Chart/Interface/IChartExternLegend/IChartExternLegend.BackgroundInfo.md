# IChartExternLegend.BackgroundInfo

IChartExternLegend.BackgroundInfo
-


# IChartExternLegend.BackgroundInfo


## Синтаксис


BackgroundInfo: [IChartBackgroundInfo](../IChartBackgroundInfo/IChartBackgroundInfo.htm);


## Описание


Свойство BackgroundInfo определяет
 свойства заливки внешней легенды диаграмм.


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

	    chartBI : IChartBackgroundInfo;

	Begin

	    mb:= MetabaseClass.Active;

	    rep:= mb.ItemById("OBJ42859").Edit As IPrxReport;

	    legend:= ((rep.ActiveSheet As IprxTable).TabSheet.Objects.Item(1)) As IPrxChartLegend;

	    chartlegend:= legend As IChartExternLegend;

	    chartlegend.AxisIcon:= ChartLegendAxisIcon.Axis;

	    chartBI:= chartlegend.BackgroundInfo;

	    chartBI.Color:= New GxColor.CreateARGB( 255, 245, 120, 255);

	    items:= chartlegend.InternalItems;

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера поменяется цвет заливки внешней легенды диаграммы.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
