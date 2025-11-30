# IScheduledTaskAuditAlert.ClassId

IScheduledTaskAuditAlert.ClassId
-


# IScheduledTaskAuditAlert.ClassId


## Синтаксис


ClassId: Integer;


## Описание


Свойство ClassId определяет
 идентификатор типа объекта репозитория.


## Комментарии


Для проверки значения
 данного свойства используйте перечисление [MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm).


Для определения идентификатора объекта репозитория используйте свойство
 [IScheduledTaskAuditAlert.ObjectId](IScheduledTaskAuditAlert.ObjectId.htm).


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

    AuditAlert.ClassId := 1281; // Стандартный куб

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


	- выбран объект типа «Стандартный
	 куб», генерирующий событие;


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
