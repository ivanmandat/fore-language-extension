# IDalDriver.CreateDescriptor

IDalDriver.CreateDescriptor
-


# IDalDriver.CreateDescriptor


## Синтаксис


CreateDescriptor: [IDalConnectionDescriptor](../IDalConnectionDescriptor/IDalConnectionDescriptor.htm);


## Описание


Метод CreateDescriptor создаёт
 описание соединения с сервером БД.


## Комментарии


Тип используемого драйвера зависит от [класса](../../Class/Dal_Class.htm),
 который был использован при инициализации объекта, описываемого интерфейсом
 [IDalDriver](IDalDriver.htm). Заполните параметры подключения
 и создайте соединение с помощью метода [IDalConnectionDescriptor.CreateConnection](../IDalConnectionDescriptor/IDalConnectionDescriptor.CreateConnection.htm).
 Набор параметров, требуемых для разных драйверов, отличается и может быть
 получен в свойстве [IDalConnectionDescriptor.Params](../IDalConnectionDescriptor/IDalConnectionDescriptor.Params.htm).


## Пример


Ниже приведены примеры подключения к серверам СУБД на языке Fore с использованием
 различных драйверов, доступных в сборке Dal. Результаты подключения выводятся
 в консоль среды разработки.


Добавьте ссылки на системную сборку Dal.


[![](../../Opened.gif)![](../../Closed.gif)DalClickHouseDriver](javascript:TextPopup(this))


	Для выполнения примера предполагается наличие сервера на базе СУБД
	 ClickHouse. Подключение осуществляется к базе данных по умолчанию.


		Sub CLICKHOUSESample;

		Var

		    Driver: IDalDriver;

		    ConDescriptor: IDalConnectionDescriptor;

		    Params: IDalConnectionDescriptorParams;

		    Connection: IDalConnection;

		Begin

		    Driver := New DalClickHouseDriver.Create;

		    ConDescriptor := Driver.CreateDescriptor;

		    // Обычное подключения

		    Params := ConDescriptor.Params;

		    Params.Find("Host BSTR").Value := "CHServer";

		    Params.Find("Database").Value := "default";

		    Params.Find("User Name").Value := "default";

		    Params.Find("Password").Value := "default";

		    // или

		    // SSL-соединение

		    Params.Find("Host BSTR").Value := "CHServer";

		    Params.Find("Database").Value := "default";

		    Params.Find("User Name").Value := "User";

		    Params.Find("Password").Value := "Password";

		    Params.Find("PingBeforeQuery").Value := "TRUE";

		    Params.Find("Port").Value := "9440";

		    Params.Find("SslEnabled").Value := "true";

		    Params.Find("SslUseDefaultCALocations").Value := "false";

		    Params.Find("SslPathToCAFiles").Value := "/opt/foresight/fp10.x-biserver/ssl/clickhouse.crt";

		    Params.Find("SslSkipVerification").Value := "true";

		    // Создание соединения

		    Connection := ConDescriptor.CreateConnection;

		    Debug.WriteLine(Connection.IsDisconnected ? "Соединение отсутствует." : "Соединение создано.");

		    Connection.Close;

		End Sub CLICKHOUSESample;


[![](../../Opened.gif)![](../../Closed.gif)DalMsSql2012Driver](javascript:TextPopup(this))


	Для выполнения примера предполагается наличие сервера на базе СУБД
	 Microsoft SQL Server. На сервере создана базы данных с наименованием
	 WAREHOUSE.


		Sub MSSQL2012Sample;

		Var

		    Driver: IDalDriver;

		    ConDescriptor: IDalConnectionDescriptor;

		    Params: IDalConnectionDescriptorParams;

		    Connection: IDalConnection;

		Begin

		    Driver := New DalMsSql2012Driver.Create;

		    ConDescriptor := Driver.CreateDescriptor;

		    // Параметры подключения

		    Params := ConDescriptor.Params;

		    Params.Find("Host BSTR").Value := "MSServer";

		    Params.Find("Database").Value := "WAREHOUSE";

		    Params.Find("User Name").Value := "User";

		    Params.Find("Password").Value := "Password";

		    // Создание соединения

		    Connection := ConDescriptor.CreateConnection;

		    Debug.WriteLine(Connection.IsDisconnected ? "Соединение отсутствует." : "Соединение создано.");

		    Connection.Close;

		End Sub MSSQL2012Sample;


[![](../../Opened.gif)![](../../Closed.gif)DalMsSql2012ODBCDriver](javascript:TextPopup(this))


	Для выполнения примера предполагается наличие сервера СУБД на базе
	 Microsoft SQL Server. На сервере создана базы данных с наименованием
	 WAREHOUSE. В операционной системе должен быть установлен ODBC драйвер
	 для Microsoft SQL Server.


		Sub MSSQL2012ODBCSample;

		Var

		    Driver: IDalDriver;

		    ConDescriptor: IDalConnectionDescriptor;

		    Params: IDalConnectionDescriptorParams;

		    Connection: IDalConnection;

		Begin

		    Driver := New DalMsSql2012ODBCDriver.Create;

		    ConDescriptor := Driver.CreateDescriptor;

		    // Параметры подключения

		    Params := ConDescriptor.Params;

		    Params.Find("Host BSTR").Value := "MSServer";

		    Params.Find("Database").Value := "WAREHOUSE";

		    Params.Find("User Name").Value := "User";

		    Params.Find("Password").Value := "Password";

		    Params.Find("ODBCParams").Value := "MultiSubnetFailover=Yes;ApplicationIntent=ReadOnly";

		    // Создание соединения

		    Connection := ConDescriptor.CreateConnection;

		    Debug.WriteLine(Connection.IsDisconnected ? "Соединение отсутствует." : "Соединение создано.");

		    Connection.Close;

		End Sub MSSQL2012ODBCSample;


[![](../../Opened.gif)![](../../Closed.gif)DalODBCDriver](javascript:TextPopup(this))


	Для выполнения примера предполагается наличие сервера на базе СУБД
	 PostgreSQL. На сервере создана базы данных с наименованием WAREHOUSE.
	 В операционной системе должен быть установлен ODBC драйвер для PostgreSQL.
	 Также создан пользовательский DSN с наименованием PostgreSQL35W. В
	 примере указаны различные варианты задания настроек для подключения
	 с использованием ODBC драйвера. Для выполнения примера выберите один
	 из вариантов задания настроек и закомментируйте другие.


		Sub ODBCSample;

		Var

		    Driver: IDalDriver;

		    ConDesc: IDalConnectionDescriptor;

		    ODBCConnection: IDalODBCConnectionDescriptor;

		    Connection: IDalConnection;

		Begin

		    Driver := New DalODBCDriver.Create;

		    ConDesc := Driver.CreateDescriptor;

		    ODBCConnection := ConDesc As IDalODBCConnectionDescriptor;

		    /// <summary>

		    /// Ниже представлены различные варианты указания параметров подключения (1-3).

		    /// Каждый из вариантов используется независимо от других вариантов,

		    /// также допустимо использование комбинированного варианта задания параметров

		    /// через свойства ODBCParams и ODBCParamValue
		 (4).

		    /// </summary>

		    // 1. Пользовательский DSN

		    ODBCConnection.ODBCParams := "DSN=PostgreSQL35W";

		    // 2. Полная строка подключения

		    ODBCConnection.ODBCParams := "DRIVER={PostgreSQL Unicode};SERVER=127.0.0.1;DATABASE=WAREHOUSE;UID=user;PWD=password;";

		    // 3. Задание значения параметра с наименованием DSN или отдельных параметров подключения

		    ODBCConnection.ODBCParamValue("DSN") := "PostgreSQL35W";

		    // или

		    ODBCConnection.ODBCParamValue("DRIVER") := "{PostgreSQL Unicode}";

		    ODBCConnection.ODBCParamValue("SERVER") := "127.0.0.1";

		    ODBCConnection.ODBCParamValue("DATABASE") := "WAREHOUSE";

		    ODBCConnection.ODBCParamValue("UID") := "user";

		    ODBCConnection.ODBCParamValue("PWD") := "password";

		    // 4. Комбинированный вариант

		    ODBCConnection.ODBCParams := "DRIVER={PostgreSQL Unicode};SERVER=127.0.0.1;DATABASE=WAREHOUSE";

		    ODBCConnection.ODBCParamValue("UID") := "user";

		    ODBCConnection.ODBCParamValue("PWD") := "password";

		    // Создание соединения

		    Connection := ConDesc.CreateConnection;

		    Debug.WriteLine(Connection.IsDisconnected ? "Соединение отсутствует." : "Соединение создано.");

		    Connection.Close;

		End Sub ODBCSample;


[![](../../Opened.gif)![](../../Closed.gif)DalOrcl8Driver](javascript:TextPopup(this))


	Для выполнения примера предполагается наличие сервера на базе СУБД
	 Oracle. На сервере создана базы данных с наименованием WAREHOUSE.


		Sub ORCL8Sample;

		Var

		    Driver: IDalDriver;

		    ConDescriptor: IDalConnectionDescriptor;

		    Params: IDalConnectionDescriptorParams;

		    Connection: IDalConnection;

		Begin

		    Driver := New DalOrcl8Driver.Create;

		    ConDescriptor := Driver.CreateDescriptor;

		    // Параметры подключения

		    Params := ConDescriptor.Params;

		    Params.Find("Host BSTR").Value := "ORCLServer";

		    Params.Find("Schema").Value := "WAREHOUSE";

		    Params.Find("User Name").Value := "User";

		    Params.Find("Password").Value := "Password";

		    // Создание соединения

		    Connection := ConDescriptor.CreateConnection;

		    Debug.WriteLine(Connection.IsDisconnected ? "Соединение отсутствует." : "Соединение создано.");

		    Connection.Close;

		End Sub ORCL8Sample;


[![](../../Opened.gif)![](../../Closed.gif)DalPostgresDriver](javascript:TextPopup(this))


	Для выполнения примера предполагается наличие сервера на базе СУБД
	 PostgreSQL. На сервере создана базы данных с наименованием WAREHOUSE.


		Sub POSTGRESQLSample;

		Var

		    Driver: IDalDriver;

		    ConDescriptor: IDalConnectionDescriptor;

		    Params: IDalConnectionDescriptorParams;

		    Connection: IDalConnection;

		Begin

		    Driver := New DalPostgresDriver.Create;

		    ConDescriptor := Driver.CreateDescriptor;

		    // Параметры подключения

		    Params := ConDescriptor.Params;

		    Params.Find("Host BSTR").Value := "PGServer";

		    Params.Find("dbname").Value := "WAREHOUSE";

		    Params.Find("User Name").Value := "User";

		    Params.Find("Password").Value := "Password";

		    // Создание соединения

		    Connection := ConDescriptor.CreateConnection;

		    Debug.WriteLine(Connection.IsDisconnected ? "Соединение отсутствует." : "Соединение создано.");

		    Connection.Close;

		End Sub POSTGRESQLSample;


[![](../../Opened.gif)![](../../Closed.gif)DalSQLiteDriver](javascript:TextPopup(this))


	Для выполнения примера предполагается наличие локального файла d:\Work\Sqlite\warehouse,
	 содержащего базу данных SQLite.


		Sub SQLiteSample;

		Var

		    Driver: IDalDriver;

		    ConDescriptor: IDalConnectionDescriptor;

		    Params: IDalConnectionDescriptorParams;

		    Connection: IDalConnection;

		Begin

		    Driver := New DalSQLiteDriver.Create;

		    ConDescriptor := Driver.CreateDescriptor;

		    // Параметры подключения

		    Params := ConDescriptor.Params;

		    Params.Find("Database").Value := "d:\Work\Sqlite\warehouse";

		    // Создание соединения

		    Connection := ConDescriptor.CreateConnection;

		    Debug.WriteLine(Connection.IsDisconnected ? "Соединение отсутствует." : "Соединение создано.");

		    Connection.Close;

		End Sub SQLiteSample;


См. также:


[IDalDriver](IDalDriver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
