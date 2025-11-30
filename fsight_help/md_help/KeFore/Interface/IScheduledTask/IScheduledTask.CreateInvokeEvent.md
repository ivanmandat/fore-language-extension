# IScheduledTask.CreateInvokeEvent

IScheduledTask.CreateInvokeEvent
-


# IScheduledTask.CreateInvokeEvent


## Синтаксис


CreateInvokeEvent(

                  Current:
 DateTime;

                  [Options:
 Integer = 0;]

                  [Second:
 Double = 0]

                  ):
 [IScheduledInvoke](../IScheduledInvoke/IScheduledInvoke.htm);


## Параметры


Current. Дата и время выполнения
 задачи;


Options. Параметр не поддерживается;


Second. Параметр не поддерживается.


## Описание


Метод CreateInvokeEvent создает
 новое событие выполнения задачи контейнера запланированных задач.


## Комментарии


Для успешного создания события для задачи должно быть установлено разрешение
 на выполнение и настроено расписание.


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

    Invoke: IScheduledInvoke;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем первую задачу в контейнере

    Cont := MB.ItemById("SCHEDULEDTASKSCONTAINER").Bind As IScheduledTasksContainer;

    Tasks := Cont.Tasks;

    Task := Tasks.Item(0).Bind As IScheduledTask;

    // Создаём событие выполнения задачи

    Invoke := Task.CreateInvokeEvent(DateTime.Now);

    Invoke.Invoke(MB);

End Sub UserProc;


В результате выполнения примера для первой задачи в контейнере будет
 создано событие выполнения задачи. В историю задачи будет добавлена соответствующая
 запись


См. также:


[IScheduledTask](IScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
