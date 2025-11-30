# ReportEvents.OnAfterExportReport

ReportEvents.OnAfterExportReport
-


# ReportEvents.OnAfterExportReport


## Синтаксис


OnAfterExportReport(Report: [IPrxReport](../../Interface/IPrxReport/IPrxReport.htm));


## Параметры


Report. Регламентный отчёт,
 сгенерировавший событие.


## Описание


Метод OnAfterExportReport реализует
 событие, происходящее после экспорта регламентного отчета.


## Комментарии


При вызове метода OnAfterExportReport
 одновременно в ядре обрабатывается событие [EventOnAfterExportReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterExportReport.htm),
 которое при желании можно переопределить.


## Пример


Использование метода приведено в примере для [ReportEvents.OnBeforeExportReport](ReportEvents.OnBeforeExportReport.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
