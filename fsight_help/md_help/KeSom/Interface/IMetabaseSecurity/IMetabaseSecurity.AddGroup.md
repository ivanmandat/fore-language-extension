# IMetabaseSecurity.AddGroup

IMetabaseSecurity.AddGroup
-


# IMetabaseSecurity.AddGroup


## Синтаксис


AddGroup(GroupName: String): [IMetabaseGroup](../IMetabaseGroup/IMetabaseGroup.htm);


## Параметры


GroupName. Наименование группы пользователей.


## Описание


Метод AddGroup создает новую
 группу пользователей.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MS: IMetabaseSecurity;

	    Group: IMetabaseGroup;

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

	    // Добавим группу пользователей и пользователя

	    Group := MS.AddGroup("Тестовая группа");

	    User := MS.AddUserEx("TESTUSER", MetabaseSecurityAddUserOptions.Internal);

	    User.FullName := "Тестовый пользователь";

	    // Зададим привилегии пользователю

	    MS.Policy.Privilege("ВХОД").Grant(User);

	    MS.Policy.Privilege("ЧТЕНИЕ").Grant(User);

	    MS.Policy.Privilege("ВХОД В НАВИГАТОР ОБЪЕКТОВ").Grant(User);

	    // Зададим пароль пользователя

	    Data := User.PackageData;

	    Package := New StandardSecurityPackage.Create;

	    PswCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    PswCreds.Password := "Password";

	    Data.Credentials := PswCreds;

	    User.MustChangePasswordAtNextLogon := True;

	    // Добавим пользователя в группу

	    Group.AddMember(User);

	    // Сохраним изменения

	    MS.Apply;

	    // Освободим лицензию

	    Lic := Null;

	End Sub UserProc;


После выполнения примера будет создана новая группа и новый пользователь.
 Пользователь будет включен в данную группу. Для пользователя будут розданы
 две привилегии: привилегия на вход в платформу и привилегия на чтение
 и открытие объектов. При первом входе в платформу под данным пользователем
 будет выдан запрос на смену пароля.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
