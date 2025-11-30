# IChartExternLegend.Font

IChartExternLegend.Font
-


# IChartExternLegend.Font


## Синтаксис


Font: [IGxFont](ModDrawing.chm::/Interface/IGxFont/IGxFont.htm);


## Описание


Свойство Font определяет шрифт
 текста внешней легенды диаграмм.


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

	    chartF: IGxFont;

	Begin

	    mb:= MetabaseClass.Active;

	    rep := mb.ItemById("OBJ42859").Edit As IPrxReport;

	    legend:= ((rep.ActiveSheet As IprxTable).TabSheet.Objects.Item(1)) As IPrxChartLegend;

	    chartlegend:= legend As IChartExternLegend;

	    chartlegend.AxisIcon:= ChartLegendAxisIcon.Axis;

	    chartF:= New GxFont.Create("Arial", 8);

	    chartlegend.Font:= chartF;

	    items:= chartlegend.InternalItems;

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера параметры шрифта текста внешней легенды диаграмм
 будут следующие - «Arial», 8.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
