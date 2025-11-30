# IDalConnection.CreateCommandO

IDalConnection.CreateCommandO
-


# IDalConnection.CreateCommandO


## Синтаксис


CreateCommandO(Option: [DalCommandOption](../../Enums/DalCommandOption.htm)):
 [IDalCommand](../IDalCommand/IDalCommand.htm);


## Параметры


Option. Режим работы SQL-запросов.


## Описание


Метод CreateCommandO создаёт
 команду, используемую для выполнения SQL-запросов в заданном режиме.


## Комментарии


В текущей реализации в качестве значения входного параметра Option
 метод поддерживает только два режима: [DalCommandOption.None](../../Enums/DalCommandOption.htm)
 и [DalCommandOption.NoCursorInQuery](../../Enums/DalCommandOption.htm).


## Пример


Для выполнения примера предполагается наличие сервера на базе СУБД Microsoft
 SQL Server. На сервере создан репозиторий TestRepository.


Добавьте ссылки на системные сборки: Dal.


	Sub UserProc;

	Var

	    MSSQLDriver: IDalDriver;

	    MSSQLDescriptor: IDalConnectionDescriptor;

	    MSSQLParams: IDalConnectionDescriptorParams;

	    MSSQLConnect: IDalConnection;

	    Com: IDalCommand;

	    Cur: IDalCursor;

	    CurFields: IDalCursorFields;

	    i: Integer;

	Begin

	    // Создание соединения

	    MSSQLDriver := New DalMsSql2012Driver.Create;

	    MSSQLDescriptor := MSSQLDriver.CreateDescriptor;

	    MSSQLParams := MSSQLDescriptor.Params;

	    MSSQLParams.Find("User Name").Value := "user";

	    MSSQLParams.Find("Password").Value := "password";

	    MSSQLParams.Find("Host BSTR").Value := "mssql_server";

	    MSSQLParams.Find("Database").Value := "TestRepository";

	    MSSQLConnect := MSSQLDescriptor.CreateConnection;

	    // Создание комманды

	    Com := MSSQLConnect.CreateCommandO(DalCommandOption.NoCursorInQuery);

	    Com.SQL := "Select * From Table";

	    // Получение результатов выполнения команды

	    Cur := Com.CreateCursor;

	    While Not Cur.Eof Do

	        CurFields := Cur.Fields;

	        For i := 0 To CurFields.Count - 1 Do

	            Debug.Write(CurFields.Item(i).Value);

	            Debug.Write(" ");

	        End For;

	        Debug.WriteLine("");

	        Cur.Next;

	    End While;

	    Cur.Close;

	    Com.Close;

	End Sub UserProc;


При выполнении примера будет создано новое соединение с сервером СУБД.
 Будет создана команда, которая выполняет SQL-запросы без использования
 курсоров. Будет выполнен SQL-запрос и получены его результаты. Результаты
 будут выведены в консоль среды разработки.


См. также:


[IDalConnection](IDalConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
