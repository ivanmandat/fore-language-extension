# IPrxReportUserEvents.EventOnBeforeRefreshEaxGrid

IPrxReportUserEvents.EventOnBeforeRefreshEaxGrid
-


# IPrxReportUserEvents.EventOnBeforeRefreshEaxGrid


## Синтаксис


EventOnBeforeRefreshEaxGrid(EaxGrid: [IEaxGrid](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.htm); Var Cancel: Boolean);


## Параметры


EaxGrid. Параметр, возвращающий
 аналитическую область данных, сгенерировавшую событие.


Cancel. Параметр, определяющий,
 будет ли вызываться событие. По умолчанию установлено значение False.


## Описание


Метод EventOnBeforeRefreshEaxGrid
 реализует событие, происходящее перед обновлением аналитической области
 данных.


## Комментарии


Для реализации события, которое наступит после обновления аналитической
 области данных, используйте метод [IPrxReportUserEvents.EventOnAfterRefreshEaxGrid](IPrxReportUserEvents.EventOnAfterRefreshEaxGrid.htm).


## Пример


	Class EventsClass: ReportEvents

	    Public Sub OnBeforeRefreshEaxGrid(EaxGrid: IEaxGrid; Var Cancel: Boolean);

	    Begin

	        Debug.WriteLine("Будет обновлена аналитическая область данных.");

	    End Sub OnBeforeRefreshEaxGrid;

	End Class EventsClass;


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
