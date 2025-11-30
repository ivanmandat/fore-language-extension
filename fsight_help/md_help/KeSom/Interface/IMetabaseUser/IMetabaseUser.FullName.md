# IMetabaseUser.FullName

IMetabaseUser.FullName
-


# IMetabaseUser.FullName


## Синтаксис


FullName: String;


## Описание


Свойство FullName определяет
 полное наименование пользователя.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Users: IMetabaseUsers;

	    User: IMetabaseUser;

	Begin

	    MB := MetabaseClass.Active;

	    Users := MB.Security.Users;

	    User := Users.Item(0);

	    Debug.WriteLine(User.FullName);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено полное
 наименование первого пользователя, созданного в менеджере безопасности
 платформы.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
