# IScheduledTaskProperties.Queueing

IScheduledTaskProperties.Queueing
-


# IScheduledTaskProperties.Queueing


## Синтаксис


Queueing: Boolean;


## Описание


Свойство Queueing определяет,
 будет ли запущена задача, если не завершилось выполнение предыдущего экземпляра
 этой же задачи. True - задача
 не будет запущена, пока не завершится выполнение предыдущего экземпляра,
 False - задача будет запущена
 в любом случае.


Примечание.
 В случае если при выполнении задачи пропущены один или несколько ее очередных
 запусков, то они будут выполнены в порядке очереди.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором «TASK_CONTAINTER» и модуля с идентификатором
 «Module_1». В модуле имеется процедура «Main».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Exe: IExecuteSubScheduledTask;Per: IScheduledTaskPeriodDaily;

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

	    Prop.Queueing:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 новая задача выполнения модуля. Модуль будет запускаться каждые три дня
 в «12:00» в течение двух месяцев. Задача не будет запущена, пока не завершится
 выполнение предыдущего экземпляра этой же задачи.


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
