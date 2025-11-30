# IScheduledInvoke.Value

IScheduledInvoke.Value
-


# IScheduledInvoke.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value возвращает параметры
 события выполнения задачи, представленные в виде массива значений в формате
 Variant.


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

	    v: Array;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("TASK_CONTAINTER").Bind As IScheduledTasksContainer;

	    Tasks := Cont.Tasks;

	    Task := Tasks.Item(0).Bind As IScheduledTask;

	    Invoke := Task.CreateInvokeEvent(DateTime.Now);

	    v := Invoke.Value As Array;

	    For i := 0 To v.Length - 1 Do

	        Debug.WriteLine(v[i]);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены элементы
 массива, который содержит список параметров события, осуществляющего выполнение
 первой задачи контейнера запланированных задач.


См. также:


[IScheduledInvoke](IScheduledInvoke.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
