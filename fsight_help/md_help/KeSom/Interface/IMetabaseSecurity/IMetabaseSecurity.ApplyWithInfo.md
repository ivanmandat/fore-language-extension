# IMetabaseSecurity.ApplyWithInfo

IMetabaseSecurity.ApplyWithInfo
-


# IMetabaseSecurity.ApplyWithInfo


## Синтаксис


ApplyWithInfo(InfoUserToUpdate: [IMetabaseUsersUpdate](../IMetabaseUsersUpdate/IMetabaseUsersUpdate.htm)):
 [MetabaseSecurityApplyInformation](../../Enums/MetabaseSecurityApplyInformation.htm);


## Параметры


InfoUserToUpdate. Список пользователей,
 которых необходимо обновить.


Примечание.
 На входе данный параметр должен быть пустым.


## Описание


Метод ApplyWithInfo применяет
 политику безопасности и в случае необходимости возвращает список пользователей,
 которых необходимо обновить.


## Комментарии


В случае если после применения метод возвращает [MetabaseSecurityApplyInformation.NoSysGrants](../../Enums/MetabaseSecurityApplyInformation.htm),
 то параметр InfoUserToUpdate будет
 содержать список пользователей, которых необходимо обновить. Под применением
 политики безопасности понимается сохранение всех изменений, содержащихся
 в настройках менеджера безопасности.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь TEST_USER и группа пользователей с наименованием «ТЕСТОВАЯ
 ГРУППА».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Group: IMetabaseGroup;

    User: IMetabaseUser;

    InfoUserToUpdate: IMetabaseUsersUpdate;

    Result: Integer;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Получим параметры группы пользователей и пользователя

    Group := MS.ResolveName("ТЕСТОВАЯ ГРУППА") As IMetabaseGroup;

    User := MS.ResolveName("TEST_USER") As IMetabaseUser;

    // Раздадим привилегии пользователю

    Policy.Privilege("ВХОД").Grant(User);

    Policy.Privilege("ЧТЕНИЕ").Grant(User);

    // Добавим пользователя в группу

    Group.AddMember(User);

    // Сохраним изменения и обновим список пользователей

    Result := MS.ApplyWithInfo(InfoUserToUpdate);

    If Result = 1 Then

        MS.UpdateUsers(InfoUserToUpdate);

    End If;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера пользователь TEST_USER будет добавлен в тестовую
 группу пользователей с заданными привилегиями.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
