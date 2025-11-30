# IPrxReportExporter.ExportChartsAsImages

IPrxReportExporter.ExportChartsAsImages
-


# IPrxReportExporter.ExportChartsAsImages


## Синтаксис


ExportChartsAsImages: Boolean;


## Описание


Свойство ExportChartsAsImages
 определяет необходимость экспорта диаграмм в виде изображений в формат
 XLS (*.xls).


## Комментарии


Если значение свойства True,
 то диаграммы экспортируются как изображения, при значении False
 - нет.


По умолчанию свойство имеет значение False.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REGULAR_REPORT».


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    ReportExporter: IPrxReportExporter;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

    ReportExporter := New PrxReportExporter.Create;

    ReportExporter.Report := Report;

    ReportExporter.ExportFootnotes := True;

    ReportExporter.ExportChartsAsImages := True;

    ReportExporter.ExportToFile("C:\Report.XLS", "XLS");

End Sub UserProc;


При выполнения примера регламентный отчет будет экспортирован в указанный
 файл в формате XLS. Диаграммы отчета будут экспортированы в виде изображений,
 также будут экспортированы сноски.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
