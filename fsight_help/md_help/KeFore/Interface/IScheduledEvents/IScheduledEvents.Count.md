# IScheduledEvents.Count

IScheduledEvents.Count
-


# IScheduledEvents.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 запланированных на будущее событий выполнения задач.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER".


	Sub UserProc;

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

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен список
 событий, выполнение которых, запланировано в контейнере запланированных
 задач. Будет выведено время начала выполнения события и наименование выполняемой
 задачи.


См. также:


[IScheduledEvents](IScheduledEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
