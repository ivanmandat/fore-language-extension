# IMetabase.LogonSession

IMetabase.LogonSession
-


# IMetabase.LogonSession


## Синтаксис


LogonSession: [ILogonSession](../ILogonSession/ILogonSession.htm);


## Описание


Свойство LogonSession возвращает
 информацию о текущей сессии с репозиторием.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    LS: ILogonSession;

	Begin

	    MB := MetabaseClass.Active;

	    LS := MB.LogonSession;

	    Debug.WriteLine(LS.User.Name);

	    Debug.WriteLine(LS.UserIP);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено наименование
 и IP-адресс пользователя, под которым осуществлено подключение к репозиторию.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
