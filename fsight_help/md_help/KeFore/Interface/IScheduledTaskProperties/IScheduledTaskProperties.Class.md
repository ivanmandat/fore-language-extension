# IScheduledTaskProperties.Class_

IScheduledTaskProperties.Class_
-


# IScheduledTaskProperties.Class_


## Синтаксис


Class_: Integer;


## Описание


Свойство Class_ определяет класс
 задачи, выполняемой в планировщике задач.


## Комментарии


Для каждого класса задач в планировщике задач формируется собственная
 очередь. Количество потоков распределяется «равными частями» между классами
 задач.


## Пример


Для выполнение примера необходимо наличие в репозитории контейнера запланированных
 задач с идентификатором «TASK_CONTAINER».


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

	    CrInfo.Parent := MB.ItemById("TASK_CONTAINER");

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

	    Prop.Class_:=2;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера создается задача выполнения модуля с наименованием
 «Выполнение модуля» и ей присваивается
 класс «2».


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
