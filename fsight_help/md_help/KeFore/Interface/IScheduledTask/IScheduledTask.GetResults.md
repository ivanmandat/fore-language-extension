# IScheduledTask.GetResults

IScheduledTask.GetResults
-


# IScheduledTask.GetResults


## Синтаксис


GetResults: [IScheduledTaskResults](../IScheduledTaskResults/IScheduledTaskResults.htm);


## Описание


Метод GetResults возвращает
 историю выполнения задачи.


## Комментарии


Для сброса истории выполнения задачи используйте метод [IScheduledTask.ResetResults](IScheduledTask.ResetResults.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 запланированных задач с идентификатором SCHEDULEDTASKSCONTAINER.


Добавьте ссылки на системные сборки: Fore, Metabase.


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

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем контейнер запланированных задач

    Cont := MB.ItemById("SCHEDULEDTASKSCONTAINER").Bind As IScheduledTasksContainer;

    // Получаем первую задачу

    Tasks := Cont.Tasks;

    Task := Tasks.Item(0).Bind As IScheduledTask;

    // Получаем историю выполнения задачи

    Results := Task.GetResults;

    // Выводим историю в окно консоли

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


В результате выполнения примера в консоль среды разработки будет выведена
 история выполнения первой задачи контейнера запланированных задач. Будет
 выведена дата и время начала и завершения выполнения задачи, а так же
 результат выполнения: успешно или с ошибкой.


См. также:


[IScheduledTask](IScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
