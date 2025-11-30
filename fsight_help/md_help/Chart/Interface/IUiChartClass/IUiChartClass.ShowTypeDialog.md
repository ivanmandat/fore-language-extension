# IUiChartClass.ShowTypeDialog

IUiChartClass.ShowTypeDialog
-


# IUiChartClass.ShowTypeDialog


## Синтаксис


ShowTypeDialog(Chart: [IChart](../IChart/IChart.htm); Parent: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm));


## Параметры


Chart - диаграмма;


Parent - окно, для которого данное окно откроется модально.


## Описание


Метод ShowTypeDialog вызывает окно «Тип диаграммы».


## Пример


Для выполнения примера предполагается наличие регламентного отчета. На активном листе отчета расположена диаграмма с идентификатором «Chart1».


			Sub TypeDialog;

Var

    Wnd: IWin32Window;

    Sheet: IPrxSheet;

    Chart: IChart;

Begin

    Wnd := WinApplication.Instance.Windows.ForegroundWindow;

    Sheet := PrxReport.ActiveReport.ActiveSheet;

    Chart := (Sheet As IPrxTable).TabSheet.Objects.Object("Chart1") As IChart;

    UiChartClass.ShowTypeDialog(Chart, Wnd);

End Sub TypeDialog;


Данный пример является макросом для регламентного отчета. При выполнении макроса будет выведен диалог «Тип диаграммы» для указанной диаграммы.


См. также:


[IUiChartClass](IUiChartClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
