# ILogonSession.UserIP

ILogonSession.UserIP
-


# ILogonSession.UserIP


## Синтаксис


UserIP: String;


## Описание


Свойство UserIP возвращает IP-адрес
 рабочей станции для занесения в протокол доступа.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    LogSes: ILogonSession;

	Begin

	    MB := MetabaseClass.Active;

	    LogSes := MB.LogonSession;

	    Debug.WriteLine(LogSes.UserIP);

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен IP-адрес
 компьютера, с которого осуществлён вход в репозиторий.


См. также:


[ILogonSession](ILogonSession.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
