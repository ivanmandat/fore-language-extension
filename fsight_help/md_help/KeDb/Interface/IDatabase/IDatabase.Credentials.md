# IDatabase.Credentials

IDatabase.Credentials
-


# IDatabase.Credentials


## Синтаксис


Credentials: [ICredentials](KeSom.chm::/Interface/ICredentials/ICredentials.htm);


## Описание


Свойство Credentials определяет
 учётные данные пользователя, используемые при автоматическом подключении
 к базе данных.


## Комментарии


Свойство доступно только для записи. Для создания новых учётных данных
 используйте метод [ISecurityPackage.CreateCredentials](KeSom.chm::/Interface/ISecurityPackage/ISecurityPackage.CreateCredentials.htm).


## Пример


Добавьте ссылки на системные сборки: Db, Metabase.


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

    CrInfo.Id := "NewDB";

    CrInfo.Name := "Новая база данных";

    CrInfo.Parent := MB.Root;

    DB := MB.CreateObject(CrInfo).Edit As IDatabase;

    // Задание настроек подключения к СУБД

    DB.Authentication := AuthenticationMode.Password;

    DB.DriverId := "ORCL8";

    OracleSPLD := DB.LogonData As IPrimaryOracleSPLD;

    OracleSPLD.Server := "TestServer";

    OracleSPLD.Scheme := "TestRepository";

    DB.LoginPrompt := False;

    // Учётные данные

    Package := New StandardSecurityPackage.Create;

    PswCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

    PswCreds.UserName := "User";

    PswCreds.Password := "Password";

    DB.Credentials := PswCreds;

    // Сохранение изменений

    (DB As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана
 новая база данных. Данные будут располагаться на сервере «TestServer»
 в репозитории «TestRepository». При входе в репозиторий будет осуществляется
 автоматическое подключение с указанными в примере учётными данными.


См. также:


[IDatabase](IDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
