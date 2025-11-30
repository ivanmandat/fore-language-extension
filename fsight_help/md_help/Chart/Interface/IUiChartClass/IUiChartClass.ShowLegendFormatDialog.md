# IUiChartClass.ShowLegendFormatDialog

IUiChartClass.ShowLegendFormatDialog
-


# IUiChartClass.ShowLegendFormatDialog


## Синтаксис


ShowLegendFormatDialog(Legend: [IChartLegend](../IChartLegend/IChartLegend.htm); Parent: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm));


## Параметры


Legend - легенда диаграммы;


Parent - окно, для которого данное окно откроется модально.


## Описание


Метод ShowLegendFormatDialog вызывает окно «Формат легенды».


## Пример


Для выполнения примера предполагается наличие регламентного отчета. На активном листе отчета расположена диаграмма с идентификатором «Chart1».


			Sub LegendFormatDialog;

Var

    Wnd: IWin32Window;

    Sheet: IPrxSheet;

    Chart: IChart;

Begin

    Wnd := WinApplication.Instance.Windows.ForegroundWindow;

    Sheet := PrxReport.ActiveReport.ActiveSheet;

    Chart := (Sheet As IPrxTable).TabSheet.Objects.Object("Chart1") As IChart;

    UiChartClass.ShowLegendFormatDialog(Chart.Legend, Wnd);

End Sub LegendFormatDialog;


Данный пример является макросом для регламентного отчета. При выполнении макроса будет выведен диалог «Формат легенды» для указанной диаграммы.


См. также:


[IUiChartClass](IUiChartClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
