# ReportEvents.OnBeforeExportReport

ReportEvents.OnBeforeExportReport
-


# ReportEvents.OnBeforeExportReport


## Синтаксис


OnBeforeExportReport(Report: [IPrxReport](../../Interface/IPrxReport/IPrxReport.htm),
 Var Cancel: Boolean);


## Параметры


Report. Регламентный отчёт,
 сгенерировавший событие.


Cancel. Признак отмены экспорта
 регламентного отчёта.


## Описание


Метод OnBeforeExportReport
 реализует событие, происходящее перед экспортом регламентного отчёта.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Отчёт экспортирован
	 не будет;


	- False. Отчёт будет экспортирован.


При вызове метода OnBeforeExportReport
 одновременно в ядре обрабатывается событие [EventOnBeforeExportReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeExportReport.htm),
 которое при необходимости можно переопределить.


## Пример


Использование метода приведено в примере для [IPrxReportUserEvents.EventOnBeforeExportReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeExportReport.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
