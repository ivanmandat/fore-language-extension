# IScheduledTaskProperties.Period

IScheduledTaskProperties.Period
-


# IScheduledTaskProperties.Period


## Синтаксис


Period: [IScheduledTaskPeriod](../IScheduledTaskPeriod/IScheduledTaskPeriod.htm);


## Описание


Свойство Period определяет период
 выполнения задачи.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER" и
 модуля с идентификатором "Module_1". В модуле имеется процедура
 "Main".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Exe: IExecuteSubScheduledTask;

	    Per: IScheduledTaskPeriodDaily;

	    Prop: IScheduledTaskProperties;

	    Date: DateTime;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TASK_EXECUTESUB;

	    CrInfo.Id := "MODULE_EXECUTOR";

	    CrInfo.Name := "Выполнение модуля";

	    CrInfo.Parent := MB.ItemById("TASK_CONTAINTER");

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Exe := MObj As IExecuteSubScheduledTask;

	    Exe.Assembly := (MB.ItemById("Module_1").Bind As IModule).Assembly;

	    Exe.SubName := "Main";

	    Prop := Exe.Properties;

	    Per := Prop.CreatePeriod(ScheduledTaskPeriodType.Daily) As IScheduledTaskPeriodDaily;

	    Per.EveryDays := 3;

	    Date := DateTime.Now;

	    Per.StartDateTime := Date.Compose(Date.Year, Date.Month, Date.Day, 12, 0, 0, 0);

	    Per.StopDateTime := DateTime.AddMonths(Per.StartDateTime, 2);

	    Prop.Period := Per;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 новая задача выполнения модуля. Модуль будет запускаться каждые три дня
 в "12:00" в течение двух месяцев.


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
