# ISecurityPackage.CopyCredentials

ISecurityPackage.CopyCredentials
-


# ISecurityPackage.CopyCredentials


## Синтаксис


CopyCredentials(Value: [ICredentials](../ICredentials/ICredentials.htm)):
 [ICredentials](../ICredentials/ICredentials.htm);


## Параметры


Value.
 Источник учетных данных.


## Описание


Метод CopyCredentials копирует
 учетные данные из объекта, который передается в качестве входного параметра.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Session: ILogonSession;

	    Package: ISecurityPackage;

	    Creds, CredsNew: ICredentials;

	Begin

	    MB := MetabaseClass.Active;

	    Session := MB.LogonSession;

	    Package := New StandardSecurityPackage.Create;

	    Creds := Session.Credentials("DB");

	    CredsNew := Package.CreateCredentials(AuthenticationMode.Password);

	    CredsNew := Package.CopyCredentials(Creds);

	End Sub UserProc;


После выполнения примера в переменной CredsNew будут содержаться учетные
 данные, скопированные из учетных данных активного репозитория.


См. также:


[ISecurityPackage](ISecurityPackage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
