# IDalConnectionDescriptorParams.Item

IDalConnectionDescriptorParams.Item
-


# IDalConnectionDescriptorParams.Item


## Синтаксис


Item(Index: Integer): [IDalConnectionDescriptorParam](../IDalConnectionDescriptorParam/IDalConnectionDescriptorParam.htm);


## Параметры


Index. Индекс параметра.


## Описание


Свойство Item возвращает параметр,
 используемый для подключения к серверу БД.


## Пример


Добавьте ссылки на системные сборки: Dal.


	Sub UserProc;

	Var

	    Driver: IDalDriver;

	    ConnectDesc: IDalConnectionDescriptor;

	    Params: IDalConnectionDescriptorParams;

	    Connect: IDalConnection;

	    Comand: IDalCommand;

	Begin

	    Driver := New DalOrcl8Driver.Create As IDalDriver;

	    ConnectDesc := Driver.CreateDescriptor;

	    Params := ConnectDesc.Params;

	    Params.Item(0).Value := "User";

	    Params.Item(1).Value := "Password";

	    Params.Item(2).Value := "OrclServer";

	    Params.Item(3).Value := "Repository";

	    Connect := ConnectDesc.CreateConnection;

	    Comand := Connect.CreateCommand;

	    Comand.SQL := "Select * From Table_1";

	    Comand.Execute;

	    Comand.Close;

	    Connect.Close;

	End Sub UserProc;


При выполнении примера будет создано новое соединения с сервером БД.
 Для подключения будут указаны необходимые параметры, содержащие информацию
 о расположении сервера. После этого будет выполнен SQL-запрос, который
 извлекает все записи из указанной таблицы.


См. также:


[IDalConnectionDescriptorParams](IDalConnectionDescriptorParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
