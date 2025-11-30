# Выполнения задачи контейнера запланированных задач

Выполнения задачи контейнера запланированных задач
-


# Выполнения задачи контейнера запланированных задач


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "NewSTCont".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cont: IScheduledTasksContainer;

	    Tasks: IMetabaseObjectDescriptors;

	    Task: IScheduledTask;

	    Invoke: IScheduledInvoke;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("NewSTCont").Bind As IScheduledTasksContainer;

	    Tasks := Cont.Tasks;

	    Task := Tasks.Item(0).Bind As IScheduledTask;

	    Invoke := Task.CreateInvokeEvent(DateTime.Now);

	    Invoke.Invoke(MB);

	End Sub UserProc;


После выполнения примера будет создано событие выполнения первой задачи
 контейнера запланированных задач. Данное событие будет выполнено. В историю
 будет добавлена запись с учетом текущей даты и времени.


См. также:


[Примеры](KeFore_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
