# IMetabaseLinkBase.DriverId

IMetabaseLinkBase.DriverId
-


# IMetabaseLinkBase.DriverId


## Синтаксис


DriverId: String;


## Описание


Свойство DriverId определяет
 идентификатор драйвера базы данных, с использованием которого осуществляется
 подключение.


## Комментарии


В зависимости от типа СУБД, которая установлена на сервере, свойство
 может принимать одно из следующих значений:


	- ORCL8;


	- MSSQL2012;


	- MSSQL2012ODBC;


	- POSTGRES;


	- SQLITE;


	- WSF.


Соответствие указанных идентификаторов актуальным версиям СУБД представлено
 в разделе «[Сводный
 список идентификаторов](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#id)».


## Пример


Для выполнения примера предполагается наличие сервера Test. На сервере
 установлена СУБД Oracle и создана схема TestShema.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Man: IMetabaseManager;

	    Defs: IMetabaseDefinitions;

	    Def: IMetabaseDefinition;

	Begin

	    Man := MetabaseManagerFactory.Active;

	    Defs := Man.Definitions;

	    Def := Defs.Add;

	    Def.Id := "TestDefinition";

	    Def.Name := "TestDefinition";

	    Def.Authentication := AuthenticationMode.Password;

	    Def.DriverId := "ORCL8";

	    Def.SecurityPackage := "STANDARDSECURITYPACKAGE";

	    Def.LogonData.ParamValue("SERVER") := "Test";

	    Def.LogonData.ParamValue("SCHEME") := "TestShema";

	    Def.Scope := MetabaseDefinitionScope.LocalMachine;

	    Def.Save;

	End Sub UserProc;


После выполнения примера будет создано новое описание репозитория.


См. также:


[IMetabaseLinkBase](IMetabaseLinkBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
