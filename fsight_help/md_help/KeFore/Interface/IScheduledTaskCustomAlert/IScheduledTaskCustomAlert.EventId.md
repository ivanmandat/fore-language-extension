# IScheduledTaskCustomAlert.EventId

IScheduledTaskCustomAlert.EventId
-


# IScheduledTaskCustomAlert.EventId


## Синтаксис


EventId: String;


## Описание


Свойство EventId определяет
 событие, по наступлению которого будет выполнена задача.


## Комментарии


Событие должно быть определено на вкладке «[Пользовательские
 метаданные > События](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/Classes_Events.htm)» диалога настройки параметров
 репозитория.


## Пример


Для выполнения примера предполагается наличие:


	- контейнера запланированных задач с идентификатором «TASK_CONTAINER»,
	 содержащего задачу;


	- события с идентификатором «CUSTOM_EVENT».


Для задачи должны быть заданы настройки на вкладке «[Расписание](UiAppSrv.chm::/3_Work_Tasks/UiAppSrv_Work_Tasks_CreateTask_TimeTable.htm)»:


	- установлен флажок «Выполнять
	 задачу»;


	- выбран вариант периодичности выполнения задачи «Не
	 задано».


Добавьте ссылки на системные сборки Metabase, Fore.


			Sub UserProc;

Var

    MB: IMetabase;

    cont: IScheduledTasksContainer;

    task: IScheduledTask;

    prop: IScheduledTaskProperties;

    alerts: IScheduledTaskAlerts;

    EventId: String;

    alert: IScheduledTaskAlert;

    CustomAlert: IScheduledTaskCustomAlert;

Begin

    MB := metabaseClass.Active;

    cont := MB.ItemById("TASK_CONTAINER").Edit As IScheduledTasksContainer;

    task := cont.Tasks.Item(0).Edit As IScheduledTask;

    prop := task.Properties;

    alerts := prop.Alerts;

    EventId := prop.EventId;

    EventId := "CUSTOM_EVENT";

    alert := alerts.Add(ScheduledTaskAlertType.Custom);

    CustomAlert := alert As IScheduledTaskCustomAlert;

    CustomAlert.EventId := EventId;

    (task As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для задачи будет установлен вариант
 периодичности выполнения задачи «По наступлению
 настраиваемого события» и выбрано событие «Начало
 загрузки».


См. также:


[IScheduledTaskCustomAlert](IScheduledTaskCustomAlert.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
