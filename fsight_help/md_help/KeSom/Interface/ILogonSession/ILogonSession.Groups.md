# ILogonSession.Groups

ILogonSession.Groups
-


# ILogonSession.Groups


## Синтаксис


Groups: [IMetabaseGroups](../IMetabaseGroups/IMetabaseGroups.htm);


## Описание


Свойство Groups возвращает группы
 пользователей, в которые входит текущий пользователь репозитория.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    LogSes: ILogonSession;

	    Groups: IMetabaseGroups;

	    Group: IMetabaseGroup;

	Begin

	    MB := MetabaseClass.Active;

	    LogSes := MB.LogonSession;

	    Groups := LogSes.Groups;

	    For Each Group In Groups Do

	        Debug.WriteLine(Group.Name);

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены наименования
 групп пользователей, в которые входит текущий пользователь репозитория.


См. также:


[ILogonSession](ILogonSession.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
