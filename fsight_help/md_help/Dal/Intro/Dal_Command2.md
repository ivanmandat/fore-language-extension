# Выполнение SQL-запросов в асинхронном режиме: Сборка Dal

Выполнение SQL-запросов в асинхронном режиме: Сборка Dal
-


# Выполнение SQL-запросов в асинхронном режиме


Асинхронное выполнение позволяет, не дожидаясь результата выполнения
 SQL-запроса, продолжить работу в приложении. Для этого предварительно
 должно быть создано [специализированное
 соединение](Dal_Connection.htm#async). В рамках этого соединения, используя метод [IDalConnection.CreateCommand](../Interface/IDalConnection/IDalConnection.CreateCommand.htm)
 необходимо создать команду и настроить ее параметры. В рамках специализированного
 соединения не поддерживается выполнение команд с помощью метода [IDalCommand.Execute](../Interface/IDalCommand/IDalCommand.Execute.htm)
 или [IDalCommand.ExecuteWithoutLast](../Interface/IDalCommand/IDalCommand.ExecuteWithoutLast.htm).
 Выполнение команд осуществляется в виде отдельных задач. Работа с задачами
 в языке Fore производится с помощью
 свойств и методов интерфейса [ITask](ForeSys.chm::/Interface/ITask/ITask.htm).
 Задачу выполнения SQL-запросов в асинхронном режиме описывает интерфейс
 [IDalCommandTask](../Interface/IDalCommandTask/IDalCommandTask.htm).
 Для создания задачи необходимо созданную команду привести к типу [IDalCommand2](../Interface/IDalCommand2/IDalCommand2.htm)
 и вызвать метод [IDalCommand2.CreateTask](../Interface/IDalCommand2/IDalCommand2.CreateTask.htm):


	Var

	    //...

	    ORCLAsyncConnect: IDalConnection;

	    Command: IDalCommand;

	    CmdParams: IDalCommandParams;

	    Param: IDalCommandParam;

	    TaskCommand: IDalCommandTask;

	    //...

	Begin

	    //...

	    Command := ORCLAsyncConnect.CreateCommand;

	    Command.SQL := "insert into Table1(Code) values(:ParamArray)";

	    Command.Parse;

	    CmdParams := Command.Params;

	    CmdParams.Item(0).DataType := DbDataType.Integer;

	    Command.MaxParamsRows := 10000;

	    //Установка значений параметра

	    //...

	    //Создание задачи выполнения SQL-запроса в асинхронном режиме

	    TaskCommand := (Command As IDalCommand2).CreateTask(DalCommandExecuteType.Execute);


Для выполнения задачи необходимо привести ее к типу [ITask](ForeSys.chm::/Interface/ITask/ITask.htm)
 и вызвать метод [ITask.Start](ForeSys.chm::/Interface/ITask/ITask.Start.htm).


	Var

	    //...

	    TaskCommand: IDalCommandTask;

	    //...

	Begin

	    //...

	    (TaskCommand As ITask).Start;


После этого SQL-запрос будет выполняться параллельно текущему приложению.
 Используя свойство [ITask.State](ForeSys.chm::/Interface/ITask/ITask.State.htm)
 можно отслеживать состояние выполнения задачи. Результат выполнения SQL-запроса
 можно получить в свойстве [IDalCommandTask.Result](../Interface/IDalCommandTask/IDalCommandTask.Result.htm).


См.
 также:


[Введение](Dal_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
