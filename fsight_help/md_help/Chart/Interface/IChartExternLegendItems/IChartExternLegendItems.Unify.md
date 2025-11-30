# IChartExternLegendItems.Unify

IChartExternLegendItems.Unify
-


# IChartExternLegendItems.Unify


## Синтаксис


Unify(Indexes: Array);


## Параметры


Indexes. Массив индексов элементов
 внешней легенды.


## Описание


Метод Unify позволяет объединить
 элементы внешней легенды, индексы которых передаются в качестве входного
 параметра Indexes.


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

	        a: array Of integer;

	    Begin

	        a := New integer[4];

	        a[0] := 0;

	        a[1] := 1;

	        a[2] := 2;

	        a[3] := 6;

	        mb := MetabaseClass.Active;

	        rep := mb.ItemById("OBJ12399").Open(Null) As IPrxReport;

	        legend := (rep.ActiveSheet As IprxTable).TabSheet.Objects.Item(2).Extension As IPrxChartLegend;

	        chartlegend := legend As IChartExternLegend;

	        items := chartlegend.InternalItems;

	        items.Unify(a);

	End Sub UserProc;


После выполнения примера первый, второй, третий и седьмой элементы будут
 объединены.


См. также:


[IChartExternLegendItems](IChartExternLegendItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
