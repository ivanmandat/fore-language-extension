# IPrxReportUserEvents.EventOnAfterExecuteReport

IPrxReportUserEvents.EventOnAfterExecuteReport
-


# IPrxReportUserEvents.EventOnAfterExecuteReport


## Синтаксис


EventOnAfterExecuteReport(Args: [IUiPrxReportEventArgs](../IUiPrxReportEventArgs/IUiPrxReportEventArgs.htm));


## Параметры


Args - параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnAfterExecuteReport
 реализует событие, которое наступает после выполнения отчёта.


## Пример


			Sub EventOnAfterExecuteReport(Args: IUiPrxReportEventArgs);

Begin

    WinApplication.InformationBox(Args.Report.MetabaseObject.Id);

End Sub EventOnAfterExecuteReport;


При наступлении события будет выдано информационное сообщение, содержащее
 идентификатор отчёта, который был вычислен.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
