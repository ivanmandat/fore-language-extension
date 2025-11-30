# ISecurityPackageUserData.ParamCount

ISecurityPackageUserData.ParamCount
-


# ISecurityPackageUserData.ParamCount


## Синтаксис


ParamCount: Integer;


## Описание


Свойство ParamCount возвращает
 общее количество параметров пользователя.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    User: IMetabaseUser;

	    SPUD: ISecurityPackageUserData;

	    i, c: integer;

	Begin

	    MB := MetabaseClass.Active;

	    User := MB.LogonSession.User;

	    SPUD := User.PackageData;

	    c := SPUD.ParamCount;

	    For i := 0 To c - 1 do

	        Debug.WriteLine(SPUD.ParamName(i));

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 параметров безопасности пользователя.


См. также:


[ISecurityPackageUserData](ISecurityPackageUserData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
