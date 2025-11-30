# ReportInteractiveSelectionEventArgs.CreateInteractiveSelectionArgs

ReportInteractiveSelectionEventArgs.CreateInteractiveSelectionArgs
-


# ReportInteractiveSelectionEventArgs.CreateInteractiveSelectionArgs


## Синтаксис


CreateInteractiveSelectionArgs(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);
 Type: [TabInteractiveSelectionType](TabSheet.chm::/Enums/TabInteractiveSelectionType.htm));


## Параметры


Report. Компонент, для которого
 генерируется событие.


Sheet. Страница отчета, для
 которой генерируется событие.


Range. Диапазон
 ячеек, для которой генерируется событие.


Type.
 Тип перемещения ячеек.


## Описание


Конструктор CreateInteractiveSelectionArgs
 создает экземпляр аргумента событий, происходящих при перемещении выделенной
 области ячеек в таблице.


См. также:


[ReportInteractiveSelectionEventArgs](ReportInteractiveSelectionEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
