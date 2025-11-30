# IPrimaryPostgresSPLD.DatabaseOnly

IPrimaryPostgresSPLD.DatabaseOnly
-


# IPrimaryPostgresSPLD.DatabaseOnly


## Синтаксис


DatabaseOnly: String;


## Описание


Свойство DatabaseOnly определяет
 идентификатор базы данных на сервере PostgreSQL, в которой создан репозиторий.


## Комментарии


По умолчанию используется схема public. Если при [подготовке
 серверной части СУБД](setup.chm::/03_DB_Server_Config/Postgres_server_preparation.htm#create_schema) была создана пользовательская
 схема, которая используется в качестве схемы по умолчанию, то укажите
 её через точку после идентификатора базы данных с помощью свойства [IPrimaryPostgresSPLD.Database](IPrimaryPostgresSPLD.Database.htm)
 или с помощью свойства [IPrimaryPostgresSPLD.SchemaOnly](IPrimaryPostgresSPLD.SchemaOnly.htm).


## Пример


Для выполнения примера на сервере СУБД PostgreSQL предполагается наличие
 базы данных DB_REPOSITORY. DNS-имя сервера - Server, пользовательская
 схема - SCHEMA_NAME. Убедитесь, что создан репозиторий на основе указанной
 базы данных.


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

	    MbDef.Id := "Test3_PostgreSQL";

	    MbDef.Name := "Test_PostgreSQL";

	    MbDef.Authentication := AuthenticationMode.Password;

	    MbDef.SecurityPackage := "STANDARDSECURITYPACKAGE";

	    PostgreSPLD := MbDef.LogonData As IPrimaryPostgresSPLD;

	    // Зададим наименование сервера СУБД PostgreSQL

	    PostgreSPLD.Server := "Server";

	    // Зададим идентификатор базы данных, в которой создан репозиторий

	    PostgreSPLD.DatabaseOnly := "DB_REPOSITORY";

	    // Зададим идентификатор пользовательской схемы

	    PostgreSPLD.SchemaOnly := "SCHEMA_NAME";

	    // Сохраним изменения

	    MbDef.Save;

	    // Выведем в консоль используемую базу данных и пользовательскую схему

	    Debug.WriteLine("База данных и пользовательская схема: " + PostgreSPLD.Database);

	End Sub UserProc;


В результате выполнения примера будет создано новое подключение к репозиторию.
 В консоль будут выведены используемые база данных и пользовательская схема
 через точку:


База данных и пользовательская схема: DB_REPOSITORY.SCHEMA_NAME


См. также:


[IPrimaryPostgresSPLD](IPrimaryPostgresSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
