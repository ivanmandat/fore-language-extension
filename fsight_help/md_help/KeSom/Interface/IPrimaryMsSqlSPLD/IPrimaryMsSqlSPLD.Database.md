# IPrimaryMsSqlSPLD.Database

IPrimaryMsSqlSPLD.Database
-


# IPrimaryMsSqlSPLD.Database


## Синтаксис


Database: String;


## Описание


Свойство Database определяет
 идентификатор базы данных на сервере MS SQL, в которой хранятся данные
 репозитория.


## Комментарии


Если на сервере используется тип СУБД Microsoft SQL Server и используется
 пользовательская схема в базе данных, то значение свойства Database
 представляется в виде: <база данных>.<схема в базе данных>.


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

	    MsSqlSPLD.Database := "Test_Schema_MS";

	    MbDef.Save;

	End Sub UserProc;


После выполнения примера будет создано новое описание репозитория. Схема,
 к которой будет осуществляться подключение, расположена на сервере «Test_MS»,
 на котором используется СУБД MS SQL Server.


См. также:


[IPrimaryMsSqlSPLD](IPrimaryMsSqlSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
