# IMetabaseUser.CannotChangePassword

IMetabaseUser.CannotChangePassword
-


# IMetabaseUser.CannotChangePassword


## Синтаксис


CannotChangePassword:
 Boolean;


## Описание


Свойство CannotChangePassword
 определяет признак запрета смены пароля пользователем.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом пользователь может сменить собственный пароль. Если свойству
 установить значение True, то при
 попытке изменить пароль будет генерироваться исключительная ситуация.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    User: IMetabaseUser;

    Users: IMetabaseUsers;

    MS: IMetabaseSecurity;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Users := MS.Users;

    User := Users.Item(0);

    // Запретим смену пароля пользователем

    User.CannotChangePassword := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет установлен запрет на смену пароля для
 первого пользователя.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
