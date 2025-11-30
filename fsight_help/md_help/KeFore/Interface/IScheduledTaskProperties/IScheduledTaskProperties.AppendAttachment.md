# IScheduledTaskProperties.AppendAttachment

IScheduledTaskProperties.AppendAttachment
-


# IScheduledTaskProperties.AppendAttachment


## Синтаксис


AppendAttachment: Boolean;


## Описание


Свойство AppendAttachment определяет
 необходимость прикрепления результата выполнения задачи к уведомлению
 об окончании выполнения задачи, отправляемому по электронной почте.


## Пример


	Sub UserProc;

	Var

	    prop: IScheduledTaskProperties;

	    period: IScheduledTaskPeriodOneTimeOnly;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    ex: ICalculateReportScheduledTask;

	    exporter: IPrxReportExporter;

	    report: IPrxReport;

	Begin

	    report := MB.ItemById("OBJ29714").Bind As IPrxReport;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TASK_CALCULATEREPORT;

	    CrInfo.Id := "Report_calculator1";

	    CrInfo.Name := "Задача
	 вычисления отчета 1";

	    CrInfo.Parent := MB.ItemById("OBJ29709");

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Ex := MObj As ICalculateReportScheduledTask;

	    ex.SourceReport := report;

	    ex.FormatTag := "xls";

	    prop := Ex.Properties;

	    prop.AppendAttachment:=False;

	    period := (prop.CreatePeriod(ScheduledTaskPeriodType.OneTimeOnly) As IScheduledTaskPeriodOneTimeOnly);

	    period.StartMode := TaskPeriodOneTimeStartMode.Immediate;

	    prop.Period := period;

	    prop.MailAddress:= "test@mail.com";

	    Exporter := New PrxReportExporter.Create;

	    exporter.Report := report;

	    exporter.ExportChartsAsImages := True;

	    ex.PutExportSettings(exporter);

	    Mobj.Save;

	End Sub UserProc;


После выполнения примера будет создана задача вычисления регламентного
 отчета с наименованием «Задача вычисления
 отчета 1» и в нее будут загружены настройки параметров экспорта.
 Результат выполнения задачи не будет прикреплен к уведомлению об окончании
 выполнения задачи.


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
