# IPrxReportUserEvents.EventOnBeforeExecuteReport

IPrxReportUserEvents.EventOnBeforeExecuteReport
-


# IPrxReportUserEvents.EventOnBeforeExecuteReport


## Синтаксис


EventOnBeforeExecuteReport(Args: [IUiPrxReportCancelEventArgs](../IUiPrxReportCancelEventArgs/IUiPrxReportCancelEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeExecuteReport
 реализует событие, происходящее перед вычислением регламентного отчёта.


## Пример


			Sub EventOnBeforeExecuteReport(Args: IUiPrxReportCancelEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Вычислять отчет " + Args.Report.MetabaseObject.Id + "?");

End Sub EventOnBeforeExecuteReport;


При наступлении события будет выдан диалог подтверждения вычисления
 отчёта. При положительном ответе отчет будет вычислен, в противном случае
 нет.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
