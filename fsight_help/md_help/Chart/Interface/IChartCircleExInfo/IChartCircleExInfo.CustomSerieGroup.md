# IChartCircleExInfo.CustomSerieGroup

IChartCircleExInfo.CustomSerieGroup
-


# IChartCircleExInfo.CustomSerieGroup


## Синтаксис


CustomSerieGroup: Array;


## Описание


Свойство CustomSerieGroup определяет
 пользовательскую группу рядов, которые входят в объединение рядов. Данное
 свойство действует только, если свойство [IChartCircleExInfo.GroupingRule](IChartCircleExInfo.GroupingRule.htm)
 имеет значение [ChartSerieGroupRule.Custom](../../Enums/ChartSerieGroupRule.htm).


Примечание.
 Данное свойство используется совместно со свойством [IChartCircleExInfo.GroupingRule](IChartCircleExInfo.GroupingRule.htm).


## Пример


Для выполнения примера предполагается наличие листа регламентного отчета
 с расположенной на нем диаграммой. На диаграмме должно быть больше трех
 рядов.


	Sub UserProc;

	Var

	    C: IChart;

	    CircleEx: IChartCircleExInfo;

	    A: Array[3] Of Integer;

	Begin

	    C := (PrxReport.ActiveReport.ActiveSheet.Table.Objects.Item(0).Extension As IChart);

	    C.Type := ChartType.SecondaryBars;

	    CircleEx := C.CircleInfoEx;

	    A[0] := 0;

	    A[1] := 2;

	    A[2] := 3;

	    CircleEx.CustomSerieGroup := A;

	    CircleEx.GroupingRule := ChartSerieGroupRule.Custom;

	    PrxReport.ActiveReport.ActiveSheet.Recalc;

	End Sub UserProc;


После выполнения примера в группу будут объединены все ряды, за исключением
 второго:


![](IChartCircleInfoEx.CustomSerieGroup.gif)


См. также:


[IChartCircleExInfo](IChartCircleExInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
