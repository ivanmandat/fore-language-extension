# ICalculateReportScheduledTask.PutExportSettings

ICalculateReportScheduledTask.PutExportSettings
-


# ICalculateReportScheduledTask.PutExportSettings


## Синтаксис


PutExportSettings(Exporter: [IPrxReportExporter](../IPrxReportExporter/IPrxReportExporter.htm));


## Параметры


Exporter. Параметр определяет
 настройки параметров экспорта.


## Описание


Метод PutExportSettings позволяет
 сохранить настройки параметров экспорта в задачу вычисления регламентного
 отчёта в контейнере задач.


## Пример


Для выполнения примера в репозитории предполагается наличие отчёта с
 идентификатором REPORT, контейнера запланированных задач с идентификатором
 TASK_CONTAINER.


Добавьте ссылки на системные сборки: Fore, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    prop: IScheduledTaskProperties;

	    period: IScheduledTaskPeriodOneTimeOnly;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    ex: ICalculateReportScheduledTask;

	    exporter: IPrxReportExporter;

	    report: IPrxReport;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим отчёт

	    report := MB.ItemById("REPORT").Bind As IPrxReport;

	    // Создадим задачу в контейнере

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TASK_CALCULATEREPORT;

	    CrInfo.Id := "REPORT_CALCULATOR1";

	    CrInfo.Name := "Задача вычисления отчета 1";

	    CrInfo.Parent := MB.ItemById("TASK_CONTAINER");

	    MObj := MB.CreateObject(CrInfo).Edit;

	    // Зададим настройки задачи вычисления отчёта

	    Ex := MObj As ICalculateReportScheduledTask;

	    ex.SourceReport := report;

	    ex.FormatTag := "xls";

	    prop := Ex.Properties;

	    prop.AppendAttachment := False;

	    period := (prop.CreatePeriod(ScheduledTaskPeriodType.OneTimeOnly) As IScheduledTaskPeriodOneTimeOnly);

	    period.StartMode := TaskPeriodOneTimeStartMode.Immediate;

	    prop.Period := period;

	    prop.MailAddress := "test@mail.com";

	    // Определим параметры экспорта отчёта

	    Exporter := New PrxReportExporter.Create;

	    exporter.Report := report;

	    exporter.ExportChartsAsImages := True;

	    ex.PutExportSettings(exporter);

	    Mobj.Save;

	End Sub UserProc;


После выполнения примера будет создана задача вычисления регламентного
 отч`та с наименованием «Задача вычисления
 отчета 1» и в нее будут загружены настройки параметров экспорта.


См. также:


[ICalculateReportScheduledTask](ICalculateReportScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
