# Создание задачи в контейнере запланированных задач

Создание задачи в контейнере запланированных задач
-


# Создание задачи в контейнере запланированных задач


Рассмотрим пример создания задачи, осуществляющей выполнения модуля.


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "NewSTCont" и модуля
 с идентификатором "Module_1". В модуле имеется процедура "Main".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Exe: IExecuteSubScheduledTask;

	    Period: IScheduledTaskPeriodWeekly;

	    Prop: IScheduledTaskProperties;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TASK_EXECUTESUB;

	    CrInfo.Id := "Task_module_execute";

	    CrInfo.Name := "Выполнение модуля";

	    CrInfo.Parent := MB.ItemById("NewSTCont");

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Exe := MObj As IExecuteSubScheduledTask;

	    Exe.Assembly := (MB.ItemById("Module_1").Bind As IModule).Assembly;

	    Exe.SubName := "Main";

	    Prop := Exe.Properties;

	    Period := Prop.CreatePeriod(ScheduledTaskPeriodType.Weekly) As IScheduledTaskPeriodWeekly;

	    Period.DaysOfWeek(CalendarDayOfWeek.Monday) := True;

	    Period.DaysOfWeek(CalendarDayOfWeek.Wednesday) := True;

	    Period.DaysOfWeek(CalendarDayOfWeek.Friday) := True;

	    Period.StartTime := DateTime.ComposeTimeOfDay(12, 0, 0, 0);

	    Prop.Period := Period;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 новая задача выполнения модуля. Модуль будет запускаться по понедельникам,
 средам и пятницам в "12:00".


Более подробную информацию по работе с различными задачами можно найти
 в описании следующих интерфейсов:


	- [ICalculateCubeScheduledTask](KeCubes.chm::/Interface/ICalculateCubeScheduledTask/ICalculateCubeScheduledTask.htm)
	 - задача расчета вычисляемого куба.


	- [ICalculateReportScheduledTask](KeReport.chm::/Interface/ICalculateReportScheduledTask/ICalculateReportScheduledTask.htm)
	 - задача вычисления регламентного отчета.


	- [IExecuteSubScheduledTask](../Interface/IExecuteSubScheduledTask/IExecuteSubScheduledTask.htm)
	 - задача выполнения модуля.


	- [IExecuteEtlScheduledTask](KeEtl.chm::/Interface/IExecuteEtlScheduledTask/IExecuteEtlScheduledTask.htm)
	 - задача выполнения задачи Etl.


	- [ICalculateModelScheduledTask](KeMs.chm::/Interface/ICalculateModelScheduledTask/ICalculateModelScheduledTask.htm)
	 - задача расчета задачи моделирования.


См. также:


[Примеры](KeFore_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
