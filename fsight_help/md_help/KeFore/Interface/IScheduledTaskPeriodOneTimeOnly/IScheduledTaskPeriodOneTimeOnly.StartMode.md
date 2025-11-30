# IScheduledTaskPeriodOneTimeOnly.StartMode

IScheduledTaskPeriodOneTimeOnly.StartMode
-


# IScheduledTaskPeriodOneTimeOnly.StartMode


## Синтаксис


StartMode: [TaskPeriodOneTimeStartMode](../../Enums/TaskPeriodOneTimeStartMode.htm);


## Описание


Свойство StartMode определяет,
 когда будет производиться одноразовый запуск задачи.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором «TASK_CONTAINTER» и модуля с идентификатором
 «Module_1». В модуле имеется процедура «Main».


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CrInfo: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Exe: IExecuteSubScheduledTask;

		    Period: IScheduledTaskPeriodOneTimeOnly;

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

		    Period := Prop.CreatePeriod(ScheduledTaskPeriodType.OneTimeOnly) As IScheduledTaskPeriodOneTimeOnly;

		    Period.StartMode := TaskPeriodOneTimeStartMode.OnLogon;

		    Prop.Period := Period;

		    MObj.Save;

		End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 новая задача выполнения модуля. Модуль будет запущен один раз при подключении
 к репозиторию.


См. также:


[IScheduledTaskPeriodOneTimeOnly](IScheduledTaskPeriodOneTimeOnly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
