# ReportColumnResizingEventArgs.Create

ReportColumnResizingEventArgs.Create
-


# ReportColumnResizingEventArgs.Create


## Синтаксис


Create(Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Column: Integer; ResizeType: [TabRowColumnResizeType](TabSheet.chm::/Enums/TabRowColumnResizeType.htm);
 Cancel: Boolean);


## Параметры


Report. Компонент, для которого
 генерируется событие;


Sheet. Страница отчета, для
 которой генерируется событие;


Column. Столбец, для которого
 генерируется событие;


ResizeType. Действие, в результате
 которого изменяется размер столбца;


Cancel. Признак отмены изменения
 размера столбца.


## Описание


Конструктор Create создает аргумент
 события, происходящего при каждом видимом изменении размера столбца таблицы.


См. также:


[ReportColumnResizingEventArgs](ReportColumnResizingEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
