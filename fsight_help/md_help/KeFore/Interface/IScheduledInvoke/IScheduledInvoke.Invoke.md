# IScheduledInvoke.Invoke

IScheduledInvoke.Invoke
-


# IScheduledInvoke.Invoke


## Синтаксис


Invoke(Mb: [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm));


## Параметры


Mb - репозиторий, в рамках
 которого осуществляется выполнения задачи.


## Описание


Метод Invoke вызывает наступление
 события выполнения задачи.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER".


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

	    Cont := MB.ItemById("TASK_CONTAINTER").Bind As IScheduledTasksContainer;

	    Tasks := Cont.Tasks;

	    Task := Tasks.Item(0).Bind As IScheduledTask;

	    Invoke := Task.CreateInvokeEvent(DateTime.Now);

	    Invoke.Invoke(MB);

	End Sub UserProc;


После выполнения примера будет создано событие выполнения первой задачи
 контейнера запланированных задач. Данное событие будет выполнено. В историю
 будет добавлена запись с учетом текущего времени.


См. также:


[IScheduledInvoke](IScheduledInvoke.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
