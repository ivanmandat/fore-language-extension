# IMetabaseAuditUserInfo.ChangePassword

IMetabaseAuditUserInfo.ChangePassword
-


# IMetabaseAuditUserInfo.ChangePassword


## Синтаксис


ChangePassword(OldPassword: String, NewPassword:
 String);


## Параметры


OldPassword. Старый пароль;


NewPassword. Новый пароль.


## Описание


Метод ChangePassword осуществляет
 изменение пароля служебного пользователя.


## Комментарии


Изменение пароля служебного пользователя выполняется при изменении пароля
 в СУБД. Если старый пароль забыт, то для восстановления учётных данных
 заново пересоздайте служебного пользователя с помощью метода [IMetabaseAuditUserInfo.CreateUser](IMetabaseAuditUserInfo.CreateUser.htm).


После изменения пароля [обновите](Setup.chm::/05_RepoMngr/Setup_RepoMngr_Service_User.htm#add_service_user)
 учётные данные служебного пользователя на каждом компьютере пользователя
 с помощью приложения [PP.Util](Setup.chm::/05_RepoMngr/Service_Applications/PP_Util.htm).


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

	    // Изменим пароль служебного пользователя

	    If AuditUser.IsSupported Then

	        AuditUser.ChangePassword("wg5aj4", "ajwg54");

	    End If;

	    // Сохраним изменения

	    MS.Apply;

	    // Освободим лицензию

	    Lic := Null;

	End Sub UserProc;


После выполнения примера будет изменен пароль служебного пользователя
 подсистемы безопасности.


См. также:


[IMetabaseAuditUserInfo](IMetabaseAuditUserInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
