# ISecurityPackageUserData.ParamValue

ISecurityPackageUserData.ParamValue
-


# ISecurityPackageUserData.ParamValue


## Синтаксис


ParamValue(Name: String): Variant;


## Параметры


Name.
 Наименование параметра пользователя.


## Описание


Свойство ParamValue определяет
 значение параметра пользователя, наименование которого передается посредством
 входного параметра.


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

	    Debug.WriteLine(SPUD.ParamValue("DEFAULTTABLESPACE"));

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено значение
 параметра с наименованием DEFAULTTABLESPACE для текущего пользователя.


См. также:


[ISecurityPackageUserData](ISecurityPackageUserData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
