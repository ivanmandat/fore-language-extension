# IPrimaryMsSqlSPLD.ODBCParams

IPrimaryMsSqlSPLD.ODBCParams
-


# IPrimaryMsSqlSPLD.ODBCParams


## Синтаксис


ODBCParams: String;


## Описание


Свойство ODBCParams определяет
 строку значений дополнительных параметров.


## Комментарии


Параметры и их значения указываются в формате «параметр1=значение1;параметр2=значение2...».


## Пример


В операционной системе должен быть установлен ODBC драйвер для Microsoft
 SQL Server. В сети имеется сервер с наименованием MSSQLServer, на сервере
 создан репозирий DataRepository.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MbMan: IMetabaseManager;

	    MbDefs: IMetabaseDefinitions;

	    MbDef: IMetabaseDefinition;

	    MssqlOdbcSPLD: IPrimaryMsSqlODBCSPLD;

	Begin

	    MbMan := MetabaseManagerFactory.Active;

	    MbDefs := MbMan.Definitions;

	    MbDef := MbDefs.Add;

	    MbDef.DriverId := "MSSQL_ODBC";

	    MbDef.Id := "MSSQL_ODBC";

	    MbDef.Name := "MSSQL_ODBC";

	    MbDef.Authentication := AuthenticationMode.Password;

	    MbDef.SecurityPackage := "STANDARDSECURITYPACKAGE";

	    MssqlOdbcSPLD := MbDef.LogonData As IPrimaryMsSqlODBCSPLD;

	    MssqlOdbcSPLD.Server := "MSSQLServer";

	    MssqlOdbcSPLD.Database := "DataRepository";

	    MssqlOdbcSPLD.ODBCParams := "MultiSubnetFailover=Yes;ApplicationIntent=ReadWrite";

	    MbDef.Save;

	End Sub UserProc;


При выполнении примера будет создано новое описание для подключения
 к указанному репозиторию. При подключении используется ODBC драйвер с
 заданием дополнительных параметров подключения.


См. также:


[IPrimaryMsSqlODBCSPLD](../IPrimaryMsSqlODBCSPLD/IPrimaryMsSqlODBCSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
