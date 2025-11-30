# ISecurityPackageUserData.UserName

ISecurityPackageUserData.UserName
-


# ISecurityPackageUserData.UserName


## Синтаксис


UserName: String;


## Описание


Свойство UserName определяет
 наименование пользователя пакета безопасности.


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

	    Debug.WriteLine(SPUD.UserName);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено наименование
 пользователя пакета безопасности текущей сессии.


См. также:


[ISecurityPackageUserData](ISecurityPackageUserData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
