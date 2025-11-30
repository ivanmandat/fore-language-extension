# IPrxReportExporter.ExportSheetTitles

IPrxReportExporter.ExportSheetTitles
-


# IPrxReportExporter.ExportSheetTitles


## Синтаксис


ExportSheetTitles: Boolean;


## Описание


Свойство ExportSheetTitles определяет
 необходимость экспорта названий листов при экспорте отчета в формат RTF
 (*.rtf).


## Комментарии


Если свойство имеет значение True,
 то названия листов экспортируются, при значении False
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

    Exp.ExportSheetTitles := True;

    Exp.ExportToFile("C:\Отчет.rtf", "rtf");

End Sub UserProc;


После выполнения примера регламентный отчет будет экспортирован в файл
 «Отчет.rtf», при этом в результирующем файле будут отражены наименования
 листов.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
