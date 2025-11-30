# ReportEvents.OnAfterSortEaxGrid

ReportEvents.OnAfterSortEaxGrid
-


# ReportEvents.OnAfterSortEaxGrid


## Синтаксис


OnAfterSortEaxGrid (EaxGrid: [IEaxGrid](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.htm));


## Параметры


EaxGrid. Параметр, возвращающий
 аналитическую область данных, сгенерировавшую событие.


## Описание


Метод OnAfterSortEaxGrid реализует
 событие, происходящее после сортировки данных в аналитической области.


## Комментарии


При вызове метода одновременно в ядре обрабатывается событие [IPrxReportUserEvents.EventOnAfterSortEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterSortEaxGrid.htm),
 которое при желании можно переопределить.


## Пример


Использование свойства приведено в примере для [IPrxReportUserEvents.EventOnBeforeSortEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeSortEaxGrid.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
