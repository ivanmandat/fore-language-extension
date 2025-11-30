# ReportInteractiveSelectionChangeEventArgs.Create

ReportInteractiveSelectionChangeEventArgs.Create
-


# ReportInteractiveSelectionChangeEventArgs.Create


## Синтаксис


Create(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);
 Type: [TabInteractiveSelectionType](TabSheet.chm::/Enums/TabInteractiveSelectionType.htm);
 Cancel: Boolean);


## Параметры


Report. Компонент, для которого
 генерируется событие.


Sheet. Страница отчета, для
 которой генерируется событие.


Range. Диапазон
 ячеек, для которой генерируется событие.


Type.
 Тип перемещения ячеек.


Cancel. Признак
 доступности перемещения.


## Описание


Конструктор Create создает аргумент
 события, происходящего в момент перемещения выделенной области ячеек таблицы.


См. также:


[ReportInteractiveSelectionChangeEventArgs](ReportInteractiveSelectionChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
