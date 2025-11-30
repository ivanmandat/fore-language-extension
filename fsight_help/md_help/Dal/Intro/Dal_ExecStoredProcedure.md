# Выполнение хранимых процедур и функций: Сборка Dal

Выполнение хранимых процедур и функций: Сборка Dal
-


# Выполнение хранимых процедур и функций


Созданная [команда](Dal_Command.htm) для выполнения SQL-запросов также позволяет выполнить хранимую процедуру или функцию, которые имеются в базе данных. Для этого в свойстве [IDalCommand.SQL](../Interface/IDalCommand/IDalCommand.SQL.htm) вместо запроса необходимо указать наименование процедуры/функции, а в свойстве [IDalCommand.Type](../Interface/IDalCommand/IDalCommand.Type.htm) указать тип [DalCommandType.StoredProcedure](../Enums/DalCommandType.htm). Для получения результатов работы функций в коллекции [IDalCommand.Params](../Interface/IDalCommand/IDalCommand.Params.htm) необходимо создать параметр. Для этого параметра в свойстве [IDalCommandParam.Direction](../Interface/IDalCommandParam/IDalCommandParam.Direction.htm) указать значение [DalParamDirection.ReturnValue](../Enums/DalParamDirection.htm) или [DalParamDirection.RefCursor](../Enums/DalParamDirection.htm). Запуск на выполнение производится при вызове метода [IDalCommand.Execute](../Interface/IDalCommand/IDalCommand.Execute.htm):


			Var

    //...
    ORCLConnect: IDalConnection;

    Command: IDalCommand;

    Param: IDalCommandParam;

    //...
Begin

    //...
    Command := ORCLConnect.CreateCommand;

    //Выполняемая функция - F_LOAD
    Command.SQL := "F_LOAD";

    Command.Type := DalCommandType.StoredProcedure;

    //Создание параметра, в котором будет доступен результат работы функции
    Param := Command.Params.Add("Result");

    Param.Direction := DalParamDirection.ReturnValue;

    Command.Execute;

    Command.Close;

    Debug.WriteLine("Результирующее значение: " + Param.Value);


См. также:


[Введение](Dal_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
