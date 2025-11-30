# IMetabaseUsersUpdate.AddSubject

IMetabaseUsersUpdate.AddSubject
-


# IMetabaseUsersUpdate.AddSubject


## Синтаксис


AddSubject(Value: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm);
 UpdateType: [MetabaseSecuritySubjectUpdateType](../../Enums/MetabaseSecuritySubjectUpdateType.htm));


## Параметры


Value. Субъект безопасности
 «Форсайт. Аналитическая платформа»:
 пользователь или доменная группа пользователей;


UpdateType. Способ обновления.


## Описание


Метод AddSubject добавляет субъект
 (пользователя или доменную группу пользователей) в список для обновления.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 доменная группа пользователей с наименованием «GROUP\TESTGROUP».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

    UsUp: IMetabaseUsersUpdate;

    Subj: ISecuritySubject;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Создадим обновление

    UsUp := MS.CreateUsersUpdate;

    Subj := MS.ResolveName("GROUP\TESTGROUP") As ISecuritySubject;

    UsUp.AddSubject(Subj, MetabaseSecuritySubjectUpdateType.DBGrant);

    // Обновим членов группы

    MS.UpdateUsers(UsUp);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет обновлена доменная группа пользователей
 с наименованием «GROUP\TESTGROUP».


См. также:


[IMetabaseUsersUpdate](IMetabaseUsersUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
