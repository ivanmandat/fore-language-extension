# IUiChartClass.ShowSerieFormatDialog

IUiChartClass.ShowSerieFormatDialog
-


# IUiChartClass.ShowSerieFormatDialog


## Синтаксис


ShowSerieFormatDialog(Chart: [IChart](../IChart/IChart.htm); Index: Integer; Parent: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm));


## Параметры


Chart - диаграмма.


Index - индекс ряда, параметры которого необходимо изменить.


Parent - окно, для которого данное окно откроется модально.


## Описание


Метод ShowSerieFormatDialog вызывает окно «Формат ряда данных» для указанного ряда диаграммы.


## Пример


Для выполнения примера предполагается наличие регламентного отчета. На активном листе отчета расположена диаграмма с идентификатором «Chart1».


			Sub SerieFormatDialog;

Var

    Wnd: IWin32Window;

    Sheet: IPrxSheet;

    Chart: IChart;

Begin

    Wnd := WinApplication.Instance.Windows.ForegroundWindow;

    Sheet := PrxReport.ActiveReport.ActiveSheet;

    Chart := (Sheet As IPrxTable).TabSheet.Objects.Object("Chart1") As IChart;

    UiChartClass.ShowSerieFormatDialog(Chart, 0, Wnd);

End Sub SerieFormatDialog;


Данный пример является макросом для регламентного отчета. При выполнении макроса будет выведен диалог «Формат ряда данных» для первого ряда указанной диаграммы.


См. также:


[IUiChartClass](IUiChartClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
