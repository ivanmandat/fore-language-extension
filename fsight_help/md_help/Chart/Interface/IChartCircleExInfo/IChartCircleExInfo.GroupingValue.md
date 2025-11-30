# IChartCircleExInfo.GroupingValue

IChartCircleExInfo.GroupingValue
-


# IChartCircleExInfo.GroupingValue


## Синтаксис


GroupingValue: Double;


## Описание


Свойство GroupingValue определяет
 значение параметра группировки рядов для вторичной круговой диаграммы
 и вторичной гистограммы.


Примечание.
 Данное свойство используется совместно со свойством [IChartCircleExInfo.GroupingRule](IChartCircleExInfo.GroupingRule.htm).


## Пример


Для выполнения примера предполагается наличие листа регламентного отчета
 с расположенной на нем диаграммой.


	Sub UserProc;

	Var

	    C: IChart;

	    CircleEx: IChartCircleExInfo;

	Begin

	    C := (PrxReport.ActiveReport.ActiveSheet.Table.Objects.Item(0).Extension As IChart);

	    C.Type := ChartType.SecondaryBars;

	    CircleEx := C.CircleInfoEx;

	    CircleEx.GroupingValue := 12;

	    CircleEx.GroupingRule := ChartSerieGroupRule.Value;

	    PrxReport.ActiveReport.ActiveSheet.Recalc;

	End Sub UserProc;


После выполнения примера для вторичной диаграммы будут сгруппированы
 ряды со значением ряда меньше «12»:


![](IChartCircleInfoEx.GroupingRule.gif)


См. также:


[IChartCircleExInfo](IChartCircleExInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
