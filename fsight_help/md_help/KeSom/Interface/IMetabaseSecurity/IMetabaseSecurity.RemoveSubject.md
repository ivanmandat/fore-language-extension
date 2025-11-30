# IMetabaseSecurity.RemoveSubject

IMetabaseSecurity.RemoveSubject
-


# IMetabaseSecurity.RemoveSubject


## Синтаксис


RemoveSubject(Subj: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm)):
 Boolean;


## Параметры


Subj. Субъект безопасности, который необходимо
 удалить.


## Описание


Метод RemoveSubject осуществляет
 удаление субъекта безопасности, передаваемого посредством параметра Subj.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    SS: ISecuritySubject;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Удалим группу пользователей

    SS := MS.Groups.Item(MS.Groups.Count - 1);

    MS.RemoveSubject(SS);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет удалена последняя группа пользователей,
 созданная в менеджере безопасности текущего репозитория.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
