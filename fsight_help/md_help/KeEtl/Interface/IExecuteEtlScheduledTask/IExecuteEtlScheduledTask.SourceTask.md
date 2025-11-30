# IExecuteEtlScheduledTask.SourceTask

IExecuteEtlScheduledTask.SourceTask
-


# IExecuteEtlScheduledTask.SourceTask


## Синтаксис


SourceTask: [IEtlTask](../IEtlTask/IEtlTask.htm);


## Описание


Свойство SourceTask определяет
 задачу ETL, которую необходимо выполнить.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором TASK_CONTAINTER и задачи ETL с
 идентификатором ETL.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Etl: IExecuteEtlScheduledTask;

	    Period: IScheduledTaskPeriodMonthly;

	    Prop: IScheduledTaskProperties;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_TASK_EXECUTEETL;

	    CrInfo.Id := "ETL_EXECUTOR";

	    CrInfo.Name := "Выполнение задачи ETL";

	    CrInfo.Parent := MB.ItemById("TASK_CONTAINTER");

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Etl := MObj As IExecuteEtlScheduledTask;

	    Etl.SourceTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Prop := Etl.Properties;

	    Period := Prop.CreatePeriod(ScheduledTaskPeriodType.Monthly) As IScheduledTaskPeriodMonthly;

	    Period.DayOfWeek := CalendarDayOfWeek.LocaleDefault;

	    Period.Day := 1;

	    For i := 1 To 12 Do

	        Period.Months(i As CalendarMonth) := True;

	    End For;

	    Period.StartTime := DateTime.ComposeTimeOfDay(12, 0, 0, 0);

	    Prop.Period := Period;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 новая задача выполнения задачи ETL. Задача ETL будет запускаться в первый
 день каждого месяца в 12:00.


См. также:


[IExecuteEtlScheduledTask](IExecuteEtlScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
