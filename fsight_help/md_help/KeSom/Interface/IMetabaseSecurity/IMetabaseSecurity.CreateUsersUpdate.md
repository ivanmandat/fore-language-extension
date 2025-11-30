# IMetabaseSecurity.CreateUsersUpdate

IMetabaseSecurity.CreateUsersUpdate
-


# IMetabaseSecurity.CreateUsersUpdate


## Синтаксис


CreateUsersUpdate: [IMetabaseUsersUpdate](../IMetabaseUsersUpdate/IMetabaseUsersUpdate.htm);


## Описание


Метод CreateUsersUpdate создает
 коллекцию, используемую для обновления пользователей.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Users: IMetabaseUsers;

    User: IMetabaseUser;

    UsUpdate: IMetabaseUsersUpdate;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Обновим информацию о пользователях

    Users := MS.Users;

    UsUpdate := MS.CreateUsersUpdate;

    For Each User In Users Do

        UsUpdate.Add(User);

    End For;

    MS.UpdateUsers(UsUpdate);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет обновлена информация обо всех пользователях
 в текущем репозитории.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
