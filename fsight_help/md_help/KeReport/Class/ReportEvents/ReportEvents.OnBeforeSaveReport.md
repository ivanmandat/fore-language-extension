# ReportEvents.OnBeforeSaveReport

ReportEvents.OnBeforeSaveReport
-


# ReportEvents.OnBeforeSaveReport


## Синтаксис


OnBeforeSaveReport(Report: [IPrxReport](../../Interface/IPrxReport/IPrxReport.htm);
 Var Cancel: Boolean);


## Параметры


Report. Отчёт, сгенерировавший
 событие;


Cancel. Признак отмены сохранения
 отчёта. При значении данного параметра True
 отчет не будет сохранен, при значении False
 – отчет будет сохранен.


## Описание


Метод OnBeforeSaveReport реализует
 событие, происходящее до сохранения отчета.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Отчёт сохранён
	 не будет;


	- False. Отчёт будет сохранён.


## Пример


Использование метода приведено в примере для [IPrxReportUserEvents.EventOnBeforeSaveReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeSaveReport.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
