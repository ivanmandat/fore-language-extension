# ISecurityPackageUserData.AllPrivilegies

ISecurityPackageUserData.AllPrivilegies
-


# ISecurityPackageUserData.AllPrivilegies


## Синтаксис


AllPrivilegies: Integer;


## Описание


Свойство AllPrivilegies возврщает
 общее количество привилегий у пользователя.


## Пример


	Sub Main;

	Var

	    MB: IMetabase;

	    User: IMetabaseUser;

	    SPUD: ISecurityPackageUserData;

	Begin

	    MB := MetabaseClass.Active;

	    User := MB.LogonSession.User;

	    SPUD := User.PackageData;

	    Debug.WriteLine(SPUD.AllPrivilegies);

	End Sub Main;


После выполнения примера в консоль среды разработки будет выведено общее
 количество привилегий у текущего пользователя репозитория.


См. также:


[ISecurityPackageUserData](ISecurityPackageUserData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
