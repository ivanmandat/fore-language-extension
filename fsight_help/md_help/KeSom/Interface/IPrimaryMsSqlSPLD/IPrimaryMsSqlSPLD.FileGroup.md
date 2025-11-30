# IPrimaryMsSqlSPLD.FileGroup

IPrimaryMsSqlSPLD.FileGroup
-


# IPrimaryMsSqlSPLD.FileGroup


## Синтаксис


FileGroup: String;


## Описание


Свойство FileGroup определяет
 файловую группу для создания таблиц.


## Комментарии


По умолчанию используется значение DEFAULT, обозначающее, что если не
 введено пользовательское наименование, то при подключении должна использоваться
 файловая группа, установленная в свойствах базы данных по умолчанию.


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

	    MbDef.DriverId := "MSSQL";

	    MbDef.Id := "Test_MSSQL";

	    MbDef.Name := "Test_MSSQL";

	    MbDef.Authentication := AuthenticationMode.Password;

	    MbDef.SecurityPackage := "STANDARDSECURITYPACKAGE";

	    MsSqlSPLD := MbDef.LogonData As IPrimaryMsSqlSPLD;

	    MsSqlSPLD.Server := "Test_MS";

	    MsSqlSPLD.DatabaseOnly := "DB_Repository";

	    MsSqlSPLD.SchemaOnly := "UserSchema";

	    MsSqlSPLD.FileGroup := "файловая группа на сервере БД";

	    MbDef.Save;

	End Sub UserProc;


После выполнения примера будет создано новое описание репозитория. Для
 подключения будет использоваться пользовательская схема «UserSchema» в
 указанной базе данных. На сервере «Test_MS» используется СУБД MS SQL Server.
 Для создания таблиц будет использоваться «файловая группа на сервере БД».


См. также:


[IPrimaryMsSqlSPLD](IPrimaryMsSqlSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
