# IPrivilege.Revoke

IPrivilege.Revoke
-


# IPrivilege.Revoke


## Синтаксис


Revoke(Subject: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm));


## Параметры


Subject. Субъект безопасности.


## Описание


Метод Revoke изымает привилегию
 у субъекта безопасности, передаваемого посредством параметра Subject.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MP: IMetabasePolicy;

    Priv: IPrivilege;

    Subject: ISecuritySubject;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MP := MS.Policy;

    // Удалим обладателя привилегии

    Priv := MP.Privilege("ЧТЕНИЕ");

    Subject := MS.ResolveName("USER");

    Priv.Revoke(Subject);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера пользователь USER не будет обладать привилегией
 на чтение и открытие объектов репозитория.


См. также:


[IPrivilege](IPrivilege.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
