# ISecurityPackageUserData.Authentication

ISecurityPackageUserData.Authentication
-


# ISecurityPackageUserData.Authentication


## Синтаксис


Authentication: [AuthenticationMode](../../Enums/AuthenticationMode.htm);


## Описание


Свойство Authentication определяет
 тип аутентификации пользователя.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    User: IMetabaseUser;

	    SPUD: ISecurityPackageUserData;

	Begin

	    MB := MetabaseClass.Active;

	    User := MB.LogonSession.User;

	    SPUD := User.PackageData;

	    Debug.WriteLine(SPUD.Authentication);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен тип
 аутентификации текущего пользователя репозитория.


См. также:


[ISecurityPackageUserData](ISecurityPackageUserData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
