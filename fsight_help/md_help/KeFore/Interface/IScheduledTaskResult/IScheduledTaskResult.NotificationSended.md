# IScheduledTaskResult.NotificationSended

IScheduledTaskResult.NotificationSended
-


# IScheduledTaskResult.NotificationSended


## Синтаксис


NotificationSended: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство NotificationSended возвращает
 признак того, отправлено ли электронное сообщение после выполнения задачи.


## Комментарии


Допустимые значения:


	- Undefined. Значение
	 по умолчанию. Состояние возможно, только если не была настроена [отправка
	 уведомления](UiAppSrv.chm::/3_Work_Tasks/UiAppSrv_Work_Tasks_CreateTask_Rezult.htm);


	- On. После выполнения
	 задачи электронное письмо было отправлено;


	- Off. После выполнения
	 задачи электронное письмо не было отправлено.


## Пример


Для выполнения примера предполагается наличие контейнера запланированных
 задач с идентификатором «TASK_CONTAINER» и задачи вычисления регламентного
 отчета.


Добавьте ссылки на системные сборки: Metabase, Fore.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cont: IScheduledTasksContainer;

	    Tasks: IMetabaseObjectDescriptors;

	    Task: IScheduledTask;

	    Results: IScheduledTaskResults;

	    Result: IScheduledTaskResult;

	    res, i: Integer;

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

	        Else Debug.WriteLine("Завершена с ошибкой");

	        End If;

	        Select Case Result.NotificationSent

	            Case TriState.OffOption:

	                Debug.WriteLine("Электронное письмо не выслано");

	            Case TriState.OnOption:

	                Debug.WriteLine("Выслано электронное письмо");

	            Case TriState.Undefined:

	                Debug.WriteLine("Результаты выполнения задачи были сброшены");

	        End Select;

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена история выполнения
 первой задачи контейнера запланированных задач. Будут выведены дата и
 время начала и завершения выполнения задачи, результат выполнения задачи,
 а также признак того, было ли отправлено электронное сообщение после выполнения
 задачи.


См. также:


[IScheduledTaskResult](IScheduledTaskResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
