# ISecurityPackage.GetAdminCredentials

ISecurityPackage.GetAdminCredentials
-


# ISecurityPackage.GetAdminCredentials


## Синтаксис


GetAdminCredentials(


Options: Integer;


LogonData: [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm);


UserCredentials: [ICredentials](../ICredentials/ICredentials.htm)):
 [ICredentials](../ICredentials/ICredentials.htm);


## Параметры


Options. Параметр не используется.
 Зарезервирован на будущее;


LogonData. Параметры модуля
 безопасности, используемые при подключении;


UserCredentials. Учётные данные
 пользователя, используемые при подключении.


## Описание


Метод GetAdminCredentials создает
 учётные данные администратора в соответствии с параметрами подключения,
 передаваемыми посредством входных параметров.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MBDef: IMetabaseDefinition;

	    Package: ISecurityPackage;

	    Session: ILogonSession;

	    Creds, ADMCreds: ICredentials;

	    SPLD: ISecurityPackageLogonData;

	Begin

	    MB := MetabaseClass.Active;

	    MBDef := MB.Definition;

	    Package := MBDef.Manager.Packs.FindById(MBDef.SecurityPackage).Package;

	    Session := MB.LogonSession;

	    Creds := Session.LogonCredentials;

	    SPLD := Session.LogonData;

	    ADMCreds := Package.GetAdminCredentials(0, SPLD, Creds);

	    //...

	End Sub UserProc;


После выполнения примера будут получены учётные данные для администратора
 текущего репозитория на основании параметров текущего подключения.


См. также:


[ISecurityPackage](ISecurityPackage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
