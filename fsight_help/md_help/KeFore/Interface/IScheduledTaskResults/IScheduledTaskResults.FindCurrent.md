# IScheduledTaskResults.FindCurrent

IScheduledTaskResults.FindCurrent
-


# IScheduledTaskResults.FindCurrent


## Синтаксис


FindCurrent(Current: DateTime): [IScheduledTaskResult](../IScheduledTaskResult/IScheduledTaskResult.htm);


## Параметры


Current - дата и время, относительно
 которой осуществляется поиск.


## Описание


Метод FindCurrent осуществляет
 поиск записи в истории выполнения задачи. Будет осуществляться поиск первой
 записи, дата и время начала выполнения которой, меньше значения Current.


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

	    d: DateTime;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("TASK_CONTAINTER").Bind As IScheduledTasksContainer;

	    Tasks := Cont.Tasks;

	    Task := Tasks.Item(0).Bind As IScheduledTask;

	    Results := Task.GetResults;

	    d := DateTime.AddDays(DateTime.Now, -7);

	    Result := Results.FindCurrent(d);

	    If Result <> Null Then

	        Debug.WriteLine(Result.StartDateTime.ToString + " " + Result.FinishDateTime.ToString);

	        If Result.Succeeded Then

	            Debug.WriteLine("Завершена успешно");

	        Else

	            Debug.WriteLine("Завершена с ошибкой");

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в истории выполнения первой задачи будет осуществлен
 поиск записи, соответствующей запуску задачи совершенному неделю назад,
 относительно текущей даты и времени. В случае удачного поиска, будет выведена
 дата и время начала и окончания выполнения задачи, а так же результат
 выполнения (Завершена успешно/с ошибкой).


См. также:


[IScheduledTaskResults](IScheduledTaskResults.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
