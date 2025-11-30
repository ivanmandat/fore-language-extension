# IPrxReportExporter.ExportHiddenSheets

IPrxReportExporter.ExportHiddenSheets
-


# IPrxReportExporter.ExportHiddenSheets


## Синтаксис


ExportHiddenSheets: Boolean;


## Описание


Свойство ExportHiddenSheets
 определяет необходимость экспорта скрытых листов при экспорте в формат
 XLS (*.xls). Если значение данного свойства True,
 то скрытые листы (если они имеются в отчете) экспортируются и с ними можно
 работать средствами Microsoft Excel; при значении False
 - скрытые листы не экспортируются.


По умолчанию свойство имеет значение False.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «OBJ_REPORT».


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

    Exp.ExportHiddenSheets := True;

    Exp.ExportToFile("C:\Report.xls", "xls");

End Sub UserProc;


После выполнения примера регламентный отчет, включая скрытые листы,
 будет экспортирован в файл «C:\Report.xls».


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
