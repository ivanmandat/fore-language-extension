# IUserProfiles.Add

IUserProfiles.Add
-


# IUserProfiles.Add


## Синтаксис


Add(User: [IMetabaseUser](../IMetabaseUser/IMetabaseUser.htm)):
 [IUserProfile](../IUserProfile/IUserProfile.htm);


## Параметры


User. Пользователь, профиль
 которого необходимо включить в коллекцию.


## Описание


Метод Add добавляет профиль
 указанного пользователя в коллекцию.


## Комментарии


Профили пользователей добавляются в соответствующее коллекции автоматически
 при первом обращении к свойству [IMetabaseUser.Profile](../IMetabaseUser/IMetabaseUser.Profile.htm).


Добавление профилей доступно только в коллекцию профилей репозитория,
 полученную в свойстве [IMetabase.Profiles](../IMetabase/IMetabase.Profiles.htm).
 Изменять коллекцию может только администратор репозитория. Метод Add актуально использовать для добавления
 профилей пользователей, которые только что созданы в менеджере безопасности
 репозитория.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Sec: IMetabaseSecurity;

	    User: IMetabaseUser;

	    Data: ISecurityPackageUserData;

	    Package: ISecurityPackage;

	    PswCreds: IPasswordCredentials;

	    Profs: IUserProfiles;

	    Prof: IUserProfile;

	    Lic: Object;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    Sec := MB.Security;

	    // Создадим пользователя

	    User := MS.AddUserEx("TESTUSER", MetabaseSecurityAddUserOptions.Internal);

	    User.FullName := "Тестовый пользователь";

	    Sec.Policy.Privilege("ВХОД").Grant(User);

	    Sec.Policy.Privilege("ЧТЕНИЕ").Grant(User);

	    // Зададим пароль

	    Data := User.PackageData;

	    Package := New StandardSecurityPackage.Create;

	    PswCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    PswCreds.Password := "Password";

	    Data.Credentials := PswCreds;

	    User.MustChangePasswordAtNextLogon := True;

	    // Сохраним изменения

	    Sec.Apply;

	    // Освободим лицензию

	    Lic := Null;

	    // Добавим учётную запись пользователя в коллекцию профилей репозитория

	    Profs := MB.Profiles;

	    Prof := Profs.Add(User);

	    Prof := Prof.Edit;

	    Prof.Email := User.Name + "@example.ru";

	    Prof.Apply;

	End Sub UserProc;


После выполнения примера будет создан новый пользователь репозитория.
 Для пользователя будут розданы привилегии и указаны учетные данные. Также
 профиль пользователя будет добавлен в коллекцию профилей репозитория.
 В настройках профиля будет указана электронная почта по умолчанию.


См. также:


[IUserProfiles](IUserProfiles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
