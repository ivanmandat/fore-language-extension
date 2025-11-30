# IUiPrxReportEventArgs.Report

IUiPrxReportEventArgs.Report
-


# IUiPrxReportEventArgs.Report


## Синтаксис


Report: [IPrxReport](../IPrxReport/IPrxReport.htm);


## Описание


Свойство Report возвращает регламентный
 отчет.


## Пример


Пример рассмотрим на событии, которое наступает после вычисления отчета.


			Sub EventOnAfterExecuteReport(Args: IUiPrxReportEventArgs);

Begin

    WinApplication.InformationBox(Args.Report.MetabaseObject.Id);

End Sub EventOnAfterExecuteReport;


При наступлении события будет выдано информационное сообщение, содержащее
 идентификатор отчета, который был вычислен.


См. также:


[IUiPrxReportEventArgs](IUiPrxReportEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
