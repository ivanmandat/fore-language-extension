# IChartCircleExInfo.Shadow

IChartCircleExInfo.Shadow
-


# IChartCircleExInfo.Shadow


## Синтаксис


Shadow: [IChartShadow](../IChartShadow/IChartShadow.htm);


## Описание


Свойство Shadow определяет параметры
 тени основной диаграммы.


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

	    CircleEx.DisplayShadow:=True;

	    CircleEx.Shadow.Color := GxColor.FromName("Blue");

	    PrxReport.ActiveReport.ActiveSheet.Recalc;

	End Sub UserProc;


После выполнения примера будет отображена голубая тень основной диаграммы:


![](IChartCircleInfoEx.Shadow.gif)


См. также:


[IChartCircleExInfo](IChartCircleExInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
