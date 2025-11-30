# ReportColumnResizeEventArgs.CreateReportColumnResizeArgs

ReportColumnResizeEventArgs.CreateReportColumnResizeArgs
-


# ReportColumnResizeEventArgs.CreateReportColumnResizeArgs


## Синтаксис


CreateReportColumnResizeArgs(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Column: Integer; ResizeType: [TabRowColumnResizeType](TabSheet.chm::/Enums/TabRowColumnResizeType.htm));


## Параметры


Report. Компонент, для которого
 генерируется событие;


Sheet. Страница отчета, для
 которой генерируется событие;


Column. Столбец, для которого
 генерируется событие;


ResizeType. Действие, в результате
 которого изменяется размер столбца.


## Описание


Конструктор CreateReportColumnResizeArgs
 создает аргумент события, происходящего после изменения размера столбца
 таблицы.


См. также:


[ReportColumnResizeEventArgs](ReportColumnResizeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
