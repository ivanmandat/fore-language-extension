# IDalODBCConnectionDescriptor.ODBCParams

IDalODBCConnectionDescriptor.ODBCParams
-


# IDalODBCConnectionDescriptor.ODBCParams


## Синтаксис


ODBCParams: String;


## Описание


Свойство ODBCParams определяет
 строку значений дополнительных параметров.


## Комментарии


В качестве значения может быть указан DSN, полная строка подключения
 или значения отдельных параметров. Параметры и их значения указываются
 в формате «параметр1=значение1;параметр2=значение2...».


## Пример


В операционной системе должен быть установлен ODBC драйвер для Microsoft
 SQL Server. В сети имеется сервер с наименованием MSSQLServer, на сервере
 создана схема DataRepository.


Добавьте ссылку на системную сборку Dal.


	Sub UserProc;

	Var

	    Driver: IDalDriver;

	    ConDesc: IDalConnectionDescriptor;

	    Params: IDalConnectionDescriptorParams;

	    Con: IDalConnection;

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

	    ParamsODBC.ODBCParams := "MultiSubnetFailover=Yes;ApplicationIntent=ReadOnly";

	    Con := ConDesc.CreateConnection;

	    Con.Open;

	    If Con.IsDisconnected Then

	        Debug.WriteLine("Соединение отсутствует.");

	    Else

	        Debug.WriteLine("Соединение установлено.");

	    End If;

	End Sub UserProc;


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
