# ReportEvents.OnBeforeExecuteReport

ReportEvents.OnBeforeExecuteReport
-


# ReportEvents.OnBeforeExecuteReport


## Синтаксис


OnBeforeExecuteReport(Report: [IPrxReport](../../Interface/IPrxReport/IPrxReport.htm);
 Var Cancel: Boolean);


## Параметры


Report. Регламентный отчёт,
 сгенерировавший событие;


Cancel. Признак отмены вычисления
 регламентного отчёта.


## Описание


Метод OnBeforeExecuteReport
 реализует событие, происходящее перед вычислением регламентного отчёта.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Регламентный отчёт
	 вычислен не будет;


	- False. Регламентный
	 отчёт будет вычислен.


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
