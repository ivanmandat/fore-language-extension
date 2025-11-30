# IChartExternLegend.ItemPlacement

IChartExternLegend.ItemPlacement
-


# IChartExternLegend.ItemPlacement


## Синтаксис


ItemPlacement: [ChartExtLegPlacement](../../Enums/ChartExtLegPlacement.htm);


## Описание


Свойство ItemPlacement определяет расположение элементов внешней легенды.


## Комментарии


По умолчанию свойству ItemPlacement соответствует значение [ChartExtLegPlacement.Auto](../../Enums/ChartExtLegPlacement.htm).


Если свойству ItemPlacement соответствует значение [ChartExtLegPlacement.CustomColumns](../../Enums/ChartExtLegPlacement.htm), то количество столбцов берется из [IChartExternLegend.ColCount](IChartExternLegend.ColCount.htm). Если значение [ColCount](IChartExternLegend.ColCount.htm) меньше 1, то количество столбцов берется равным 1. Если значение [ColCount](IChartExternLegend.ColCount.htm) больше количества элементов, то количество столбцов берется равным количеству элементов.


Если свойству ItemPlacement соответствует значение [ChartExtLegPlacemen.CustomRows](../../Enums/ChartExtLegPlacement.htm), то количество строк берется из [IChartExternLegend.RowCount](IChartExternLegend.RowCount.htm). Если значение [RowCount](IChartExternLegend.RowCount.htm) меньше 1, то количество строк берется равным 1. Если значение [RowCount](IChartExternLegend.RowCount.htm) больше количества элементов, то количество строк берется равным количеству элементов.


## Пример


Использование свойства приведено в примерах для [RowCount](IChartExternLegend.RowCount.htm), [ColCount](IChartExternLegend.ColCount.htm).


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
