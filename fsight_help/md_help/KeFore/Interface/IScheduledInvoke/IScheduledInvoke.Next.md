# IScheduledInvoke.Next

IScheduledInvoke.Next
-


# IScheduledInvoke.Next


## Синтаксис


Next: [IScheduledEvents](../IScheduledEvents/IScheduledEvents.htm);


## Описание


Метод Next возвращает параметры
 событий выполнения задач, которые запланированы на будущее. Данные события
 рассчитываются с учетом установленного для задачи расписания.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cont: IScheduledTasksContainer;

	    Invoke: IScheduledInvoke;

	    Events: IScheduledEvents;

	    TaskEvent: IScheduledEvent;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("TASK_CONTAINTER").Bind As IScheduledTasksContainer;

	    Invoke := Cont.CreateInvokeEvent(DateTime.Now);

	    //События выполнения задач, запланированные в ближайшее время

	    Debug.WriteLine("Ближайший запуск");

	    Events := Invoke As IScheduledEvents;

	    For i := 0 To Events.Count - 1 Do

	        TaskEvent := Events.Item(i);

	        Debug.WriteLine(TaskEvent.StartDateTime);

	    End For;

	    Debug.WriteLine("Next");

	    //Следующие запланированные события

	    Debug.WriteLine("Следующий запуск");

	    Events := Invoke.Next;

	    For i := 0 To Events.Count - 1 Do

	        TaskEvent := Events.Item(i);

	        Debug.WriteLine(TaskEvent.StartDateTime);

	    End For;

	End Sub UserProc;


После выполнения примера будут созданы события выполнения задач контейнера
 запланированных задач. В консоль среды разработки будут выведены дата
 и время ближайшего запуска всех задач, а так же дата и время следующего
 запуска с учетом расписания каждой задачи.


См. также:


[IScheduledInvoke](IScheduledInvoke.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
