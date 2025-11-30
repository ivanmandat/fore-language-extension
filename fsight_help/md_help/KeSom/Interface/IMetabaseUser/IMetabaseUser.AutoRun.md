# IMetabaseUser.AutoRun

IMetabaseUser.AutoRun
-


# IMetabaseUser.AutoRun


## Синтаксис


AutoRun: [IMetabaseAutoRun](../IMetabaseAutoRun/IMetabaseAutoRun.htm);


## Описание


Свойство AutoRun возвращает
 объект автозапуска для пользователя.


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

	    If IsNull(User.AutoRun.Object) = False Then

	        Debug.WriteLine("Объект автозапуска: " + User.AutoRun.Object.Id);

	    End If;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен идентификатор
 объекта запуска, если он назначен для первого пользователя.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
