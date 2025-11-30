# IExecuteSubScheduledTask.Assembly

IExecuteSubScheduledTask.Assembly
-


# IExecuteSubScheduledTask.Assembly


## Синтаксис


Assembly: [IAssembly](KeSom.chm::/Interface/IAssembly/IAssembly.htm);


## Описание


Свойство Assembly определяет
 сборку, содержащую модуль репозитория, который необходимо выполнить.


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

	    Period: IScheduledTaskPeriodWeekly;

	    Prop: IScheduledTaskProperties;

	Begin

	    MB := MetabaseClass.Active;

	    //Информация о создаваемом объекте

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TASK_EXECUTESUB;

	    CrInfo.Id := "MODULE_EXECUTOR";

	    CrInfo.Name := "Выполнение модуля";

	    CrInfo.Parent := MB.ItemById("TASK_CONTAINTER");

	    //Создание задачи и настройка её свойств

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


См. также:


[IExecuteSubScheduledTask](IExecuteSubScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
