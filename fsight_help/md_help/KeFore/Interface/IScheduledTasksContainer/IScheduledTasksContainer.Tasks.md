# IScheduledTasksContainer.Tasks

IScheduledTasksContainer.Tasks
-


# IScheduledTasksContainer.Tasks


## Синтаксис


Tasks: [IMetabaseObjectDescriptors](KeSom.chm::/Interface/IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Описание


Свойство Tasks возвращает список
 описаний задач, созданных в контейнере.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cont: IScheduledTasksContainer;

	    Tasks: IMetabaseObjectDescriptors;

	    MDesc: IMetabaseObjectDescriptor;

	    Task: IScheduledTask;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("TASK_CONTAINTER").Bind As IScheduledTasksContainer;

	    Tasks := Cont.Tasks;

	    For Each MDesc In Tasks Do

	        Debug.Write("Задача: " + MDesc.Name + " Состояние: ");

	        Task := MDesc.Bind As IScheduledTask;

	        Select Case (Task.State As Integer)

	            Case 0: Debug.WriteLine("Не активна");

	            Case 1: Debug.WriteLine("Готова");

	            Case 2: Debug.WriteLine("Выполняется");

	            Case 3: Debug.WriteLine("Завершена");

	            Case 4: Debug.WriteLine("Ошибка");

	        End Select;

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен список
 задач, а также состояние каждой задачи.


См. также:


[IScheduledTasksContainer](IScheduledTasksContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
