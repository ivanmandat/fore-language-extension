# IChartExternLegendItem.Name

IChartExternLegendItem.Name
-


# IChartExternLegendItem.Name


## Синтаксис


Name: String;


## Описание


Свойство Name возвращает наименование
 элемента внешней легенды диаграмм. Свойство доступно только для чтения.


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

    item: IChartExternLegendItem;

Begin

    mb := MetabaseClass.Active;

    rep := mb.ItemById("OBJ12399").Open(Null) As IPrxReport;

    legend := (rep.ActiveSheet As IprxTable).TabSheet.Objects.Item(1).Extension As IPrxChartLegend;

    chartlegend := legend As IChartExternLegend;

    items := chartlegend.InternalItems;

    item := Items.Item(0);

    Debug.Writeln(item.Name);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 первого элемента внешней легенды.


См. также:


[IChartExternLegendItem](IChartExternLegendItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
