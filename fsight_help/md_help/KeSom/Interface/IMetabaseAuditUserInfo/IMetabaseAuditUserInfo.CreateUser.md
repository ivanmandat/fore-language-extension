# IMetabaseAuditUserInfo.CreateUser

IMetabaseAuditUserInfo.CreateUser
-


# IMetabaseAuditUserInfo.CreateUser


## Синтаксис


CreateUser(Password: String);


## Параметры


Password. Пароль служебного
 пользователя.


## Описание


Метод CreateUser осуществляет
 создание служебного пользователя в базе данных.


## Комментарии


Для СУБД [Microsoft
 SQL Server](Setup.chm::/03_db_server_config/setup_db_server_config_msql.htm) пароль должен соответствовать [требованиям](https://docs.microsoft.com/ru-ru/windows/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements), указанным к сложности пароля.


После создания нового служебного пользователя [добавьте](Setup.chm::/05_RepoMngr/Setup_RepoMngr_Service_User.htm#add_service_user)
 его учётные данные на каждом компьютере пользователя с помощью приложения
 [PP.Util](Setup.chm::/05_RepoMngr/Service_Applications/PP_Util.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MS: IMetabaseSecurity;

	    AuditUser: IMetabaseAuditUserInfo;

	    Lic: Object;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    MS := MB.Security;

	    // Получим параметры служебного пользователя

	    AuditUser := MS.AuditUserInfo;

	    // Создадим нового служебного пользователя, если зарезервирован служебный пользователь P4AUDIT

	    If AuditUser.IsReserved Then

	        AuditUser.Name := "SERVICE_USER";

	        AuditUser.Scope := AuditUserCredsScope.LocalMachine;

	        AuditUser.CreateUser("wg5aj4");

	    End If;

	    // Сохраним изменения

	    MS.Apply;

	    // Освободим лицензию

	    Lic := Null;

	End Sub UserProc;


После выполнения примера будет создан новый служебный пользователь подсистемы
 безопасности в базе данных, если в репозитории был зарезервирован служебный пользователь P4AUDIT.
 Учётные данные нового служебного пользователя будут храниться в [реестре](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm)
 локальной машины и доступны для использования всем пользователям на компьютере.


См. также:


[IMetabaseAuditUserInfo](IMetabaseAuditUserInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
