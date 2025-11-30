# IScheduledTaskProperties.MailRecipients

IScheduledTaskProperties.MailRecipients
-


# IScheduledTaskProperties.MailRecipients


## Синтаксис


MailRecipients: [IArrayList](ModCollections.chm::/Interface/IArrayList/IArrayList.htm);


## Описание


Свойство MailRecipients определяет
 коллекцию электронных адресов, по которым будет осуществляться отправка
 уведомления о выполнении задачи.


## Комментарии


Коллекция может содержать следующие значения:


	- Адрес электронной почты в строковом виде.


	- Ссылка на пользователя репозитория, описываемого интерфейсом
	 [ISecuritySubject](KeSom.chm::/Interface/ISecuritySubject/ISecuritySubject.htm).


Если в коллекцию добавлены пользователи репозитория, то в настройках
 также необходимо задать свойство [MailTargetType](IScheduledTaskProperties.MailTargetType.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором TASK_CONTAINER. В контейнере создана
 минимум одна задача.


Добавьте ссылки на системные сборки: Collections, Fore, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cont: IScheduledTasksContainer;

	    Task: IScheduledTask;

	    Props: IScheduledTaskProperties;

	    Mails: IArrayList;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("TASK_CONTAINER").Bind As IScheduledTasksContainer;

	    Task := Cont.Tasks.Item(0).Edit As IScheduledTask;

	    Props := Task.Properties;

	    Mails := Props.MailRecipients;

	    // Фиксированная электронная почта

	    Mails.Add("User@Example.ru");

	    // Электронная почта, указанная в профиле пользователя

	    Mails.Add(MB.LogonSession.User);

	    Props.MailTargetType := ScheduledTaskMailTarget.Personal Or ScheduledTaskMailTarget.Work;

	    Props.MailRecipients := Mails;

	    // Копия и скрытая копия

	    Props.CopyMailRecipients := "User1@Example.ru";

	    Props.HiddenMailRecipients := "User2@Example.ru";

	    (Task As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера будут изменены параметры первой задачи, созданной
 в контейнере. В параметрах задачи будут указаны адреса электронной почты,
 на которые будет отправлен отчёт о результатах выполнения задачи.


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
