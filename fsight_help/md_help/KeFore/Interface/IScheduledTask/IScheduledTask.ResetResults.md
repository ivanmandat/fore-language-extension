# IScheduledTask.ResetResults

IScheduledTask.ResetResults
-


# IScheduledTask.ResetResults


## Синтаксис


ResetResults;


## Описание


Метод ResetResults очищает историю
 выполнения задачи и переводит ее в состояние «Готова».


## Комментарии


Для получения истории выполнения задачи используйте метод [IScheduledTask.GetResults](IScheduledTask.GetResults.htm).


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

    Task := Tasks.Item(0).Edit As IScheduledTask;

    // Очищаем историю выполнения задачи

    Task.ResetResults;

    // Сохраняем изменения

    (Task As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера история выполнения первой задачи будет
 сброшена, задача будет переведена в состояние «Готова».


См. также:


[IScheduledTask](IScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
