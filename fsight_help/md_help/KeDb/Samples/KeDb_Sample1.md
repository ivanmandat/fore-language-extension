# Создание базы данных

Создание базы данных
-


# Создание базы данных


Рассмотрим несколько примеров создания базы данных для подключения к
 репозиториям на базе разных СУБД. Для выполнения примеров добавьте ссылки
 на системные сборки: Db, Metabase.


## Пример 1


Рассмотрим пример создания базы данных в репозитории, созданном на сервере
 Oracle.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    DB: IDatabase;

	    Package: ISecurityPackage;

	    OracleSPLD: IPrimaryOracleSPLD;

	    PswCreds: IPasswordCredentials;

	Begin

	    MB := MetabaseClass.Active;

	    // Создание базы данных

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DATABASE;

	    CrInfo.Id := "NewORCLDB";

	    CrInfo.Name := "Новая база данных";

	    CrInfo.Parent := MB.Root;

	    DB := MB.CreateObject(CrInfo).Edit As IDatabase;

	    // Задание настроек подключения к СУБД

	    DB.Authentication := AuthenticationMode.Password;

	    DB.DriverId := "ORCL8";

	    OracleSPLD := DB.LogonData As IPrimaryOracleSPLD;

	    OracleSPLD.Server := "TestServer";

	    OracleSPLD.Scheme := "TestRepository";

	    // Учётные данные

	    Package := New StandardSecurityPackage.Create;

	    PswCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    PswCreds.UserName := "User";

	    PswCreds.Password := "Password";

	    DB.LoginPrompt := False;

	    DB.Credentials := PswCreds;

	    // Сохранение изменений

	    (DB As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана
 новая база данных. Данная база данных будет настроена на подключение к
 репозиторию «TestRepository». Репозиторий расположен на сервере Oracle
 с наименованием «TestServer». Будет использоваться автоматическое подключение
 со следующими учётными данными: имя пользователя - User; пароль - Password.


## Пример 2


Рассмотрим пример создания базы данных в репозитории, созданном на сервере
 Microsoft SQL.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    DB: IDatabase;

	    Package: ISecurityPackage;

	    MSSPLD: IPrimaryMsSqlSPLD;

	    PswCreds: IPasswordCredentials;

	Begin

	    MB := MetabaseClass.Active;

	    // Создание базы данных

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DATABASE;

	    CrInfo.Id := "NewMSSQLDB";

	    CrInfo.Name := "Новая база данных";

	    CrInfo.Parent := MB.Root;

	    DB := MB.CreateObject(CrInfo).Edit As IDatabase;

	    // Задание настроек подключения к СУБД

	    DB.Authentication := AuthenticationMode.Password;

	    DB.DriverId := "MSSQL2012";

	    DB.Unicode := True;

	    MSSPLD := DB.LogonData As IPrimaryMsSqlSPLD;

	    MSSPLD.Server := "TestServer";

	    MSSPLD.Database := "TestRepository";

	    // Учётные данные

	    Package := New StandardSecurityPackage.Create;

	    PswCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    PswCreds.UserName := "User";

	    PswCreds.Password := "Password";

	    DB.LoginPrompt := False;

	    DB.Credentials := PswCreds;

	    // Сохранение изменений

	    (DB As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана
 новая база данных. Данная база данных будет настроена на подключение к
 репозиторию «TestRepository». Репозиторий расположен на сервере Microsoft
 SQL Server с наименованием «TestServer». Будет использоваться автоматическое
 подключение со следующими учётными данными: имя пользователя - User; пароль
 - Password.


См. также:


[Примеры](KeDb_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
