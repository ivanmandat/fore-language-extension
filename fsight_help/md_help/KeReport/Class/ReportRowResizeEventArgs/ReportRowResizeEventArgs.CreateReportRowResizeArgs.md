# ReportRowResizeEventArgs.CreateReportRowResizeArgs

ReportRowResizeEventArgs.CreateReportRowResizeArgs
-


# ReportRowResizeEventArgs.CreateReportRowResizeArgs


## Синтаксис


CreateReportRowResizeArgs(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Row: Integer; ResizeType: [TabRowColumnResizeType](TabSheet.chm::/Enums/TabRowColumnResizeType.htm));


## Параметры


Report. Компонент, для которого
 генерируется событие.


Sheet. Страница отчета, для
 которой генерируется событие.


Row. Индекс строки, для которого
 генерируется событие.


ResizeType. Действие, в результате
 которого изменяется размер строки.


## Описание


Конструктор CreateReportRowResizeArgs
 создает аргумент события, происходящего после изменения размера строки
 таблицы.


См. также:


[ReportRowResizeEventArgs](ReportRowResizeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
