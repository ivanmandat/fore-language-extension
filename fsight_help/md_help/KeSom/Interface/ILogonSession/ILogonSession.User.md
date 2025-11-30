# ILogonSession.User

ILogonSession.User
-


# ILogonSession.User


## Синтаксис


User: [IMetabaseUser](../IMetabaseUser/IMetabaseUser.htm);


## Описание


Свойство User возвращает данные
 о текущем пользователе репозитория.


## Пример


	Sub Main;

	Var

	    MB: IMetabase;

	    LogSes: ILogonSession;

	    User: IMetabaseUser;

	Begin

	    MB := MetabaseClass.Active;

	    LogSes := MB.LogonSession;

	    User := LogSes.User;

	    Debug.WriteLine(User.Name + " | " + User.FullName);

	End Sub Main;


При выполнении примера в консоль среды разработки будет выведено наименование
 и полное наименование пользователя, под которым осуществлено подключение
 к репозиторию.


См. также:


[ILogonSession](ILogonSession.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
