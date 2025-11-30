# IPrimaryPostgresSPLD.Database

IPrimaryPostgresSPLD.Database
-


# IPrimaryPostgresSPLD.Database


## Синтаксис


Database: String;


## Описание


Свойство Database определяет
 идентификатор базы данных на сервере PostgreSQL с возможностью указания
 пользовательской схемы.


## Комментарии


По умолчанию используется схема public. Если при [подготовке
 серверной части СУБД](setup.chm::/03_DB_Server_Config/Postgres_server_preparation.htm#create_schema) была создана пользовательская
 схема, которая используется в качестве схемы по умолчанию, то укажите
 её через точку после идентификатора базы данных или с помощью свойства
 [IPrimaryPostgresSPLD.SchemaOnly](IPrimaryPostgresSPLD.SchemaOnly.htm).
 Пример указания идентификаторов базы данных и пользовательской схемы:
 REPOSITORY_ID.myschema.


Если база данных и пользовательская схема были заданы в свойствах [IPrimaryPostgresSPLD.DatabaseOnly](IPrimaryPostgresSPLD.DatabaseOnly.htm)
 и [IPrimaryPostgresSPLD.SchemaOnly](IPrimaryPostgresSPLD.SchemaOnly.htm),
 то свойство Database будет содержать
 не только идентификатор базы данных, но и идентификатор пользовательской
 схемы.


## Пример


Для выполнения примера на сервере СУБД PostgreSQL предполагается наличие
 базы данных DB_REPOSITORY. DNS-имя сервера - Server, схема по умолчанию
 - public. Убедитесь, что создан репозиторий на основе указанной базы данных.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MbMan: IMetabaseManager;

	    MbDefs: IMetabaseDefinitions;

	    MbDef: IMetabaseDefinition;

	    PostgreSPLD: IPrimaryPostgresSPLD;

	Begin

	    // Получим параметры менеджера репозитория

	    MbMan := MetabaseManagerFactory.Active;

	    MbDefs := MbMan.Definitions;

	    // Добавим новое подключение к репозиторию

	    MbDef := MbDefs.Add;

	    MbDef.DriverId := "POSTGRES";

	    MbDef.Id := "Test_PostgreSQL";

	    MbDef.Name := "Test_PostgreSQL";

	    MbDef.Authentication := AuthenticationMode.Password;

	    MbDef.SecurityPackage := "STANDARDSECURITYPACKAGE";

	    PostgreSPLD := MbDef.LogonData As IPrimaryPostgresSPLD;

	    // Зададим наименование сервера СУБД PostgreSQL

	    PostgreSPLD.Server := "Server";

	    // Зададим идентификатор базы данных, в которой создан репозиторий

	    PostgreSPLD.DatabaseOnly := "DB_REPOSITORY";

	    PostgreSPLD.SupportBinaryProtocol := True;

	    PostgreSPLD.CaseSensitive := True;

	    // Сохраним изменения

	    MbDef.Save;

	End Sub UserProc;


В результате выполнения примера будет создано новое подключение к репозиторию.
 При обращении к серверу СУБД будут использоваться запросы в бинарном виде
 с учётом регистра наименования репозитория, идентификаторов объектов и
 их полей в СУБД.


См. также:


[IPrimaryPostgresSPLD](IPrimaryPostgresSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
