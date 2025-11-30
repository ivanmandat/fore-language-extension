# ReportHyperlinkClickEventArgs.Create

ReportHyperlinkClickEventArgs.Create
-


# ReportHyperlinkClickEventArgs.Create


## Синтаксис


Create (Report: [IReportBox](../../Interface/IReportBox/IReportBox.htm);
 Sheet: [IPrxSheet](../../Interface/IPrxSheet/IPrxSheet.htm);
 Row: Integer; Column: Integer; Type: [TabHyperlinkObjectType](TabSheet.chm::/Enums/TabHyperlinkObjectType.htm));


## Параметры


Report. Компонент, для которого
 генерируется событие;


Sheet. Страница отчета, для
 которой генерируется событие;


Row. Номер строки, для которой
 возникает событие;


Column. Номер столбца, для
 которого возникает событие;


Type. Тип элемента, расположенного
 в ячейке с гиперссылкой.


## Описание


Конструктор Create создает аргумент
 события, наступающего при щелчке по гиперссылке в ячейке таблицы.


См. также:


[ReportHyperlinkClickEventArgs](ReportHyperlinkClickEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
