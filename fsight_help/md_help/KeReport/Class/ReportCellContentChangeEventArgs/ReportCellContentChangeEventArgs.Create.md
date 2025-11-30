# ReportCellContentChangeEventArgs.Create

ReportCellContentChangeEventArgs.Create
-


# ReportCellContentChangeEventArgs.Create


## Синтаксис


Create(


Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);


Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);


Row: Integer;


Column: Integer;


Value: Variant;


Type: [TabCellContentChange](TabSheet.chm::/Enums/TabCellContentChange.htm));


## Параметры


Report- объект [ReportBox](../ReportBox/ReportBox.htm)
 (регламентный отчет), для которого возникает событие.


Sheet - страница отчета, на
 которой возникает событие.


Row - строка, в которой возникает
 событие.


Column - колонка, в которой
 возникает событие.


Value - значение, которое должно
 быть помещено в ячейку.


Type - тип значения, которое
 должно быть помещено в ячейку.


## Описание


Конструктор Create создает аргумент
 события, возникающего при изменении содержимого в ячейке таблицы.


См. также:


[ReportCellContentChangeEventArgs](ReportCellContentChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
