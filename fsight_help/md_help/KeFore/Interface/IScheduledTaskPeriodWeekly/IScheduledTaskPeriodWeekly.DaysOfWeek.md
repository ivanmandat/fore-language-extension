# IScheduledTaskPeriodWeekly.DaysOfWeek

IScheduledTaskPeriodWeekly.DaysOfWeek
-


# IScheduledTaskPeriodWeekly.DaysOfWeek


## Синтаксис


DaysOfWeek(Index: [CalendarDayOfWeek](ForeSys.chm::/Enums/CalendarDayOfWeek.htm)):
 Boolean;


## Параметры


Index -
 день, для которого необходимо определить признак расчета.


## Описание


Свойство DaysOfWeek определяет,
 будет ли производиться расчет в день, индекс которого передается посредством
 параметра Index. Если свойству
 установлено значение True - расчет
 будет производиться.


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

	    Per: IScheduledTaskPeriodWeekly;

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

	    Per := Prop.CreatePeriod(ScheduledTaskPeriodType.Weekly) As IScheduledTaskPeriodWeekly;

	    For i := 1 To 5 Do

	        Per.DaysOfWeek(i As CalendarDayOfWeek) := True;

	    End For;

	    Per.EveryWeeks := 2;

	    Per.StartTime := DateTime.ComposeTimeOfDay(12, 0, 0, 0);

	    Prop.Period := Per;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 новая задача выполнения модуля. Модуль будет запускаться с понедельника
 по пятницу в "12:00". Интервал - неделя через неделю.


См. также:


[IScheduledTaskPeriodWeekly](IScheduledTaskPeriodWeekly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
