# IScheduledEvent.StartDateTime

IScheduledEvent.StartDateTime
-


# IScheduledEvent.StartDateTime


## Синтаксис


StartDateTime: DateTime;


## Описание


Свойство StartDateTime возвращает
 дату и время, на которое запланирован запуск события.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER".


	Sub Main;

	Var

	    MB: IMetabase;

	    Cont: IScheduledTasksContainer;

	    Tasks: IMetabaseObjectDescriptors;

	    Invoke: IScheduledInvoke;

	    Events: IScheduledEvents;

	    TaskEvent: IScheduledEvent;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("TASK_CONTAINTER").Bind As IScheduledTasksContainer;

	    Tasks := Cont.Tasks;

	    Invoke := Cont.CreateInvokeEvent(DateTime.Now);

	    Events := (Invoke As IScheduledEvents);

	    For i := 0 To Events.Count - 1 Do

	        TaskEvent := Events.Item(i);

	        Debug.WriteLine(TaskEvent.StartDateTime.ToString + " " + Tasks.FindByKey(TaskEvent.TaskKey).Name);

	    End For;

	End Sub Main;


После выполнения примера в консоль среды разработки будет выведен список
 событий, выполнение которых, запланировано в контейнере запланированных
 задач. Будет выведено время начала выполнения события и наименование выполняемой
 задачи.


См. также:


[IScheduledEvent](IScheduledEvent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
