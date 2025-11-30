# IPrxReportUserEvents.EventOnAfterPrintReport

IPrxReportUserEvents.EventOnAfterPrintReport
-


# IPrxReportUserEvents.EventOnAfterPrintReport


## Синтаксис


EventOnAfterPrintReport(Args: [IUiPrxReportEventArgs](../IUiPrxReportEventArgs/IUiPrxReportEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnAfterPrintReport
 реализует событие, которое наступает после печати регламентного отчета.


## Пример


Для выполнения примера предполагается наличие регламентного отчета.
 [Подключите](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm)
 модуль в регламентный отчет, в качестве обработчика событий выберите подключенный
 модуль и класс EventsClass. В
 модуле подключите системные сборки: Metabase, Report, Ui.


	Sub EventOnAfterPrintReport(Args: IUiPrxReportEventArgs);

	Begin

	   WinApplication.InformationBox(Args.Report.MetabaseObject.Id);

	End Sub EventOnAfterPrintReport;


После наступления события будет выдано информационное сообщение, содержащее
 идентификатор регламентного отчета, который был распечатан.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
