# IMetabaseClassesSecurityDescriptors.ItemByClassId

IMetabaseClassesSecurityDescriptors.ItemByClassId
-


# IMetabaseClassesSecurityDescriptors.ItemByClassId


## Синтаксис


ItemByClassId(ClassId: [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm)):
 [IMetabaseClassSecurityDescriptor](../IMetabaseClassSecurityDescriptor/IMetabaseClassSecurityDescriptor.htm);


## Параметры


ClassId. Тип объектов.


## Описание


Свойство ItemByClassId возвращает
 параметры дескриптора безопасности по типу объектов.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER и администратору разрешены все операции с типом объектов
 «Экспресс-отчет» при настройке параметров управления доступом на вкладке
 «[Дискреционный
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

    // Получим параметры безопасности типа объектов «Экспресс-отчет»

    SecDescrs := MS.MetabaseClassesSecurityDescriptors;

    ClassSecDescr := SecDescrs.ItemByClassId(MetabaseObjectClass.KE_CLASS_EXPRESSREPORT);

    SecDescr := ClassSecDescr.Descriptor;

    SecDescr.Edit;

    // Запретим любые операции с экспресс-отчетами пользователю USER

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
 с экспресс-отчетами.


См. также:


[IMetabaseClassesSecurityDescriptors](IMetabaseClassesSecurityDescriptors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
