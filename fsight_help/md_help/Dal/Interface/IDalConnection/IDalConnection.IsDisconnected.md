# IDalConnection.IsDisconnected

IDalConnection.IsDisconnected
-


# IDalConnection.IsDisconnected


## Синтаксис


IsDisconnected: Boolean;


## Описание


Свойство IsDisconnected возвращает
 признак отсутствия соединения с БД.


## Комментарии


Допустимые значения:


	- True. Соединение отсутствует;


	- False. Соединение установлено
	 и доступно для дальнейшей работы.


## Пример


Добавьте ссылки на системные сборки: Dal.


	Sub UserProc;

	Var

	    Driver: IDalDriver;

	    Connect: IDalConnection;

	    ConnectDesc: IDalConnectionDescriptor;

	    ConnectDescParams: IDalConnectionDescriptorParams;

	    b: Boolean;

	Begin

	    Driver := New DalOrcl8Driver.Create;

	    ConnectDesc := Driver.CreateDescriptor;

	    //Параметры подключения

	    ConnectDescParams := ConnectDesc.Params;

	    ConnectDescParams.Find("User Name").Value := "User";

	    ConnectDescParams.Find("Password").Value := "Password";

	    ConnectDescParams.Find("Host BSTR").Value := "OrclServer";

	    ConnectDescParams.Find("Schema").Value := "Repository";

	    Connect := ConnectDesc.CreateConnection;

	    b := Connect.IsDisconnected;

	End Sub UserProc;


При выполнении примера будет осуществлено подключение к репозиторию
 с указанными параметрами расположения. В переменной «b» будет храниться
 значение, соответствующее состоянию соединения с БД.


См. также:


[IDalConnection](IDalConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
