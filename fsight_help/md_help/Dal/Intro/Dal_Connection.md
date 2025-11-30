# Создание соединения с СУБД: Сборка Dal

Создание соединения с СУБД: Сборка Dal
-


# Создание соединения с СУБД


## Обычное соединение


Перед созданием соединения предварительно инициализируйте драйвер и
 подготовьте описание соединения, в котором указаны параметры подключения.
 Для этого, в зависимости от того какая СУБД используется на сервере, создайте
 объект одного из следующих классов:


	- [DalClickHouseDriver](../Class/DalClickHouseDriver/DalClickHouseDriver.htm).
	 Для работы с СУБД ClickHouse;


	- [DalMsSql2012Driver](../Class/DalMsSql2012Driver/DalMsSql2012Driver.htm)
	 или [DalMsSql2012ODBCDriver](../Class/DalMsSql2012ODBCDriver/DalMsSql2012ODBCDriver.htm).
	 Для работы с СУБД Microsoft SQL Server;


	- [DalODBCDriver](../Class/DalODBCDriver/DalODBCDriver.htm).
	 Для работы с ODBC-драйвером, установленным в операционной системе;


	- [DalOleDbDrivers](../Class/DalOleDbDrivers/DalOleDbDrivers.htm).
	 Для работы с коллекцией драйверов OLE DB, установленных в операционной
	 системе;


	- [DalOrcl8Driver](../Class/DalOrcl8Driver/DalOrcl8Driver.htm).
	 Для работы с СУБД Oracle;


	- [DalPostgresDriver](../Class/DalPostgresDriver/DalPostgresDriver.htm).
	 Для работы с СУБД PostgreSQL;


	- [DalSQLiteDriver](../Class/DalSQLiteDriver/DalSQLiteDriver.htm).
	 Для работы с СУБД SQLite.


Совет. Для получения
 подробной информации о поддерживаемых версиях СУБД обратитесь к статье
 «[Поддерживаемые
 СУБД](Setup.chm::/01_SysReq/database_Support.htm)».


Для полученного объекта выполните метод [IDalDriver.CreateDescriptor](../Interface/IDalDriver/IDalDriver.CreateDescriptor.htm):


	Var

	    //...

	    ORCLDriver, MSSQLDriver: IDalDriver;

	    ORCLDescriptor, MSSQLDescriptor: IDalConnectionDescriptor;

	    //...

	Begin

	    //...

	    ORCLDriver := New DalOrcl8Driver.Create;

	    MSSQLDriver := New DalMsSql2012Driver.Create;

	    //Описания соединения

	    ORCLDescriptor := ORCLDriver.CreateDescriptor;

	    MSSQLDescriptor := MSSQLDriver.CreateDescriptor;


В полученном описании в свойстве [IDalConnectionDescriptor.Params](../Interface/IDalConnectionDescriptor/IDalConnectionDescriptor.Params.htm)
 задайте параметры подключения. Список параметров формируется ядром «Форсайт. Аналитическая платформа»
 для каждого драйвера индивидуально, наименования параметров могут отличаться:


	Var

	    //...

	    ORCLDescriptor, MSSQLDescriptor: IDalConnectionDescriptor;

	    ORCLParams, MSSQLParams: IDalConnectionDescriptorParams;

	    //...

	Begin

	    //...

	    //Параметры соединения

	    ORCLParams := ORCLDescriptor.Params;

	    ORCLParams.Find("User Name").Value := "User";

	    ORCLParams.Find("Password").Value := "Password";

	    ORCLParams.Find("Host BSTR").Value := "ORCL_Server";

	    ORCLParams.Find("Schema").Value := "Warehouse";

	    MSSQLParams := MSSQLDescriptor.Params;

	    MSSQLParams.Find("User Name").Value := "User";

	    MSSQLParams.Find("Password").Value := "Password";

	    MSSQLParams.Find("Host BSTR").Value := "MSSQL_Server";

	    MSSQLParams.Find("Database").Value := "Warehouse";


После установки параметров при вызове метода [IDalConnectionDescriptor.CreateConnection](../Interface/IDalConnectionDescriptor/IDalConnectionDescriptor.CreateConnection.htm)
 будет создано новое соединение:


	Var

	    //...

	    ORCLDescriptor, MSSQLDescriptor: IDalConnectionDescriptor;

	    ORCLConnect, MSSQLConnect: IDalConnection;

	    //...

	Begin

	    //...

	    //Создание соединения

	    ORCLConnect := ORCLDescriptor.CreateConnection;

	    MSSQLConnect := MSSQLDescriptor.CreateConnection;


Созданное соединение теперь может использоваться для получения информации
 об объектах СУБД, для управления транзакциями с сервером или для создания
 команды, которая будет выполнять SQL-запросы к серверу.


## Соединение для выполнения асинхронных запросов


При использовании СУБД на базе Oracle доступно создание специализированного
 соединения, в рамках которого можно выполнять асинхронные запросы. Асинхронное
 выполнение позволяет, не дожидаясь результата выполнения SQL-запроса,
 продолжить работу в приложении. Для создания такого соединения приведите
 описание соединения к типу [IDalConnectionDescriptor2](../Interface/IDalConnectionDescriptor2/IDalConnectionDescriptor2.htm)
 и в свойстве [IDalConnectionDescriptor2.ConnectionType](../Interface/IDalConnectionDescriptor2/IDalConnectionDescriptor2.ConnectionType.htm)
 укажите значение [DalConnectionType.Async](../Enums/DalConnectionType.htm):


	Var

	    //...

	    ORCLDriver: IDalDriver;

	    ORCLDescriptor: IDalConnectionDescriptor;

	    //...

	Begin

	    //...

	    ORCLDriver := New DalOrcl8Driver.Create;

	    //Описания соединения

	    ORCLDescriptor := ORCLDriver.CreateDescriptor;

	    //Установка признака создания соединения для асинхронного выполнения запросов

	    (ORCLDescriptor As IDalConnectionDescriptor2).ConnectionType := DalConnectionType.Async;


После указания параметров подключения и выполнения метода [IDalConnectionDescriptor.CreateConnection](../Interface/IDalConnectionDescriptor/IDalConnectionDescriptor.CreateConnection.htm)
 будет создано специализированное соединение:


	Var

	    //...

	    ORCLDriver: IDalDriver;

	    ORCLDescriptor: IDalConnectionDescriptor;

	    ORCLParams: IDalConnectionDescriptorParams;

	    ORCLConnect: IDalConnection;

	    //...

	Begin

	    //...

	    ORCLDriver := New DalOrcl8Driver.Create;

	    //Описания соединения

	    ORCLDescriptor := ORCLDriver.CreateDescriptor;

	    //Установка признака создания соединения для асинхронного выполнения запросов

	    (ORCLDescriptor As IDalConnectionDescriptor2).ConnectionType := DalConnectionType.Async;

	    //Параметры соединения

	    ORCLParams := ORCLDescriptor.Params;

	    ORCLParams.Find("User Name").Value := "User";

	    ORCLParams.Find("Password").Value := "Password";

	    ORCLParams.Find("Host BSTR").Value := "ORCL_Server";

	    ORCLParams.Find("Schema").Value := "Warehouse";

	    //Создание соединения

	    ORCLConnect := ORCLDescriptor.CreateConnection;


Если с сервером уже создано обычное соединение, то его можно преобразовать,
 используя метод [IDalConnection2.Clone](../Interface/IDalConnection2/IDalConnection2.Clone.htm):


	Var

	    //...

	    ORCLDescriptor: IDalConnectionDescriptor;

	    ORCLConnect, ORCLAsyncConnect: IDalConnection;

	    //...

	Begin

	    //...

	    //Создание соединения

	    ORCLConnect := ORCLDescriptor.CreateConnection;

	    //Соединение для выполнения асинхронных запросов

	    ORCLAsyncConnect := (ORCLConnect As IDalConnection2).Clone(DalConnectionType.Async);

	    //...


Дальнейшая работа с созданным соединением описана в следующих подразделах:


	- [Команда выполнения SQL-запросов](Dal_Command.htm);


	- [Выполнение SQL-запросов в асинхронном
	 режиме](Dal_Command2.htm);


	- [Выполнение SQL-запросов с проверкой
	 на ошибки выполнения](Dal_CommandEx.htm);


	- [Выполнение хранимых процедур
	 и функций](Dal_ExecStoredProcedure.htm).


См. также:


[Введение](Dal_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
