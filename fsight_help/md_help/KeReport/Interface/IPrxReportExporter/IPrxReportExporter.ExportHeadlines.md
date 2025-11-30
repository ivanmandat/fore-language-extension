# IPrxReportExporter.ExportHeadlines

IPrxReportExporter.ExportHeadlines
-


# IPrxReportExporter.ExportHeadlines


## Синтаксис


ExportHeadlines: Boolean;


## Описание


Свойство ExportHeadlines определяет
 необходимость экспорта колонтитулов листа при экспорте отчета в формат
 RTF(*.rtf).


## Комментарии


Если значение свойства True,
 то колонтитулы экспортируются, при значении False
 - нет.


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

    Exp.ExportHeadlines := False;

    Exp.ExportToFile("C:\Отчет.rtf", "rtf");

End Sub UserProc;


При экспорте отчета колонтитулы не будут экспортированы.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
