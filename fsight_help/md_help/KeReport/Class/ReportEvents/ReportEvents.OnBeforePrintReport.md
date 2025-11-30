# ReportEvents.OnBeforePrintReport

ReportEvents.OnBeforePrintReport
-


# ReportEvents.OnBeforePrintReport


## Синтаксис


OnBeforePrintReport(Report: [IPrxReport](../../Interface/IPrxReport/IPrxReport.htm),
 Var Cancel: Boolean);


## Параметры


Report. Регламентный отчёт,
 сгенерировавший событие;


Cancel. Признак отмены печати
 регламентного отчёта.


## Описание


Метод OnBeforePrintReport реализует
 событие, происходящее перед печатью регламентного отчёта.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Регламентный отчёт
	 напечатан не будет;


	- False. Регламентный
	 отчёт будет напечатан.


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
