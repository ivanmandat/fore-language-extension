# IScheduledTaskResults.Item

IScheduledTaskResults.Item
-


# IScheduledTaskResults.Item


## Синтаксис


Item(Index: Integer): [IScheduledTaskResult](../IScheduledTaskResult/IScheduledTaskResult.htm);


## Параметры


Index - индекс записи в истории
 выполнения задачи.


## Описание


Свойство Item возвращает запись
 в истории выполнения задачи, индекс которой передается посредством параметра
 Index.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cont: IScheduledTasksContainer;

	    Tasks: IMetabaseObjectDescriptors;

	    Task: IScheduledTask;

	    Results: IScheduledTaskResults;

	    Result: IScheduledTaskResult;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("TASK_CONTAINTER").Bind As IScheduledTasksContainer;

	    Tasks := Cont.Tasks;

	    Task := Tasks.Item(0).Bind As IScheduledTask;

	    Results := Task.GetResults;

	    For i := 0 To Results.Count - 1 Do

	        Result := Results.Item(i);

	        Debug.Write(Result.StartDateTime.ToString + " | ");

	        Debug.Write(Result.FinishDateTime.ToString + " | ");

	        If Result.Succeeded Then

	            Debug.WriteLine("Завершена успешно");

	        Else

	            Debug.WriteLine("Завершена с ошибкой");

	        End If;

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена история
 выполнения первой задачи контейнера запланированных задач. Будет выведена
 дата и время начала и завершения выполнения задачи, а так же результат
 выполнения (Завершена успешно/с ошибкой).


См. также:


[IScheduledTaskResults](IScheduledTaskResults.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
