# IPrimaryClickHouseSPLD.Database

IPrimaryClickHouseSPLD.Database
-


# IPrimaryClickHouseSPLD.Database


## Синтаксис


Database: String;


## Описание


Свойство Database определяет
 идентификатор базы данных на сервере ClickHouse.


## Пример


Добавьте ссылки на системные сборки: Database, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    DB: IDatabase;

	    LogonData: IPrimaryClickHouseSPLD;

	    Package: ISecurityPackage;

	    PasswordCreds: IPasswordCredentials;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DATABASE;

	    CrInfo.Id := MB.GenerateId("ClickHouse");

	    CrInfo.Name := "Подключение к ClickHouse";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    DB := MObj As IDatabase;

	    DB.Authentication := AuthenticationMode.Password;

	    DB.DriverId := "CLICKHOUSE";

	    LogonData := DB.LogonData As IPrimaryClickHouseSPLD;

	    LogonData.Server := "CHServer";

	    LogonData.Database := "default";

	    DB.LoginPrompt := False;

	    Package := New StandardSecurityPackage.Create;

	    PasswordCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    PasswordCreds.UserName := "default";

	    PasswordCreds.Password := "password";

	    DB.Credentials := PasswordCreds;

	    MObj.Save;

	End Sub UserProc;


При выполнении примера в корневой папке репозитория будет создана новая
 база данных, осуществляющая подключение к серверу на базе СУБД ClickHouse.


См. также:


[IPrimaryClickHouseSPLD](IPrimaryClickHouseSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
