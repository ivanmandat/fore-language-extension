# IMetabaseUsersUpdate.ItemSetup

IMetabaseUsersUpdate.ItemSetup
-


# IMetabaseUsersUpdate.ItemSetup


## Синтаксис


ItemSetup(Index: Integer): [IMetabaseSecuritySubjectUpdateSetup](../IMetabaseSecuritySubjectUpdateSetup/IMetabaseSecuritySubjectUpdateSetup.htm);


## Параметры


Index. Индекс пользователя
 в списке обновления.


## Описание


Свойство ItemSetup возвращает
 настройки обновления субъекта безопасности.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Sec: IMetabaseSecurity;

    Users: IMetabaseUsers;

    User: IMetabaseUser;

    i: Integer;

    UsUpdate: IMetabaseUsersUpdate;

    Subj: ISecuritySubject;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    Sec := MB.Security;

    Users := Sec.Users;

    // Создадим обновление

    UsUpdate := Sec.CreateUsersUpdate;

    For i := 0 To Users.Count - 1 Do

        User := Users.Item(i);

        UsUpdate.Add(User);

        If User.Name = "NewUser" Then

            UsUpdate.ItemSetup(i).UpdateType := MetabaseSecuritySubjectUpdateType.DBGrant;

        End If;

    End For;

    For i := 0 To UsUpdate.Count - 1 Do

        Subj := UsUpdate.ItemSetup(i).Subject;

        Debug.Writeline(i.ToString + ". Name: " + Subj.Name);

    End For;

    Sec.UpdateUsers(UsUpdate);

    // Сохраним изменения

    Sec.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль будет выведен список обновляемых
 пользователей. Если есть пользователь с наименованием «NewUser»,
 то для него будет изменен способ обновления. В результате все пользователи
 будут обновлены.


См. также:


[IMetabaseUsersUpdate](IMetabaseUsersUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
