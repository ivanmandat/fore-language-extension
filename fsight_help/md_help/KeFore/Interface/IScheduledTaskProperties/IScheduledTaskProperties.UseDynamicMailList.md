# IScheduledTaskProperties.UseDynamicMailList

IScheduledTaskProperties.UseDynamicMailList
-


# IScheduledTaskProperties.UseDynamicMailList


## Синтаксис


UseDynamicMailList: Boolean;


## Описание


Свойство UseDynamicMailList
 определяет, будет ли динамически формироваться список адресатов для отправки
 результатов выполнения задачи.


## Комментарии


Допустимые значения:


	- True. Формировать список
	 адресатов динамически. Для формирования списка будет использоваться
	 макрос, реализованный в Fore-модуле/форме/сборке [DynamicMailListModule](IScheduledTaskProperties.DynamicMailListModule.htm).
	 Наименование макроса указывается в свойстве [DynamicMailListMacro](IScheduledTaskProperties.DynamicMailListMacro.htm);


	- False. Значение по умолчанию.
	 Использовать статический список, заданный в свойствах [MailRecipients](IScheduledTaskProperties.MailRecipients.htm),
	 [CopyMailRecipients](IScheduledTaskProperties.CopyMailRecipients.htm),
	 [HiddenMailRecipients](IScheduledTaskProperties.HiddenMailRecipients.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором TASK_CONTAINER. В контейнере должна
 быть создана какая-либо задача. Также в репозитории должен быть создан
 модуль с идентификатором M_MAILLIST, в модуле реализована функция для
 формирования динамического списка адресатов GetRecepients.


	Function GetRecepients(Task: IScheduledTask): IArrayList;

	Var

	    Mb: IMetabase;

	    Result: IArrayList;

	Begin

	    Mb := Metabaseclass.Active;

	    //Массив для списка адресатов

	    Result := New ArrayList.Create;

	    //Формирование списка в соответствии с состоянием задачи

	    If Task.State = ScheduledTaskState.Failed Then

	        //...

	        //Добавление в Result адресатов, которые получат отчёт о неудачном завершении задачи

	        //...

	    Elseif Task.State = ScheduledTaskState.Succeeded Then

	        //...

	        //Добавление в Result адресатов, которые получат отчёт об успешном завершении задачи

	        //...

	    Else

	        //...

	        //Добавление в Result адресатов, которые получат отчёт во всех других случаях

	        //...

	    End If;

	    Return Result;

	End Function GetRecepients;


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cont: IScheduledTasksContainer;

	    Task: IScheduledTask;

	    Props: IScheduledTaskProperties;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("TASK_CONTAINER").Bind As IScheduledTasksContainer;

	    Task := Cont.Tasks.Item(0).Edit As IScheduledTask;

	    Props := Task.Properties;

	    //Динамический список адресатов

	    Props.SendMail := True;

	    Props.UseDynamicMailList := True;

	    Props.DynamicMailListModule := MB.ItemById("M_MAILLIST");

	    Props.DynamicMailListMacro := "GetRecepients";

	    Props.MailTargetType := ScheduledTaskMailTarget.Personal Or ScheduledTaskMailTarget.Work;

	    (Task As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера для первой задачи в контейнере запланированных
 задач будут изменены параметры уведомления о завершении задачи: список
 адресатов будет формироваться динамически с помощью указанного макроса.


См. также:


[IScheduledTaskProperties](IScheduledTaskProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
