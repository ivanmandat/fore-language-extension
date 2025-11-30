# IMetabaseClassesSecurityDescriptors.CreateDescriptor

IMetabaseClassesSecurityDescriptors.CreateDescriptor
-


# IMetabaseClassesSecurityDescriptors.CreateDescriptor


## Синтаксис


CreateDescriptor(ClassId: [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm)):
 [IMetabaseClassSecurityDescriptor](../IMetabaseClassSecurityDescriptor/IMetabaseClassSecurityDescriptor.htm);


## Параметры


ClassId. Тип объектов.


## Описание


Метод CreateDescriptor создает
 дескриптор безопасности для типа объектов без добавления в коллекцию.


## Комментарии


Для добавления созданного дескриптора безопасности с заданными правами
 доступа в коллекцию используйте метод [IMetabaseClassesSecurityDescriptors.AddDescriptor](IMetabaseClassesSecurityDescriptors.AddDescriptor.htm).


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 администратор ADMIN.


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

    // Создадим дескриптор безопасности для типа объектов «Рабочая книга»

    SecDescrs := MS.MetabaseClassesSecurityDescriptors;

    ClassSecDescr := SecDescrs.CreateDescriptor(MetabaseObjectClass.KE_CLASS_WORKBOOK);

    SecDescr := ClassSecDescr.Descriptor;

    SecDescr.Edit;

    // Разрешим администратору выполнение любых операций с рабочими книгами

    Type := AceType.AccessAllowed;

    Sid := MB.Security.ResolveName("ADMIN").Sid;

    SecDescr.Acl.AddAce(Type, Sid, MetabaseObjectPredefinedRights.All);

    // Добавим созданный дескриптор типу объектов «Рабочая книга»

    SecDescrs.AddDescriptor(ClassSecDescr);

    SecDescr.Apply(False);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера администратору будут разрешены любые операции
 с рабочими книгами.


См. также:


[IMetabaseClassesSecurityDescriptors](IMetabaseClassesSecurityDescriptors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
