# ITask.ContinueWith

ITask.ContinueWith
-


# ITask.ContinueWith


## Синтаксис


ContinueWith(Action: [ITaskAction](../ITaskAction/ITaskAction.htm);
 Options: [TaskContinuationOptions](../../Enums/TaskContinuationOptions.htm)):
 [ITask](ITask.htm);


## Параметры


Action. Действие,
 которое будет выполнено при запуске создаваемой задачи;


Options. Условие,
 при котором следующая задача будет выполнена.


## Описание


Метод ContinueWith создает задачу
 выполнения действия, запуск которой зависит от результата выполнения текущей
 задачи, и добавляет ее в очередь выполнения задач.


## Комментарии


В качестве значения параметра Action
 должен быть указан экземпляр объекта пользовательского класса, который
 реализует интерфейс [ITaskAction](../ITaskAction/ITaskAction.htm).
 Метод [Action](../ITaskAction/ITaskAction.Action.htm) указанного
 интерфейса будет вызван после выполнения текущей задачи если соблюдено
 условие, указанное в параметре Options.


Все добавляемые в очередь задачи должны добавляться синхронно т.е. параметр
 Options должен состоять из комбинации
 значения [TaskContinuationOptions.ExecuteSynchronously](../../Enums/TaskContinuationOptions.htm)
 и необходимого условия выполнения. Это означает, что каждая задача будет
 ожидать завершения всех задач, которые добавлены в ее очередь. В тоже
 время в задачах можно получить параметры той задачи, в очередь которой
 они добавлены. Значения в комбинации разделяются ключевым словом OR.


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней двух кнопок. Первая кнопка будет использована для создания и запуска
 задач, вторая для получения результата выполнения. В репозитории имеется
 соединение с базой данных с идентификатором BD.


	Class TESTForm: Form

	    Button1: Button;

	    Button2: Button;

	    Task1, Task2, Task3: ITask;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        MB: IMetabase;

	        DBInst: IDatabaseInstance;

	        SC: ISecurityConnection2;

	        SCAsync: ISecurityConnection;

	        Command: IDalCommand;

	        DalTask: IDalCommandTask;

	        Next1: OneTaskAction;

	        Next2: TwoTaskAction;

	    Begin

	        MB := MetabaseClass.Active;

	        DBInst := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	        SC := DBInst.Connection As ISecurityConnection2;

	        //Проверка соединения на возможность работы в асинхронном режиме

	        If SC.Type <> DalConnectionType.Async Then

	            SCAsync := SC.Clone(DalConnectionType.Async);

	        End If;

	        //Команда извлечения данных

	        Command := SCAsync.CreateCommand("");

	        //...настройка параметров команды Command

	        //Создание задачи для выполнения
	 SQL-запроса

	        DalTask := (Command As IDalCommand2).CreateTask(DalCommandExecuteType.CreateCursor);

	        Task1 := DalTask As ITask;

	        //Создание задач, которые будут запущены после выполнения задачи Task1

	        //Задача, выполняемая если Task1 была завершена успешно

	        Next1 := New OneTaskAction.Create;

	        Task2 := Task1.ContinueWith(Next1, TaskContinuationOptions.ExecuteSynchronously Or TaskContinuationOptions.OnlyOnRanToCompletion);

	        //Задача, выполняемая если Task1 была завершена c ошибкой

	        Next2 := New TwoTaskAction.Create;

	        Task3 := Task1.ContinueWith(Next2, TaskContinuationOptions.ExecuteSynchronously Or TaskContinuationOptions.OnlyOnFaulted);

	        Task1.Start;

	    End Sub Button1OnClick;


	    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Result1: IDalCommand;

	        Result2, Result3: Variant;

	    Begin

	        //Результат задачи Task1

	        If Task1.IsCompleted And (Task1.State = TaskState.RanToCompletion) Then

	            Result1 := (Task1 As IDalCommandTask).Result;

	            //...

	        End If;

	        //Результат задачи Task2

	        If Task1.IsCompleted And (Task1.State = TaskState.RanToCompletion) Then

	            Result2 := Task2;

	            //...

	        End If;

	        //Результат задачи Task3

	        If Task1.IsCompleted And (Task1.State = TaskState.RanToCompletion) Then

	            Result3 := Task3;

	            //...

	        End If;

	    End Sub Button2OnClick;


	End Class TESTForm;


	Class OneTaskAction: Object, ITaskAction

	    Public Function Action(Antecedent: ITask): Variant;

	    Var

	        //...

	        Result: Variant;

	    Begin

	        //Действие, которое выполняется если удачно завершена задача Task1

	        Result := ...

	        Return Result;

	    End Function Action;

	End Class OneTaskAction;


	Class TwoTaskAction: Object, ITaskAction

	    Public Function Action(Antecedent: ITask): Variant;

	    Var

	        //...

	        TaskException: IException;

	        Result: Variant;

	    Begin

	        //Действие, которое выполняется если задача Task1 завершена с ошибкой

	        //...

	        //Ошибка, возникшая при выполнении задачи Task1

	        TaskException := Antecedent.Exception;

	        //...

	        Result := ...

	        Return Result;

	    End Function Action;

	End Class TwoTaskAction;


После запуска формы при нажатии первой кнопки будут созданы три задачи.
 Первая задача будет запущена и в асинхронном режиме выполнит какой-либо
 SQL-запрос. В зависимости от того, с каким результатом завершилась первая
 задача, будет запущена вторая либо третья задача. Вторая задача выполняется,
 если первая завершилась успешно. Третья задача выполняется, если первая
 завершилась с ошибкой. В коде третей задачи, используя параметр Antecedent
 можно получить параметры первой задачи, в частности ошибку, которая возникла
 при ее выполнении.


При нажатии на вторую кнопку можно получить и обработать результаты
 выполнения задач.


См. также:


[ITask](ITask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
