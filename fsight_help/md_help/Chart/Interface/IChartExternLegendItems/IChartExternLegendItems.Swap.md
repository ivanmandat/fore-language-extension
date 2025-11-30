# IChartExternLegendItems.Swap

IChartExternLegendItems.Swap
-


# IChartExternLegendItems.Swap


## Синтаксис


Swap(FromIndex: Integer; ToIndex: Integer);


## Параметры


 FromIndex. Индекс элемента
 легенды, который будет заменен.


 ToIndex. Индекс элемента
 легенды, на который будет заменен элемент.


## Описание


Метод Swap позволяет менять
 местами заданные элементы внешней легенды.


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

	    rep := mb.ItemById("OBJ12399").Open(Null) As IPrxReport;

	    legend := (rep.ActiveSheet As IprxTable).TabSheet.Objects.Item(1).Extension As IPrxChartLegend;

	    chartlegend := legend As IChartExternLegend;

	    items := chartlegend.InternalItems;

	    items.Swap(0,3);

	End Sub UserProc;


После выполнения примера первый и четвертый элементы легенды поменяются
 местами.


См. также:


[IChartExternLegendItems](IChartExternLegendItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
