# IPrxReportUserEvents.EventOnBeforeOpenReport

IPrxReportUserEvents.EventOnBeforeOpenReport
-


# IPrxReportUserEvents.EventOnBeforeOpenReport


## Синтаксис


EventOnBeforeOpenReport(Args: [IUiPrxReportCancelEventArgs](../IUiPrxReportCancelEventArgs/IUiPrxReportCancelEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeOpenReport
 реализует событие, происходящее перед открытием регламентного отчёта.


## Пример


			Sub EventOnBeforeOpenReport(Args: IUiPrxReportCancelEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Открыть отчет " + Args.Report.MetabaseObject.Id + "?");

End Sub EventOnBeforeOpenReport;


При наступлении события будет выдан диалог подтверждения открытия отчёта,
 содержащий его идентификатор. При положительном ответе отчет будет открыт,
 в противном случае нет.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
