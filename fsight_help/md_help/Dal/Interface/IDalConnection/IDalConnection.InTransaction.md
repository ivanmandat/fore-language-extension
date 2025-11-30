# IDalConnection.InTransaction

IDalConnection.InTransaction
-


# IDalConnection.InTransaction


## Синтаксис


InTransaction: Boolean;


## Описание


Метод InTransaction возвращает
 признак наличия инициализированной транзакции с БД.


## Комментарии


Для инициализации транзакции используйте метод [IDalConnection.StartTransaction](IDalConnection.StartTransaction.htm).
 Если транзакция инициализирована и может использоваться в текущий момент,
 то метод InTransaction вернет
 значение True. Если транзакция
 не доступна (была завершена ранее, закрыта по таймауту, не была инициализирована
 по каким-либо причинам и прочее), то метод вернет значение False.


Для применения изменений, выполненных в рамках транзакции, используйте
 метод [IDalConnection.Commit](IDalConnection.Commit.htm), для
 отката изменений - [IDalConnection.Rollback](IDalConnection.Rollback.htm).


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

	    Command.SQL := "Insert Into Table_1 values ('AA','BB',11,22,'12.12.2002')";

	    //Инициализация транзакции

	    Connect.StartTransaction;

	    If Connect.InTransaction Then

	        Command.Execute;

	        //Завершение транзакции с сохранением данных

	        Connect.Commit;

	    End If;

	    Command.Close;

	    Connect.Close;

	End Sub UserProc;


При выполнении примера будет осуществлено подключение к репозиторию
 с указанными параметрами расположения. После этого произойдет инициализация
 транзакции. Если никаких ошибок не произошло и транзакция инициализирована,
 то будет выполнен SQL-запрос, который добавляет новую запись в таблицу
 «Table_1».


См. также:


[IDalConnection](IDalConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
