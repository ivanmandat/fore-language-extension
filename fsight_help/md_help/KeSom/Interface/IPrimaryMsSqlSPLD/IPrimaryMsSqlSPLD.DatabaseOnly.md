# IPrimaryMsSqlSPLD.DatabaseOnly

IPrimaryMsSqlSPLD.DatabaseOnly
-


# IPrimaryMsSqlSPLD.DatabaseOnly


## Синтаксис


DatabaseOnly: String;


## Описание


Свойство DatabaseOnly определяет
 идентификатор базы данных на сервере MS SQL, в которой хранятся данные
 репозитория.


## Комментарии


Свойство актуально для использования, если на сервере задан тип СУБД
 Microsoft SQL Server и используется пользовательская схема в базе данных.


Свойство DatabaseOnly представляет только идентификатор базы данных
 без [пользовательской схемы](IPrimaryMsSqlSPLD.SchemaOnly.htm).


## Пример


Для выполнения примера подключите к модулю системную сборку Metabase.


	Sub UserProc;

	Var

	    MbMan: IMetabaseManager;

	    MbDefs: IMetabaseDefinitions;

	    MbDef: IMetabaseDefinition;

	    MsSqlSPLD: IPrimaryMsSqlSPLD;

	Begin

	    MbMan := MetabaseManagerFactory.Active;

	    MbDefs := MbMan.Definitions;

	    MbDef := MbDefs.Add;

	    MbDef.DriverId := "MSSQL2012";

	    MbDef.Id := "Test_MSSQL";

	    MbDef.Name := "Test_MSSQL";

	    MbDef.Authentication := AuthenticationMode.Password;

	    MbDef.SecurityPackage := "STANDARDSECURITYPACKAGE";

	    MsSqlSPLD := MbDef.LogonData As IPrimaryMsSqlSPLD;

	    MsSqlSPLD.Server := "Test_MS";

	    MsSqlSPLD.DatabaseOnly := "DB_Repository";

	    MsSqlSPLD.SchemaOnly := "UserSchema";

	    MbDef.Save;

	End Sub UserProc;


После выполнения примера будет создано новое описание репозитория. Для
 подключения будет использоваться пользовательская схема «UserSchema» в
 указанной базе данных. На сервере «Test_MS» используется СУБД MS SQL Server.


См. также:


[IPrimaryMsSqlSPLD](IPrimaryMsSqlSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
