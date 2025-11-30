# Работа с курсорами в результатах выполнения SQL-запроса: Сборка Dal

Работа с курсорами в результатах выполнения SQL-запроса: Сборка Dal
-


# Работа с курсорами в результатах выполнения SQL-запроса


Если результатом выполнения команды или [хранимой
 процедуры](Dal_ExecStoredProcedure.htm) является курсор, то для его получения в коллекции [IDalCommand.Params](../Interface/IDalCommand/IDalCommand.Params.htm)
 необходимо создать параметр и задать для него в качестве [предназначения](../Interface/IDalCommandParam/IDalCommandParam.Direction.htm)
 - [DalParamDirection.RefCursor](../Enums/DalParamDirection.htm).
 После [выполнения](../Interface/IDalCommand/IDalCommand.Execute.htm)
 команды приведите [значение](../Interface/IDalCommandParam/IDalCommandParam.Value.htm)
 параметра к типу [IDalCursor](../Interface/IDalCursor/IDalCursor.htm)
 для работы с полученным курсором:


	Var

	    //...

	    ORCLConnect: IDalConnection;

	    Command: IDalCommand;

	    Param: IDalCommandParam;

	    ResultCursor: IDalCursor;

	    //...

	Begin

	    //...

	    Command := ORCLConnect.CreateCommand;

	    //Выполнение функции

	    Command.SQL := "Func_1";

	    Command.Type := DalCommandType.StoredProcedure;

	    //Создание параметра, в котором будет доступен курсор,
	 являющийся результатом работы функции

	    Param := Command.Params.Add("Result");

	    Param.Direction := DalParamDirection.RefCursor;

	    Command.Execute;

	    Command.Close;

	    ResultCursor := Param.Value As IDalCursor;

	    //Дальнейшая работа с полученным курсором

	    //...


## Курсор в значениях полей


Если результатом выполнения команды или хранимой процедуры является
 набор данных произвольной структуры, то некоторые поля также могут содержать
 в качестве значения курсоры данных. Для таких полей будет установлен [тип
 данных](../Interface/IDalCursorField/IDalCursorField.DataDomain.htm) - [DbDataDomain.RefCur](../Enums/DbDataDomain.htm).
 Для работе с данными этих полей необходимо значение поля в текущей записи
 привести к типу [IDalCursor](../Interface/IDalCursor/IDalCursor.htm):


	Var

	    //...

	    ORCLConnect: IDalConnection;

	    Command: IDalCommand;

	    Param: IDalCommandParam;

	    ResultCursor, FieldCursor: IDalCursor;

	    Field: IDalCursorField;

	    v: Variant;

	    //...

	Begin

	    //...

	    Command := ORCLConnect.CreateCommand;

	    //Выполнение функции

	    Command.SQL := "Func_1";

	    Command.Type := DalCommandType.StoredProcedure;

	    //Создание параметра, в котором будет доступен результат работы функции

	    Param := Command.Params.Add("Result");

	    Param.Direction := DalParamDirection.RefCursor;

	    Command.Execute;

	    Command.Close;

	    ResultCursor := Param.Value As IDalCursor;

	    While Not ResultCursor.Eof Do

	        For Each Field In ResultCursor.Fields Do

	            If Field.DataDomain = DbDataDomain.RefCur Then

	                FieldCursor := Field.Value As IDalCursor;

	                //Работа с курсором, который получен из значения поля

	                //...

	            Else

	                v := Field.Value;

	                //Работа со значением поля

	            End If;

	        End For;

	        ResultCursor.Next;

	    End While;

	//...


См.
 также:


[Выполнение
 хранимых процедур и функций](Dal_ExecStoredProcedure.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
