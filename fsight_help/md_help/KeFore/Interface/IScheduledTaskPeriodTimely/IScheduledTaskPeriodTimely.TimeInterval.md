# IScheduledTaskPeriodTimely.TimeInterval

IScheduledTaskPeriodTimely.TimeInterval
-


# IScheduledTaskPeriodTimely.TimeInterval


## Синтаксис


TimeInterval: DateTime;


## Описание


Свойство TimeInterval определяет
 промежуток времени, через который будет производиться запуск задачи.


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

	    Per: IScheduledTaskPeriodTimely;

	    Prop: IScheduledTaskProperties;

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

	    Per := Prop.CreatePeriod(ScheduledTaskPeriodType.Timely) As IScheduledTaskPeriodTimely;

	    Per.StartDateTime := DateTime.Now;

	    Per.TimeInterval := DateTime.ComposeTimeOfDay(0, 30, 0, 0);

	    Prop.Period := Per;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 новая задача выполнения модуля. Модуль будет запускаться каждые тридцать
 минут, начиная с текущего момента.


См. также:


[IScheduledTaskPeriodTimely](IScheduledTaskPeriodTimely.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
