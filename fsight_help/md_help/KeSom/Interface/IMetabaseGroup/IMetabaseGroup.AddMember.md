# IMetabaseGroup.AddMember

IMetabaseGroup.AddMember
-


# IMetabaseGroup.AddMember


## Синтаксис


AddMember(Subject: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm));


## Параметры


Subject. Субъект безопасности, который необходимо
 добавить.


## Описание


Метод AddMember добавляет в
 текущую группу субъект безопасности, передаваемый в качестве параметра
 входного параметра.


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

	    Group := MS.Groups.Item(0);

	    // Зададим параметры нового пользователя

	    User := MS.AddUserEx("USER_NEW", MetabaseSecurityAddUserOptions.Internal);

	    User.FullName := "Первый пользователь";

	    User.Description := "Новый пользователь платформы";

	    Data := User.PackageData;

	    Package := New StandardSecurityPackage.Create;

	    PswCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    PswCreds.Password := "Password";

	    Data.Credentials := PswCreds;

	    User.MustChangePasswordAtNextLogon := True;

	    // Добавим нового пользователя в первую группу

	    Group.AddMember(User);

	    // Сохраним изменения

	    MS.Apply;

	    // Освободим лицензию

	    Lic := Null;

	End Sub UserProc;


После выполнения примера будет создан новый пользователь «USER_NEW».
 Данный пользователь будет включен в первую группу, созданную в менеджере
 безопасности. При первом входе в платформу под данным пользователем будет
 выдан запрос на смену пароля.


См. также:


[IMetabaseGroup](IMetabaseGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
