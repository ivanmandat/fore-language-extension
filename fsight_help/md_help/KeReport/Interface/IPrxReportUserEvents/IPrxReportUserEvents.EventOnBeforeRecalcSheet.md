# IPrxReportUserEvents.EventOnBeforeRecalcSheet

IPrxReportUserEvents.EventOnBeforeRecalcSheet
-


# IPrxReportUserEvents.EventOnBeforeRecalcSheet


## Синтаксис


EventOnBeforeRecalcSheet(Args: [IUiPrxSheetCancelEventArgs](../IUiPrxSheetCancelEventArgs/IUiPrxSheetCancelEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeRecalcSheet
 реализует событие, происходящее перед вычислением листа регламентного
 отчёта.


## Пример


			Sub EventOnBeforeRecalcSheet(Args: IUiPrxSheetCancelEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Вычислить " + Args.Sheet.Name + "?");

End Sub EventOnBeforeRecalcSheet;


При наступлении события будет выдан диалог подтверждения вычисления
 листа отчёта, содержащий наименование листа. При положительном ответе
 лист будет вычислен, в противном случае нет.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
