# IPrxReportExporter.ExportReportTitle

IPrxReportExporter.ExportReportTitle
-


# IPrxReportExporter.ExportReportTitle


## Синтаксис


ExportReportTitle: Boolean;


## Описание


Свойств ExportReportTitle определяет
 необходимость экспорта заголовка отчета в формат PDF (расширенный).


## Комментарии


Если свойство имеет значение True,
 то заголовок отчета будет экспортирован, при значении False
 - нет.


По умолчанию свойство имеет значение False.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    Mb: IMetabase;

    Report: IPrxReport;

    Exp: IPrxReportExporter;

Begin

    Mb := MetabaseClass.Active;

    Rep := Mb.ItemById("OBJ_REPORT").Bind As IPrxReport;

    Exp := New PrxReportExporter.Create;

    Exp.Report := Report;

    Exp.ExportReportTitle := True;

    Exp.ExportToFile("C:\Отчет.pdf", "pdfex");

End Sub UserProc;


При экспорте отчета его заголовок будет экспортирован в результирующий
 файл.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
