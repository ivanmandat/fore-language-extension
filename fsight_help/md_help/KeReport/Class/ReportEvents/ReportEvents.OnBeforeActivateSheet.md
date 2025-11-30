# ReportEvents.OnBeforeActivateSheet

ReportEvents.OnBeforeActivateSheet
-


# ReportEvents.OnBeforeActivateSheet


## Синтаксис


OnBeforeActivateSheet(OldSheet:[IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 NewSheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Var Cancel: Boolean);


## Параметры


OldSheet. Лист регламентного
 отчёта, который был активным;


NewSheet. Лист регламентного
 отчёта, который станет активным;


Cancel. Признак отмены выполнения
 смены активного листа регламентного отчёта.


## Описание


Метод OnBeforeActivateSheet
 реализует событие, происходящее перед сменой активного листа регламентного
 отчёта.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Лист отчёта активирован
	 не будет;


	- False. Лист отчёта будет
	 активирован.


## Пример


Использование метода приведено в примере для [IPrxReportUserEvents.EventOnBeforeActivateSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeActivateSheet.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
