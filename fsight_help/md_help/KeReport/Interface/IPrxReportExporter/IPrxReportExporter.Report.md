# IPrxReportExporter.Report

IPrxReportExporter.Report
-


# IPrxReportExporter.Report


## Синтаксис


Report: [IPrxReport](../IPrxReport/IPrxReport.htm);


## Описание


Свойство Report определяет экспортируемый
 регламентный отчет.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки Metabase, Report.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Report: IPrxReport;

		    Export: IPrxReportExporter;

		Begin

		    Mb := MetabaseClass.Active;

		    // Экспортируемый регламентный отчёт

		    Report := Mb.ItemById("REPORT").Bind As IPrxReport;

		    // Экспорт

		    Export := New PrxReportExporter.Create;

		    If Export.IsExportToPdfAvailable Then

		        Export.Report := Report;

		        Export.ExportToFile("D:\Отчет.pdf", "pdf");

		    End If;

		End Sub UserProc;


При выполнении примера осуществляется проверка возможности экспорта
 в формат PDF. Если экспорт возможен, то указанный отчёт будет экспортирован
 в указанный файл в формате PDF.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
