# IPrxReportUserEvents.EventOnBeforeSaveReport

IPrxReportUserEvents.EventOnBeforeSaveReport
-


# IPrxReportUserEvents.EventOnBeforeSaveReport


## Синтаксис


EventOnBeforeSaveReport(Args: [IUiPrxReportCancelEventArgs](../IUiPrxReportCancelEventArgs/IUiPrxReportCancelEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeSaveReport
 реализует событие, происходящее до сохранения отчета.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с [подключенным
 модулем](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event.htm#event). В качестве обработчика событий должен быть
 указан подключенный модуль и класс Parent.


Добавьте ссылки на системные сборки: Report, Ui.


	Public Class EventsClass: Parent

	    Public Sub OnBeforeSaveReport(Report: IPrxReport; Var Cancel: Boolean);

	    Begin

	        //Вызов системного события, переопределенного в классе Parent

	        Inherited OnBeforeSaveReport(Report, Cancel);

	    End Sub OnBeforeSaveReport;

	End Class EventsClass;

	Class Parent: ReportEvents

	    // Обработка события EventOnBeforeSaveReport

	    Public Sub EventOnBeforeSaveReport(Args: IUiPrxReportCancelEventArgs);

	    Begin

	        WinApplication.InformationBox("Отчёт будет сохранён");

	    End Sub EventOnBeforeSaveReport;

	End Class Parent;


При наступлении события будет выдано информационное сообщение.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
