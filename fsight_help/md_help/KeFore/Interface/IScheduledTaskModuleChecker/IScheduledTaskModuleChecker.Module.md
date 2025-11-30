# IScheduledTaskModuleChecker.Module

IScheduledTaskModuleChecker.Module
-


# IScheduledTaskModuleChecker.Module


## Синтаксис


Module: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Module определяет
 сборку, модуль или форму, при выполнении которых будет выполняться задача.


## Комментарии


Сборка, модуль или форма должны содержать [функции](IScheduledTaskModuleChecker.Macro.htm)
 с сигнатурой Function <name> (<param>:
 IScheduledTask): Boolean.


Свойство актуально, если [IScheduledTask.CreateChecker](../IScheduledTask/IScheduledTask.CreateChecker.htm) = [ScheduledTaskCheckerType](../../Enums/ScheduledTaskCheckerType.htm).Module.


## Пример


Для выполнения примера предполагается наличие:


	- контейнера запланированных задач с идентификатором «TASK_CONTAINER»,
	 содержащего задачу;


	- модуля с идентификатором «CHECK_FUNCTION», содержащего функцию
	 с идентификатором «CHECK_FUNCTION»;


Добавьте ссылки на системные сборки Metabase, Fore.


			Sub UserProc;

Var

    MB: IMetabase;

    cont: IScheduledTasksContainer;

    task: IScheduledTask;

    TChecker: IScheduledTaskChecker;

    ModuleChecker: IScheduledTaskModuleChecker;

Begin

    MB := metabaseClass.Active;

    cont := MB.ItemById("TASK_CONTAINER").Edit As IScheduledTasksContainer;

    task := cont.Tasks.Item(0).Edit As IScheduledTask;

    TChecker := task.CreateChecker(ScheduledTaskCheckerType.Module);

    ModuleChecker := TChecker As IScheduledTaskModuleChecker;

    Debug.WriteLine("Установлено условие выполнения задачи: ");

    Select Case (TChecker.Type As Integer)

        Case 0: Debug.WriteLine(" - Выполнять задачу, если функция выполнена с результатом");

        Case 1: Debug.WriteLine(" - Выполнять задачу, если правило валидации выполнено с результатом");

    End Select;

    If TChecker.Check = False Then

        ModuleChecker.Module := MB.ItemById("CHECK").Bind;

        ModuleChecker.Macro := "CHECK_FUNCTION";

        ModuleChecker.ExpectedResult := True;

        Else

            Debug.WriteLine(TChecker.CheckMsg);

    End If;

    task.TaskChecker := TChecker;

    (task As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будут установлены настройки условий
 выполнения задачи:


	- установлено условие выполнения задачи «Выполнять
	 задачу, если функция выполнена с результатом»;


	- выбраны модуль и функция с указанными идентификаторами;


	- установлен результат выполнения функции «истина».


См. также:


[IScheduledTaskModuleChecker](IScheduledTaskModuleChecker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
