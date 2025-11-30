# IPrxReportUserEvents.EventOnAfterRefreshEaxGrid

IPrxReportUserEvents.EventOnAfterRefreshEaxGrid
-


# IPrxReportUserEvents.EventOnAfterRefreshEaxGrid


## Синтаксис


EventOnAfterRefreshEaxGrid(EaxGrid : [IEaxGrid](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.htm));


## Описание


Метод EventOnAfterRefreshEaxGrid
 реализует событие, происходящее после обновления аналитической области
 данных.


## Комментарии


Для реализации события, которое наступит перед обновлением аналитической
 области данных, используйте метод [IPrxReportUserEvents.EventOnBeforeRefreshEaxGrid](IPrxReportUserEvents.EventOnBeforeRefreshEaxGrid.htm).


## Пример


	Class EventsClass: ReportEvents

	    Public Sub OnAfterRefreshEaxGrid(EaxGrid : IEaxGrid);

	    Begin

	        Debug.WriteLine("Была обновлена аналитическая область данных.");

	    End Sub OnAfterRefreshEaxGrid;

	End Class EventsClass;


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
