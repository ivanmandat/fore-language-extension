# IUiChartClass.ShowFormatConstructDialog

IUiChartClass.ShowFormatConstructDialog
-


# IUiChartClass.ShowFormatConstructDialog


## Синтаксис


ShowFormatConstructDialog(GraphArea: [IChartGraphArea](../IChartGraphArea/IChartGraphArea.htm); Parent: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm));


## Параметры


GraphArea - область построения диаграммы;


Parent - окно, для которого данное окно откроется модально.


## Описание


Метод ShowFormatConstructDialog вызывает окно «Формат области построения».


## Пример


Для выполнения примера предполагается наличие регламентного отчета. На активном листе отчета расположена диаграмма с идентификатором «Chart1».


			Sub FormatConstructDialog;

Var

    Wnd: IWin32Window;

    Sheet: IPrxSheet;

    Chart: IChart;

Begin

    Wnd := WinApplication.Instance.Windows.ForegroundWindow;

    Sheet := PrxReport.ActiveReport.ActiveSheet;

    Chart := (Sheet As IPrxTable).TabSheet.Objects.Object("Chart1") As IChart;

    UiChartClass.ShowFormatConstructDialog(Chart.GraphArea, Wnd);

End Sub FormatConstructDialog;


Данный пример является макросом для регламентного отчета. При выполнении макроса будет выведен диалог «Формат области построения» для указанной диаграммы.


См. также:


[IUiChartClass](IUiChartClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
