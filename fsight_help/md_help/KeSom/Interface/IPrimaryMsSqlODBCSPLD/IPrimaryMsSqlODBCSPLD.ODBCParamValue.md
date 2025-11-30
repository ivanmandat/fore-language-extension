# IPrimaryMsSqlODBCSPLD.ODBCParamValue

IPrimaryMsSqlODBCSPLD.ODBCParamValue
-


# IPrimaryMsSqlODBCSPLD.ODBCParamValue


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

    MbDef.DriverId := "MSSQL2012ODBC";

    MbDef.Id := "MSSQL_ODBC";

    MbDef.Name := "MSSQL_ODBC";

    MbDef.Authentication := AuthenticationMode.Password;

    MbDef.SecurityPackage := "STANDARDSECURITYPACKAGE";

    MssqlOdbcSPLD := MbDef.LogonData As IPrimaryMsSqlODBCSPLD;

    MssqlOdbcSPLD.Server := "MSSQLServer";

    MssqlOdbcSPLD.Database := "DataRepository";

    MssqlOdbcSPLD.ODBCParamValue("MultiSubnetFailover") := "Yes";

    MssqlOdbcSPLD.ODBCParamValue("ApplicationIntent") := "ReadWrite";

    MbDef.Save;

End Sub UserProc;


При выполнении примера будет создано новое описание для подключения
 к указанному репозиторию. При подключении используется ODBC драйвер с
 заданием дополнительных параметров подключения.


См. также:


[IPrimaryMsSqlODBCSPLD](IPrimaryMsSqlODBCSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
