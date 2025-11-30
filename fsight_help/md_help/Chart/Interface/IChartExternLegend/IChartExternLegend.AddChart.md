# IChartExternLegend.AddChart

IChartExternLegend.AddChart
-


# IChartExternLegend. AddChart


## Синтаксис


AddChart(Value: [IChart](../IChart/IChart.htm));


## Параметры


Value. Значение, определяющее
 диаграмму, которую необходимо добавить в список диаграмм, подключенных
 к внешней легенде.


## Описание


Метод AddChart осуществляет
 добавление диаграммы, передаваемой посредством параметра Value,
 в список диаграмм, подключенных к внешней легенде.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Report». В отчете
 присутствуют объекты: две диаграммы и внешняя легенда.


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

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в список диаграмм, подключенных к внешней легенде,
 будет добавлена новая диаграмма.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
