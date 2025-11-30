# IScheduledTaskPeriodMonthly.Day

IScheduledTaskPeriodMonthly.Day
-


# IScheduledTaskPeriodMonthly.Day


## Синтаксис


Day: Integer;


## Описание


Свойство Day определяет день
 месяца, в который будет производиться расчет. Актуально, если свойству
 [DayOfWeek](IScheduledTaskPeriodMonthly.DayOfWeek.htm) установлено
 значение CalendarDayOfWeek.LocaleDefault.


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

	    Per: IScheduledTaskPeriodMonthly;

	    Prop: IScheduledTaskProperties;

	    i: Integer;

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

	    Per := Prop.CreatePeriod(ScheduledTaskPeriodType.Monthly) As IScheduledTaskPeriodMonthly;

	    Per.DayOfWeek := CalendarDayOfWeek.LocaleDefault;

	    Per.Day := 1;

	    For i := 1 To 12 Do

	        Per.Months(i As CalendarMonth) := True;

	    End For;

	    Per.StartTime := DateTime.ComposeTimeOfDay(12, 0, 0, 0);

	    Prop.Period := Per;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 новая задача выполнения модуля. Модуль будет запускаться в первый день
 каждого месяца в "12:00".


См. также:


[IScheduledTaskPeriodMonthly](IScheduledTaskPeriodMonthly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
