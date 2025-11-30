# IMetabaseSecurity.AddTemporaryUser

IMetabaseSecurity.AddTemporaryUser
-


# IMetabaseSecurity.AddTemporaryUser


## Синтаксис


AddTemporaryUser(UserName: String, Period: Integer):[IMetabaseUser](../IMetabaseUser/IMetabaseUser.htm);


## Описание


Метод AddTemporaryUser добавляет
 временного пользователя с заданным периодом использования в днях.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    User: IMetabaseUser;

    Data: ISecurityPackageUserData;

    Package: ISecurityPackage;

    PswCreds: IPasswordCredentials;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Добавим пользователя с периодом использования

    User := MS.AddTemporaryUser("USERNAME", 2);

    // Зададим пароль

    Data := User.PackageData;

    Package := New StandardSecurityPackage.Create;

    PswCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

    PswCreds.Password := "Password";

    Data.Credentials := PswCreds;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет добавлена
 временная учётная запись пользователя USERNAME, доступная для использования
 в течение двух дней.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
