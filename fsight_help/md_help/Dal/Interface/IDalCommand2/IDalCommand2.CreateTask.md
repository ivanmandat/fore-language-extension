# IDalCommand2.CreateTask

IDalCommand2.CreateTask
-


# IDalCommand2.CreateTask


## Синтаксис


CreateTask(ExecuteType: [DalCommandExecuteType](../../Enums/DalCommandExecuteType.htm)): [IDalCommandTask](../IDalCommandTask/IDalCommandTask.htm);


## Параметры


ExecuteType. Назначение задачи.


## Описание


Метод CreateTask создает новую задачу, предназначенную для работы с базой данных с помощью SQL-запросов в асинхронном режиме..


## Комментарии


Для управления задачей приведите созданный объект к типу [ITask](ForeSys.chm::/Interface/ITask/ITask.htm).


## Пример


Для выполнения примера предполагается наличие формы и расположенных на ней шести кнопок. Первые три кнопки будут использованы для создания и запуска задач, остальные - для получения результата выполнения задач. В репозитории имеется соединение с базой данных с идентификатором «BD». В базе данных на сервере должна быть создана таблица с физическим именем «Table1» и процедура «USERSTOREDPROCEDURE». В таблице предполагается наличие большого количества записей. Процедура выполняет какое-либо длительное действие и имеет один выходной параметр, принимающий целочисленное значение.


			Class TESTForm: Form

    Button1: Button;

    Button2: Button;

    Button3: Button;

    Button4: Button;

    Button5: Button;

    Button6: Button;

    DalTask1, DalTask2, DalTask3: IDalCommandTask;

    Task1, Task2, Task3: ITask;


    //Задача извлечения данных
    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        MB: IMetabase;

        DBInst: IDatabaseInstance;

        SC: ISecurityConnection2;

        SCAsync: ISecurityConnection;

        Command: IDalCommand;

        DalTask: IDalCommandTask;

    Begin

        MB := MetabaseClass.Active;

        DBInst := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

        SC := DBInst.Connection As ISecurityConnection2;

        //Проверка соединения на возможность работы в асинхронном режиме

        If SC.Type <> DalConnectionType.Async Then

            SCAsync := SC.Clone(DalConnectionType.Async);

        End If;

        //Команда извлечения данных
        Command := SCAsync.CreateCommand("Select * From Table1");

        //Создание задачи для извлечения данных
        DalTask := (Command As IDalCommand2).CreateTask(DalCommandExecuteType.CreateCursor);

        Task1 := DalTask As ITask;

        Task1.Start;

    End Sub Button1OnClick;


    //Задача изменения данных
    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        MB: IMetabase;

        DBInst: IDatabaseInstance;

        SC: ISecurityConnection2;

        SCAsync: ISecurityConnection;

        Command: IDalCommand;

        DalTask: IDalCommandTask;

    Begin

        MB := MetabaseClass.Active;

        DBInst := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

        SC := DBInst.Connection As ISecurityConnection2;

        //Проверка соединения на возможность работы в асинхронном режиме

        If SC.Type <> DalConnectionType.Async Then

            SCAsync := SC.Clone(DalConnectionType.Async);

        End If;

        //Команда изменения данных
        Command := SCAsync.CreateCommand("Insert Into Table1...");

        //Создание задачи для изменения данных
        DalTask := (Command As IDalCommand2).CreateTask(DalCommandExecuteType.Execute);

        Task2 := DalTask As ITask;

        Task2.Start;

    End Sub Button2OnClick;


    //Задача выполнения хранимой процедуры на сервере
    Sub Button3OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        MB: IMetabase;

        DBInst: IDatabaseInstance;

        SC: ISecurityConnection2;

        SCAsync: ISecurityConnection;

        Command: IDalCommand;

        Param: IDalCommandParam;

        DalTask: IDalCommandTask;

    Begin

        MB := MetabaseClass.Active;

        DBInst := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

        SC := DBInst.Connection As ISecurityConnection2;

        //Проверка соединения на возможность работы в асинхронном режиме

        If SC.Type <> DalConnectionType.Async Then

            SCAsync := SC.Clone(DalConnectionType.Async);

        End If;

        //Команда изменения данных
        Command := SCAsync.CreateCommand("");

        Command.SQL := "USERSTOREDPROCEDURE";

        Command.Type := DalCommandType.StoredProcedure;

        Param := Command.Params.Add("ITEM");

        Param.Direction := DalParamDirection.Output;

        Param.DataType := DbDataType.Integer;

        //Создание задачи для изменения данных
        DalTask := (Command As IDalCommand2).CreateTask(DalCommandExecuteType.Execute);

        Task3 := DalTask As ITask;

        Task3.Start;

    End Sub Button3OnClick;


    Sub Button4OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        If Not IsNull(Task1) Then

            TaskResult(Task1);

        End If;

    End Sub Button4OnClick;


    Sub Button5OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        If Not IsNull(Task2) Then

            TaskResult(Task2);

        End If;

    End Sub Button5OnClick;


    Sub Button6OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        If Not IsNull(Task3) Then

            TaskResult(Task3);

        End If;

    End Sub Button6OnClick;


    Sub TaskResult(Task: ITask);

    Var

        DalTask: IDalCommandTask;

        Result: IDalCommand;

        Count: Integer;

        Params: IDalCommandParams;

        Cur: IDalCursor;

    Begin

        If Task.IsCompleted And (Task.State = TaskState.RanToCompletion) Then

            DalTask := Task As IDalCommandTask;

            Result := DalTask.Result;

            If DalTask.ExecuteType = DalCommandExecuteType.Execute Then

                If Result.Type <> DalCommandType.StoredProcedure Then

                    //Количество обработанных записей
                    Count := Result.Execute;

                    //...
                Else

                    //Параметры, содержащие результат выполнения хранимой процедуры
                    Params := Result.Params;

                    //...
                End If;

            Else

                //Результирующий курсор с данными
                Cur := Result.CreateCursor;

                //...
            End If;

        End If;

    End Sub TaskResult;


End Class TESTForm;


После запуска формы нажатие одной из первых трех кнопок приведет к запуску задачи, выполняющей SQL-запрос к базе данных. Задача будет выполняться асинхронно относительно работы формы. Нажатие четвертой-шестой кнопки позволяет получить результат работы задачи. В зависимости от выполняемой задачи результат будет различен. Для проверки типа задачи и получения соответствующего результата используется процедура TaskResult.


Процедура TaskResult отработает, если задача выполнена без ошибок. При необходимости код данной процедуры можно изменить для проверки всех остальных состояний задач.


См. также:


[IDalCommand2](IDalCommand2.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
