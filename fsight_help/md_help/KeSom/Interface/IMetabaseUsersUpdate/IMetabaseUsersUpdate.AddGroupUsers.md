# IMetabaseUsersUpdate.AddGroupUsers

IMetabaseUsersUpdate.AddGroupUsers
-


# IMetabaseUsersUpdate.AddGroupUsers


## Синтаксис


AddGroupUsers(Value: [IMetabaseGroup](../IMetabaseGroup/IMetabaseGroup.htm);
 UpdateType: [MetabaseSecuritySubjectUpdateType](../../Enums/MetabaseSecuritySubjectUpdateType.htm));


## Параметры


Value. [Группа пользователей](Admin.chm::/03_Admin/Groups/Admin_Groups.htm);


UpdateType. Способ обновления.


## Описание


Метод AddGroupUsers включает
 всех пользователей группы в список для обновления.


## Комментарии


В качестве группы может быть указана группа пользователей, созданная
 в репозитории, или доменная группа пользователей.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 группа пользователей с наименованием «Тестовая группа».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

    UsUp: IMetabaseUsersUpdate;

    Gr: IMetabaseGroup;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Создадим обновление

    UsUp := MS.CreateUsersUpdate;

    Gr := MS.ResolveName("Тестовая
 группа") As IMetabaseGroup;

    UsUp.AddGroupUsers(Gr, MetabaseSecuritySubjectUpdateType.DBGrant);

    // Обновим членов группы

    MS.UpdateUsers(UsUp);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будут обновлены все пользователи группы с наименованием
 «Тестовая группа».


См. также:


[IMetabaseUsersUpdate](IMetabaseUsersUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
