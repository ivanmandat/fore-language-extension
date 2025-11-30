# ReportEvents.OnBeforeChangeControlValue

ReportEvents.OnBeforeChangeControlValue
-


# ReportEvents.OnBeforeChangeControlValue


## Синтаксис


OnBeforeChangeControlValue (Control: [IPrxControl](../../Interface/IPrxControl/IPrxControl.htm); Var Cancel: Boolean);


## Параметры


Control. Элемент управления
 регламентного отчёта, сгенерировавший событие;


Cancel. Признак отмены изменения
 значения элемента управления.


## Описание


Метод OnBeforeChangeControlValue
 реализует событие, происходящее до изменения значения элемента управления
 регламентного отчёта.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Значение элемента
	 управления изменено не будет;


	- False. Значение элемента
	 управления будет изменено. Значение по умолчанию.


При вызове метода одновременно в ядре обрабатывается событие IPrxReportUserEvents.EventOnBeforeChangeControlValue,
 которое при желании можно переопределить.


## Пример


Использование свойства приведено в примере для [IPrxReportUserEvents.EventOnBeforeChangeControlValue](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeChangeControlValue.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
