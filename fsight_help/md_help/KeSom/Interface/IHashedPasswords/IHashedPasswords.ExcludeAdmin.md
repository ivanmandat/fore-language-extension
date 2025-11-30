# IHashedPasswords.ExcludeAdmin

IHashedPasswords.ExcludeAdmin
-


# IHashedPasswords.ExcludeAdmin


## Синтаксис


ExcludeAdmin: Boolean;


## Описание


Свойство ExcludeAdmin определяет,
 будет ли отменено [хеширования](Admin.chm::/03_Admin/Access_control_settings.htm#hash)
 пароля администратора.


## Комментарии


Под администратором (ADMIN) понимается владелец схемы. Свойство принимает
 значения:


	- True. Пароль администратора
	 не хешируется;


	- False. По умолчанию.
	 Пароль администратора хешируется.


Отмена хеширования пароля администратора может понадобиться:


	- для использования пароля
	 администратора при подключении к базе данных с помощью TOAD, PlsqlDev.
	 Например, для создания пользователя на уровне СУБД;


	- при указании пароля администратора
	 в соединении тонкого клиента (web.config).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MBPolicy: IMetabasePolicy;

    MBPasswordPolicy: IMetabasePasswordPolicy;

    HPass: IHashedPasswords;

    Lic: Object;

Begin

    Mb := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MBPolicy := MS.Policy;

    MBPasswordPolicy := MBPolicy.PasswordPolicy;

    HPass := MBPasswordPolicy.HashedPasswords;

    HPass.IsON := True;

    HPass.ExcludeAdmin := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет включено хеширование паролей, при этом
 пароль администратора хешироваться не будет.


См. также:


[IHashedPasswords](IHashedPasswords.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
