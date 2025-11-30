# IDalODBCConnectionDescriptor.ODBCParamValue

IDalODBCConnectionDescriptor.ODBCParamValue
-


# IDalODBCConnectionDescriptor.ODBCParamValue


## Синтаксис


ODBCParamValue(Name: String): Variant;


## Параметры


Name. Наименование параметра.


## Описание


Свойство ODBCParamValue определяет
 значение для параметра с указанным наименованием.


## Комментарии


Наименования параметров можно получить в документации по ODBC драйверу,
 с помощью которого осуществляется подключение.


## Пример


В операционной системе должен быть установлен ODBC драйвер для Microsoft
 SQL Server. В сети имеется сервер с наименованием «MSSQLServer», на сервере
 создана схема «DataRepository».


Добавьте ссылку на системную сборку Dal.


	Sub UserProc1;

	Var

	    Driver: IDalDriver;

	    ConDesc: IDalConnectionDescriptor;

	    Params: IDalConnectionDescriptorParams;

	    Connection: IDalConnection;

	    ParamsODBC: IDalODBCConnectionDescriptor;

	Begin

	    // Драйвер для подключения

	    Driver := New DalMsSql2012ODBCDriver.Create As IDalDriver;

	    // Описание подключения

	    ConDesc := Driver.CreateDescriptor;

	    Params := ConDesc.Params;

	    // Настройка параметров подключения

	    Params.Find("Host BSTR").Value := "MSSQLServer";

	    Params.Find("Database").Value := "DataRepository";

	    Params.Find("User Name").Value := "User";

	    Params.Find("Password").Value := "Password";

	    // Дополнительные параметры подключения

	    ParamsODBC := ConDesc as IDalODBCConnectionDescriptor;

	    ParamsODBC.ODBCParamValue("MultiSubnetFailover") := "Yes";

	    ParamsODBC.ODBCParamValue("ApplicationIntent") := "ReadOnly";

	    // Создание подключения

	    Connection := ConDesc.CreateConnection;

	    Debug.WriteLine(Connection.IsDisconnected ? "Соединение отсутствует." : "Соединение создано.");

	    Connection.Close;

	End Sub UserProc1;


При выполнении примера будет создано новое подключение к указанному
 серверу. При подключении используется ODBC драйвер с заданием дополнительных
 параметров подключения. Результат подключения будет выведен в консоль
 среды разработки.


См. также:


[IDalODBCConnectionDescriptor](IDalODBCConnectionDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
