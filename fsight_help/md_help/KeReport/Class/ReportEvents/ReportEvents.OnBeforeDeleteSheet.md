# ReportEvents.OnBeforeDeleteSheet

ReportEvents.OnBeforeDeleteSheet
-


# ReportEvents.OnBeforeDeleteSheet


## Синтаксис


OnBeforeDeleteSheet (Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm); Var Cancel: Boolean);


## Параметры


Sheet. Лист регламентного отчёта,
 сгенерировавший событие.


Cancel. Признак отмены удаления
 листа.


## Описание


Метод OnBeforeDeleteSheet реализует
 событие, происходящее до удаления листа регламентного отчёта.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Лист удален не
	 будет;


	- False. Лист будет удален.
	 Значение по умолчанию.


При вызове метода одновременно в ядре обрабатывается событие IPrxReportUserEvents.EventOnBeforeDeleteSheet,
 которое при желании можно переопределить.


## Пример


Использование свойства приведено в примере для [IPrxReportUserEvents.EventOnBeforeDeleteSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeDeleteSheet.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
