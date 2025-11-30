# ICredentials.UserIP

ICredentials.UserIP
-


# ICredentials.UserIP


## Синтаксис


UserIP: String;


## Описание


Свойство UserIP определяет IP
 адрес пользователя для занесения в протокол доступа.


## Пример


	Sub Main;

	Var

	    Mb: IMetabase;

	    LoS: ILogonSession;

	    Sc: ISecurityConnection;

	    Cr: ICredentials;

	    IP: String;

	Begin

	    Mb := MetabaseClass.Active;

	    LoS := Mb.LogonSession;

	    Sc := LoS.PrimaryConnection;

	    Cr := Sc.Credentials;

	    IP := Cr.UserIP;

	End Sub Main;


После выполнения примера в переменной «IP» будет находиться значение
 IP адрес пользователя.


См. также:


[ICredentials](ICredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
