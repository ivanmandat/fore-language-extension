# IPrxReportUserEvents.EventOnBeforePrintReport

IPrxReportUserEvents.EventOnBeforePrintReport
-


# IPrxReportUserEvents.EventOnBeforePrintReport


## Синтаксис


EventOnBeforePrintReport(Args: [IUiPrxReportCancelEventArgs](../IUiPrxReportCancelEventArgs/IUiPrxReportCancelEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforePrintReport
 реализует событие, происходящее перед печатью регламентного отчёта.


## Пример


			Sub EventOnBeforePrintReport(Args: IUiPrxReportCancelEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Печатать отчет " + Args.Report.MetabaseObject.Id + "?");

End Sub EventOnBeforePrintReport;


При наступлении события будет выдан диалог подтверждения печати отчёта,
 содержащий его идентификатор. При положительном ответе отчёт будет отправлен
 на печать, в противном случае нет.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
