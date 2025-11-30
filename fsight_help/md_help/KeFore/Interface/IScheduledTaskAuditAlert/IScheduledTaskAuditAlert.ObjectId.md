# IScheduledTaskAuditAlert.ObjectId

IScheduledTaskAuditAlert.ObjectId
-


# IScheduledTaskAuditAlert.ObjectId


## Синтаксис


ObjectId: String;


## Описание


Свойство ObjectId определяет
 идентификатор объекта репозитория.


## Комментарии


Для определения идентификатора типа объекта репозитория используйте
 свойство [IScheduledTaskAuditAlert.ObjectId](IScheduledTaskAuditAlert.ObjectId.htm).


## Пример


Для выполнения примера предполагается наличие:


	- контейнера запланированных задач с идентификатором «TASK_CONTAINER»,
	 содержащего задачу;


	- объекта репозитория с идентификатором «R_DATA».


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

    alert: IScheduledTaskAlert;

    AuditAlert: IScheduledTaskAuditAlert;

Begin

    MB := metabaseClass.Active;

    cont := MB.ItemById("TASK_CONTAINER").Edit As IScheduledTasksContainer;

    task := cont.Tasks.Item(0).Edit As IScheduledTask;

    prop := task.Properties;

    alerts := prop.Alerts;

    alerts.Clear;

    alert := alerts.Add(ScheduledTaskAlertType.Audit);

    AuditAlert := alert As IScheduledTaskAuditAlert;

    AuditAlert.ObjectId := "R_DATA";

    AuditAlert.Operation := 2097152; // Сохранение данных

    AuditAlert.Result := ScheduledAlertAuditResult.Succeeded;

    AuditAlert.UserName := "UserName";

    AuditAlert.Station := "Station";

    AuditAlert.UserNameOS := "UserNameOS";

    (task As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для задачи будет установлен вариант
 периодичности выполнения задачи «По наступлению
 системного события» и заданы следующие параметры:


	- по заданному идентификатору выбран объект репозитория, генерирующий
	 событие;


	- операция, генерирующая событие - «Сохранение
	 данных»;


	- результат выполнения операции - «успешно»;


	- заданы пользователь репозитория, пользователь операционной системы,
	 генерирующие событие;


	- задана рабочая станция, на которой было сгенерировано событие.


См. также:


[IScheduledTaskAuditAlert](IScheduledTaskAuditAlert.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
