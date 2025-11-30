# IChartCircleExInfo.GroupName

IChartCircleExInfo.GroupName
-


# IChartCircleExInfo.GroupName


## Синтаксис


GroupName: String;


## Описание


Свойство GroupName определяет
 наименование объединенной группы рядов на основной диаграмме.


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

	    CircleEx.GroupName := "Клиенты";

	    PrxReport.ActiveReport.ActiveSheet.Recalc;

	End Sub UserProc;


После выполнения примера наименование объединенной группы рядов на основной
 диаграмме будет изменено на «Клиенты»:


![](IChartCircleInfoEx.GroupName.gif)


См. также:


[IChartCircleExInfo](IChartCircleExInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
