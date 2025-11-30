# ISecurityDescriptor.ApplyO

ISecurityDescriptor.ApplyO
-


# ISecurityDescriptor.ApplyO


## Синтаксис


ApplyO(Options: [SecurityDescriptorApplyFlags](../../Enums/SecurityDescriptorApplyFlags.htm));


## Параметры


Options. Элемент
 перечисления SecurityDescriptorApplyFlags, определяющий, каким образом будут применяться
 права к текущему объекту.


## Описание


Метод ApplyO осуществляет выход
 из режима редактирования с сохранением изменений параметров безопасности
 объекта и определяет, будут ли применяться новые параметры безопасности
 для внутренних объектов и объектов, для которых установлен признак
 [отложенной
 загрузки описания](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm).


## Комментарии


Примером внутреннего объекта является внутренняя модель, которая включена
 в цепочку расчета метамодели. Пример создания внутренней модели приведен
 в описании метода [IMsCalculationChainEntries.AddExclusiveModel](KeMs.chm::/Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.AddExclusiveModel.htm).


При применении прав по иерархии права на внутренние объекты и объекты, для
 которых установлен признак [отложенной
 загрузки описания](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm), не применяются.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER, в навигаторе объектов содержится объект с идентификатором
 OBJECT. Объект содержит дочерние объекты.


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

    ObjDesc := MB.ItemById("OBJECT");

    SecDesc := ObjDesc.SecurityDescriptor;

    Subject := MB.Security.ResolveName("USER");

    SecDesc.Edit;

    AcessCL := SecDesc.Acl;

    AcessCL.AddAce(AceType.AccessAllowed, Subject.Sid, MetabaseObjectPredefinedRights.All);

    SecDesc.ApplyO(SecurityDescriptorApplyFlags.ToInternal);

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в параметрах управления доступом указанного
 объекта и для всех дочерних объектов будет добавлен пользователь. В дополнительных
 параметрах безопасности ему будут назначен полный доступ.


См. также:


[ISecurityDescriptor](ISecurityDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
