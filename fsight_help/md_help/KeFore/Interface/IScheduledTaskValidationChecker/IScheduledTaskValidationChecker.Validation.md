# IScheduledTaskValidationChecker.Validation

IScheduledTaskValidationChecker.Validation
-


# IScheduledTaskValidationChecker.Validation


## Синтаксис


Validation: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Validation определяет
 правило валидации, при выполнении которого будет выполняться задача.


## Комментарии


Свойство актуально, если [IScheduledTask.CreateChecker](../IScheduledTask/IScheduledTask.CreateChecker.htm) = [ScheduledTaskCheckerType](../../Enums/ScheduledTaskCheckerType.htm).Validation.


## Пример


Для выполнения примера предполагается наличие:


	- контейнера запланированных задач с идентификатором «TASK_CONTAINER»,
	 содержащего задачу;


	- базы данных временных рядов с идентификатором «RUBRICATOR»,
	 содержащей правило валидации с идентификатором «VALIDATION».


Добавьте ссылки на системные сборки Metabase, Fore.


			Sub UserProc;

Var

    MB: IMetabase;

    cont: IScheduledTasksContainer;

    task: IScheduledTask;

    TChecker: IScheduledTaskChecker;

    ValidationChecker: IScheduledTaskValidationChecker;

Begin

    MB := metabaseClass.Active;

    cont := MB.ItemById("TASK_CONTAINER").Edit As IScheduledTasksContainer;

    task := cont.Tasks.Item(0).Edit As IScheduledTask;

    TChecker := task.CreateChecker(ScheduledTaskCheckerType.Validation);

    ValidationChecker := TChecker As IScheduledTaskValidationChecker;

    Debug.WriteLine("Установлено условие выполнения задачи: ");

    Select Case (TChecker.Type As Integer)

        Case 0: Debug.WriteLine(" - Выполнять задачу, если функция выполнена с результатом");

        Case 1: Debug.WriteLine(" - Выполнять задачу, если правило валидации выполнено с результатом");

    End Select;

    ValidationChecker.Validation := MB.ItemByIdNamespace("VALIDATION", MB.ItemById("RUBRICATOR").Key).Bind;

    ValidationChecker.Condition := STValidationCheckerConditionType.Equal;

    ValidationChecker.ExceptionCount := 0;

    task.TaskChecker := TChecker;

    (task As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будут установлены настройки условий
 выполнения задачи:


	- установлено условие выполнения задачи «Выполнять
	 задачу, если правило валидации выполнено с результатом»;


	- выбрано правило валидации;


	- установлен результат выполнения правила валидации.


См. также:


[IScheduledTaskValidationChecker](IScheduledTaskValidationChecker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
