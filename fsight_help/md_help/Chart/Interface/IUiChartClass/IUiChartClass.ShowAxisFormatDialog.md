# IUiChartClass.ShowAxisFormatDialog

IUiChartClass.ShowAxisFormatDialog
-


# IUiChartClass.ShowAxisFormatDialog


## Синтаксис


ShowAxisFormatDialog(Axis: [IChartAxis](../IChartAxis/IChartAxis.htm); Parent: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm));


## Параметры


Axis - ось диаграммы, параметры которой необходимо изменить.


Parent - окно, для которого данное окно откроется модально.


## Описание


Метод ShowAxisFormatDialog вызывает окно «Формат оси» для указанной оси диаграммы.


## Пример


Для выполнения примера предполагается наличие регламентного отчета. На активном листе отчета расположена диаграмма с идентификатором «Chart1».


			Sub AxisFormatDialog;

Var

    Wnd: IWin32Window;

    Sheet: IPrxSheet;

    Chart: IChart;

Begin

    Wnd := WinApplication.Instance.Windows.ForegroundWindow;

    Sheet := PrxReport.ActiveReport.ActiveSheet;

    Chart := (Sheet As IPrxTable).TabSheet.Objects.Object("Chart1") As IChart;

    UiChartClass.ShowAxisFormatDialog(Chart.AxisY, Wnd);

End Sub AxisFormatDialog;


Данный пример является макросом для регламентного отчета. При выполнении макроса будет выведен диалог «Формат оси» для оси Y указанной диаграммы.


См. также:


[IUiChartClass](IUiChartClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
