# IMetabaseSecurity.MetabaseClassesSecurityDescriptors

IMetabaseSecurity.MetabaseClassesSecurityDescriptors
-


# IMetabaseSecurity.MetabaseClassesSecurityDescriptors


## Синтаксис


MetabaseClassesSecurityDescriptors: [IMetabaseClassesSecurityDescriptors](../IMetabaseClassesSecurityDescriptors/IMetabaseClassesSecurityDescriptors.htm);


## Описание


Свойство MetabaseClassesSecurityDescriptors
 возвращает параметры безопасности типа объектов.


## Комментарии


Свойство актуально при настройке дискреционного контроля в [параметрах
 управления доступом](Admin.chm::/03_Admin/Admin_AdminObjects.htm#obj_classes) для типа объектов. [Эффективные
 права](Admin.chm::/03_Admin/Admin_AdminObjects_Effective.htm) на объект вычисляются с учётом дискреционных
 прав, заданных для типа объектов.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER и администратору разрешены все операции с типом объектов
 «Таблица» при настройке параметров управления доступом на вкладке «[Дискреционный
 контроль](Admin.chm::/03_admin/admin_adminobjects_discretionary.htm)».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SecDescrs: IMetabaseClassesSecurityDescriptors;

    ClassSecDescr: IMetabaseClassSecurityDescriptor;

    MS: IMetabaseSecurity;

    SecDescr: ISecurityDescriptor;

    Lic: Object;

    Type: AceType;

    Sid: ISid;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Получим параметры безопасности типа объектов «Таблица»

    SecDescrs := MS.MetabaseClassesSecurityDescriptors;

    ClassSecDescr := SecDescrs.Add(MetabaseObjectClass.KE_CLASS_TABLE);

    SecDescr := ClassSecDescr.Descriptor;

    SecDescr.Edit;

    // Запретим любые операции с таблицами пользователю USER

    Type := AceType.AccessDenied;

    Sid := MB.Security.ResolveName("USER").Sid;

    SecDescr.Acl.AddAce(Type, Sid, MetabaseObjectPredefinedRights.All);

    SecDescr.Apply(False);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера пользователю USER будут запрещены любые операции
 с таблицами.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
