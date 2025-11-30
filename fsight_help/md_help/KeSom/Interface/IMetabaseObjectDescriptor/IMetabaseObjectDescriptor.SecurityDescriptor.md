# IMetabaseObjectDescriptor.SecurityDescriptor

IMetabaseObjectDescriptor.SecurityDescriptor
-


# IMetabaseObjectDescriptor.SecurityDescriptor


## Синтаксис


SecurityDescriptor: [ISecurityDescriptor](../ISecurityDescriptor/ISecurityDescriptor.htm);


## Описание


Свойство SecurityDescriptor
 возвращает параметры управления доступом к текущему объекту.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJECT. В менеджере безопасности создан пользователь
 USER.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    ObjDesc: IMetabaseObjectDescriptor;

    SecDesc: ISecurityDescriptor;

    AcessCL: IAccessControlList;

    Subject: ISecuritySubject;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    // Получим объект

    ObjDesc := MB.ItemById("OBJECT");

    SecDesc := ObjDesc.SecurityDescriptor;

    Subject := MB.Security.ResolveName("USER");

    SecDesc.Edit;

    // Разрешим полный доступ пользователю к объекту

    AcessCL := SecDesc.Acl;

    AcessCL.AddAce(AceType.AccessAllowed, Subject.Sid, MetabaseObjectPredefinedRights.All);

    SecDesc.Apply(True);

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера для указанного объекта будет добавлен пользователь.
 Для пользователя будет разрешён полный доступ в дополнительных параметрах
 безопасности.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
