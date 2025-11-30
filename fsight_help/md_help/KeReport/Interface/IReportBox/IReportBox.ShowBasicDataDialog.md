# IReportBox.ShowBasicDataDialog

IReportBox.ShowBasicDataDialog
-


# IReportBox.ShowBasicDataDialog


## Синтаксис


ShowBasicDataDialog(Chart: [IPrxChart](../IPrxChart/IPrxChart.htm);
 Parent: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm));


## Параметры


Chart - параметр определяет
 диаграмму отчета, для которой вызывается окно исходных данных.


Parent - параметр определяет
 родительскую форму для вызываемого диалога.


## Описание


Метод ShowBasicDataDialog вызывает
 окно «Исходные данные» для выбранной
 диаграммы регламентного отчета.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонента ReportBox и компонента UiReport с наименованием «UiReport1»,
 являющегося источником данных для ReportBox.


			Sub TestFormOnCreate(Sender: Object; Args: IEventArgs);

Var

    mb: IMetabase;

Begin

    mb := MetabaseClass.Active;

    report := mb.ItemById("REPORT").Edit As IPrxReport;

    UiReport1.Instance := report;

End Sub TestFormOnCreate;

Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    chart: IPrxChart;

Begin

    chart := (report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IPrxChart;

    ReportBox1.ShowBasicDataDialog(chart, Self As IWin32Window);

End Sub Button1OnClick;


После выполнения примера при нажатии кнопки будет открыто окно «Исходные данные» выбранной диаграммы.


См. также:


[IReportBox](IReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
