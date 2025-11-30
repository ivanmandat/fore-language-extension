# IPrxReportExporter.ExportObjectAsBitmap

IPrxReportExporter.ExportObjectAsBitmap
-


# IPrxReportExporter.ExportObjectAsBitmap


## Синтаксис


ExportObjectAsBitmap: Boolean;


## Описание


Свойство ExportObjectAsBitmap
 определяет необходимость экспорта объектов в растровом формате при экспорте
 в форматы PDF (*.pdf) и XLS (*.xls).


## Комментарии


Если значение свойства True,
 то объекты отчета экспортируются в растровом формате, при значении False - в векторном формате.


По умолчанию свойство имеет значение True.


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

    Exp.ExportObjectAsBitmap := False;

    Exp.ExportToFile("C:\temp\Rep_metafile.pdf", "PDF");

End Sub UserProc;


После выполнения примера регламентный отчет будет экспортирован в заданный
 файл, объекты будут экспортированы в векторном формате.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
