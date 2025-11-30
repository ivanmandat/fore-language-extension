# ReportEvents.OnBeforeDeleteControl

ReportEvents.OnBeforeDeleteControl
-


# ReportEvents.OnBeforeDeleteControl


## Синтаксис


OnBeforeDeleteControl(Control: [IPrxControl](../../Interface/IPrxControl/IPrxControl.htm);
 Var Cancel: Boolean);


## Параметры


Control. Элемент управления,
 сгенерировавший событие;


Cancel. Признак отмены удаления
 элемента управления.


## Описание


Метод OnBeforeDeleteControl
 реализует событие, происходящее перед удалением элемента управления.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Элемент управления
	 удалён не будет;


	- False. Элемент управления
	 будет удалён.


Для реализации события, происходящего при изменении значения элемента
 управления регламентного отчета, используйте метод [ReportEvents.OnChangeControlValue](ReportEvents.OnChangeControlValue.htm).


## Пример


Использование метода приведено в примере для [IPrxReportUserEvents.EventOnBeforeDeleteControl](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeDeleteControl.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
