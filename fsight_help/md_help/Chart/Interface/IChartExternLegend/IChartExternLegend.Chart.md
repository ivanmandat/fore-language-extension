# IChartExternLegend.Chart

IChartExternLegend.Chart
-


# IChartExternLegend.Chart


## Синтаксис


Chart (Index: Integer): [IChart](../IChart/IChart.htm);


## Параметры


Index. Индекс
 диаграммы.


## Описание


Свойство Chart возвращает объект
 типа IChart с указанным индексом,
 которому принадлежит элемент легенды.


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

	    C: IChart;

	Begin

	    mb := MetabaseClass.Active;

	    rep := mb.ItemById("OBJ42859").Edit As IPrxReport;

	    objects := (rep.ActiveSheet As IprxTable).TabSheet.Objects;

	    legend := objects.Item(1).Extension As IPrxChartLegend;

	    chartlegend := legend As IChartExternLegend;

	    chartlegend.AddChart(objects.Item(2).Extension As IChart);

	    C:= chartlegend.Chart(0);

	    debug.WriteLine(chartlegend.isDirty);

	    If chartlegend.ChartCount > 0 Then

	        chartlegend.RemoveChart(chartlegend.Chart(0));

	    End If;

	    chartlegend.ItemSeparator:= "||";

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в переменной «С»
 будет находиться объект типа IChart
 с указанным индексом, которому принадлежит элемент легенды.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
