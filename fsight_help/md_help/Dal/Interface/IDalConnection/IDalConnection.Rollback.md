# IDalConnection.Rollback

IDalConnection.Rollback
-


# IDalConnection.Rollback


## Синтаксис


Rollback;


## Описание


Метод Rollback осуществляет
 откат внесенных изменений в рамках данной транзакции.


## Пример


Добавьте ссылки на системные сборки: Dal.


	Sub UserProc;

	Var

	    Driver: IDalDriver;

	    Connect: IDalConnection;

	    Command: IDalCommand;

	    ConnectDesc: IDalConnectionDescriptor;

	    ConnectDescParams: IDalConnectionDescriptorParams;

	Begin

	    Driver := New DalOrcl8Driver.Create;

	    ConnectDesc := Driver.CreateDescriptor;

	    //Параметры подключения

	    ConnectDescParams := ConnectDesc.Params;

	    ConnectDescParams.Find("User Name").Value := "User";

	    ConnectDescParams.Find("Password").Value := "Password";

	    ConnectDescParams.Find("Host BSTR").Value := "OrclServer";

	    ConnectDescParams.Find("Schema").Value := "Repository";

	    //Создание соединения

	    Connect := ConnectDesc.CreateConnection;

	    Command := Connect.CreateCommand;

	    //Команда

	    Command.SQL := "Insert Into DataTable Values ('AA','BB',11,22,'12.12.2008')";

	    Connect.StartTransaction;

	    //Выполнение команды

	    Command.Execute;

	    //Завершение транзакции с откатом изменений

	    Connect.Rollback;

	    Command.Close;

	    Connect.Close;

	End Sub UserProc;


При выполнении примера будет осуществлено подключение к репозиторию
 с указанными параметрами расположения. После этого произойдет инициализация
 транзакции и выполнение SQL-запроса, который добавляет новую запись в
 таблицу «DataTable». Затем произойдет откат внесенных изменений.


См. также:


[IDalConnection](IDalConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
