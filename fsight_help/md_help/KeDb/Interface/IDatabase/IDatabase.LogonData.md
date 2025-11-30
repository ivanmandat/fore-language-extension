# IDatabase.LogonData

IDatabase.LogonData
-


# IDatabase.LogonData


## Синтаксис


LogonData: [ISecurityPackageLogonData](KeSom.chm::/Interface/ISecurityPackageLogonData/ISecurityPackageLogonData.htm);


## Описание


Свойство LogonData возвращает
 дополнительные параметры модуля безопасности, содержащего настройки, используемые
 при подключении к серверу баз данных.


## Пример


Для выполнения примера предполагается наличие сервера на базе СУБД PostgreSQL.


Добавьте ссылки на системные сборки: Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    DB: IDatabase;

	    LogonData: IPrimaryPostgresSPLD;

	Begin

	    MB := MetabaseClass.Active;

	    // Информация для создания нового объекта

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DATABASE;

	    CrInfo.Id := "NewBD";

	    CrInfo.Name := "Новая база данных";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    // Настройка базы данных

	    DB := MObj As IDatabase;

	    DB.Authentication := AuthenticationMode.Password;

	    DB.DriverId := "POSTGRES";

	    LogonData := DB.LogonData As IPrimaryPostgresSPLD;

	    LogonData.Server := "Test";

	    LogonData.Database := "TestDB";

	    LogonData.SSLMode := PostgresSSLMode.VerifyCA;

	    // Сохранение изменений

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана
 новая база данных. Данные будут располагаться на сервере Test в схеме
 TestDB. При подключении будет создаваться SSL-соединение с проверкой корневого
 сертификата сервера.


См. также:


[IDatabase](IDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
