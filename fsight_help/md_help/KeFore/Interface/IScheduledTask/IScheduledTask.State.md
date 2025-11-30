# IScheduledTask.State

IScheduledTask.State
-


# IScheduledTask.State


## Синтаксис


State: [ScheduledTaskState](../../Enums/ScheduledTaskState.htm);


## Описание


Свойство State возвращает состояние
 задачи в текущий момент времени.


## Комментарии


Для получения истории выполнения задачи используйте свойство [IScheduledTask.GetResults](IScheduledTask.GetResults.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 запланированных задач с идентификатором SCHEDULEDTASKSCONTAINER.


Добавьте ссылки на системные сборки: Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Cont: IScheduledTasksContainer;

    Tasks: IMetabaseObjectDescriptors;

    i: integer;

    Task: IScheduledTask;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем контейнер запланированных задач

    Cont := MB.ItemById("SCHEDULEDTASKSCONTAINER").Bind As IScheduledTasksContainer;

    // Выводим состояние всех задач

    Tasks := Cont.Tasks;

    For i := 0 To Tasks.Count - 1 Do

        Task := Tasks.Item(i).Bind As IScheduledTask;

        Debug.Write("Задача: " + (Task As IMetabaseObjectDescriptor).Name + " Состояние: ");

        Select Case (Task.State As Integer)

            Case 0: Debug.WriteLine("Неактивна");

            Case 1: Debug.WriteLine("Готова");

            Case 2: Debug.WriteLine("Выполняется");

            Case 3: Debug.WriteLine("Завершена");

            Case 4: Debug.WriteLine("Ошибка");

        End Select;

    End For;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен список
 задач, а также состояние каждой задачи.


См. также:


[IScheduledTask](IScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
