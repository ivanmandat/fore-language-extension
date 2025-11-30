# IScheduledTaskProperties.FtpAddress

IScheduledTaskProperties.FtpAddress
-


# IScheduledTaskProperties.FtpAddress


## Синтаксис


FtpAddress: String;


## Описание


Свойство FtpAddress определяет
 путь к Ftp-папке, куда будет сохранен рассчитанный отчет.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER" и
 регламентного отчета с идентификатором "Report_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    CalcReport: ICalculateReportScheduledTask;

	    Per: IScheduledTaskPeriodOneTimeOnly;

	    Prop: IScheduledTaskProperties;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TASK_CALCULATEREPORT;

	    CrInfo.Id := "CALCULATE_REPORT";

	    CrInfo.Name := "Вычисление регламентного отчета";

	    CrInfo.Parent := MB.ItemById("TASK_CONTAINTER");

	    MObj := MB.CreateObject(CrInfo).Edit;

	    CalcReport := MObj As ICalculateReportScheduledTask;

	    CalcReport.FormatTag := "xls";

	    CalcReport.SourceReport := MB.ItemById("Report_1").Bind As IPrxReport;

	    Prop := CalcReport.Properties;

	    Per := Prop.CreatePeriod(ScheduledTaskPeriodType.OneTimeOnly) As IScheduledTaskPeriodOneTimeOnly;

	    Per.StartMode := TaskPeriodOneTimeStartMode.OnLogon;

	    Prop.Period := Per;

	    Prop.MailAddress := "User1@Mail.ru";

	    Prop.FtpAddress := "ftp://10.0.0.1/Report"

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 новая задача расчета регламентного отчета. Расчет будет произведен при
 подключении к репозиторию. Отчет о расчете будет отправлен по указанному
 адресу электронной почты. В качестве приложения к письму будет вложен
 рассчитанный отчет, экспортированный в формат "XLS". Также экспортированный
 файл будет выложен в указанную папку на Ftp-сервере.


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)
 | [Работа
 с планировщиком задач](UiAppSrv.chm::/1_Work_AppSrv/UiAppSrv_Work_AppSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
