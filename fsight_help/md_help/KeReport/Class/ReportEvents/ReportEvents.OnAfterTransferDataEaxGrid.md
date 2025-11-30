# ReportEvents.OnAfterTransferDataEaxGrid

ReportEvents.OnAfterTransferDataEaxGrid
-


# ReportEvents.OnAfterTransferDataEaxGrid


## Синтаксис


OnAfterTransferDataEaxGrid (EaxGrid: [IEaxGrid](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.htm));


## Параметры


EaxGrid. Параметр, возвращающий
 аналитическую область данных, сгенерировавшую событие.


## Описание


Метод OnAfterTransferDataEaxGrid
 реализует событие, происходящее после сохранения изменённых значений аналитической
 области данных.


## Комментарии


При вызове метода одновременно в ядре обрабатывается событие [IPrxReportUserEvents.EventOnAfterTransferDataEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterTransferDataEaxGrid.htm),
 которое при желании можно переопределить.


## Пример


Использование метода приведено в примере для [IPrxReportUserEvents.EventOnBeforeTransferDataEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeTransferDataEaxGrid.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
