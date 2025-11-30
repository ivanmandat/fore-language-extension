# IChartExternLegend.ItemSeparator

IChartExternLegend.ItemSeparator
-


# IChartExternLegend.ItemSeparator


## Синтаксис


ItemSeparator: String;


## Описание


Свойство ItemSeparator позволяет
 задать разделитель текста для объединенных элементов внешней диаграммы.


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

	    objects: ITabObjects;

	Begin

	    mb := MetabaseClass.Active;

	    rep := mb.ItemById("OBJ42859").Edit As IPrxReport;

	    objects := (rep.ActiveSheet As IprxTable).TabSheet.Objects;

	    legend := (objects.Item(1)) As IPrxChartLegend;

	    chartlegend := legend As IChartExternLegend;

	    chartlegend.AddChart(objects.Item(2) As IChart);

	    chartlegend.ItemSeparator:= "||";

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера разделитель текста для объединенных элементов
 внешней диаграммы будет следующий - «||».


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
