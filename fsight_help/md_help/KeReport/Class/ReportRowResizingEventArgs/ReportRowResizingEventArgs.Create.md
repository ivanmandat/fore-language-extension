# ReportRowResizingEventArgs.Create

ReportRowResizingEventArgs.Create
-


# ReportRowResizingEventArgs.Create


## Синтаксис


Create(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Row: Integer; ResizeType: [TabRowColumnResizeType](TabSheet.chm::/Enums/TabRowColumnResizeType.htm);
 Cancel: Boolean);


## Параметры


Report. Компонент, для которого
 генерируется событие.


Sheet. Страница отчета, для
 которой генерируется событие.


Row. Индекс строки, для которого
 генерируется событие.


ResizeType. Действие, в результате
 которого изменяется размер строки.


Cancel.
 Признак отмены изменения размера строки.


## Описание


Конструктор Create создает аргумент
 события, происходящего при каждом видимом изменении размера строки таблицы.


См. также:


[ReportRowResizingEventArgs](ReportRowResizingEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
