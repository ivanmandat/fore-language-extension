# IUiChartClass.ShowFormatRegionDialog

IUiChartClass.ShowFormatRegionDialog
-


# IUiChartClass.ShowFormatRegionDialog


## Синтаксис


ShowFormatRegionDialog(Chart: [IChart](../IChart/IChart.htm); Parent: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm));


## Параметры


Chart - диаграмма;


Parent - окно, для которого данное окно откроется модально.


## Описание


Метод ShowFormatRegionDialog вызывает окно «Формат области диаграммы» для указанной диаграммы.


## Пример


Для выполнения примера предполагается наличие регламентного отчета. На активном листе отчета расположена диаграмма с идентификатором «Chart1».


			Sub FormatRegionDialog;

Var

    Wnd: IWin32Window;

    Sheet: IPrxSheet;

    Chart: IChart;

Begin

    Wnd := WinApplication.Instance.Windows.ForegroundWindow;

    Sheet := PrxReport.ActiveReport.ActiveSheet;

    Chart := (Sheet As IPrxTable).TabSheet.Objects.Object("Chart1") As IChart;

    UiChartClass.ShowFormatRegionDialog(Chart, Wnd);

End Sub FormatRegionDialog;


Данный пример является макросом для регламентного отчета. При выполнении макроса будет выведен диалог «Формат области диаграммы» для указанной диаграммы.


См. также:


[IUiChartClass](IUiChartClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
