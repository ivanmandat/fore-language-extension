# CustomObjectSpecificRights

CustomObjectSpecificRights
-


# CustomObjectSpecificRights


## Описание


Перечисление CustomObjectSpecificRights
 содержит список специфических операций, доступных для объектов пользовательских
 классов.


## Комментарии


Количество используемых значений зависит от количества операций, созданных
 для определенного пользовательского класса объектов. Коллекцию операций
 пользовательского класса можно получить в свойстве [Operations](../Interface/IMetabaseCustomClass/IMetabaseCustomClass.Operations.htm).
 Список основных и дополнительных операций доступен в перечислении [MetabaseObjectPredefinedRights](MetabaseObjectPredefinedRights.htm).


Используется следующими свойствами и методами:


	- [IMetabaseObjectDescriptor.HasAccess](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.HasAccess.htm);


	- [IMetabaseObjectDescriptor.CheckAndAudit](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAudit.htm);


	- [IMetabaseObjectDescriptor.CheckAndAuditLabel](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAuditLabel.htm);


	- [IMetabaseUser.HasAccess](../Interface/IMetabaseUser/IMetabaseUser.HasAccess.htm);


	- [ISecurityDescriptor.HasAccess](../Interface/ISecurityDescriptor/ISecurityDescriptor.HasAccess.htm);


	- [ISecurityDescriptor.HasAccessAudit](../Interface/ISecurityDescriptor/ISecurityDescriptor.HasAccessAudit.htm);


	- [ISecurityDescriptor.HasAccessAuditLabel](../Interface/ISecurityDescriptor/ISecurityDescriptor.HasAccessAuditLabel.htm);


	- [ISecurityDescriptor.GetDeniedAccess](../Interface/ISecurityDescriptor/ISecurityDescriptor.GetDeniedAccess.htm);


	- [ISecurityDescriptor.GetEffectiveRights](../Interface/ISecurityDescriptor/ISecurityDescriptor.GetEffectiveRights.htm);


	- [ISecurityDescriptor.GetEffectiveRightsAudit](../Interface/ISecurityDescriptor/ISecurityDescriptor.GetEffectiveRightsAudit.htm);


	- [ISecurityDescriptor.GetEffectiveRightsAuditLabel](../Interface/ISecurityDescriptor/ISecurityDescriptor.GetEffectiveRightsAuditLabel.htm);


	- [IAccessControlList.AddAce](../Interface/IAccessControlList/IAccessControlList.AddAce.htm);


	- [IAccessControlEntry.AccessMask](../Interface/IAccessControlEntry/IAccessControlEntry.AccessMask.htm);


	- [IMetabaseAuditPolicy.FilterClass](../Interface/IMetabaseAuditPolicy/IMetabaseAuditPolicy.FilterClass.htm);


	- [IMetabaseAuditPolicy.TrackClassHistory](../Interface/IMetabaseAuditPolicy/IMetabaseAuditPolicy.TrackClassHistory.htm);


	- [IAuditFilterCondition.Operation](../Interface/IAuditFilterCondition/IAuditFilterCondition.Operation.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 1048576
		 Operation0. Операция
		 №1.


		 2097152
		 Operation1. Операция
		 №2.


		 4194304
		 Operation2. Операция
		 №3.


		 8388608
		 Operation3 - операция
		 №4.


		 16777216
		 Operation4 - операция
		 №5.


		 33554432
		 Operation5 - операция
		 №6.


		 67108864
		 Operation6 - операция
		 №7.


		 134217728
		 Operation7 - операция
		 №8.


		 268435456
		 Operation8 - операция
		 №9.


		 536870912
		 Operation9 - операция
		 №10.


		 1073741824
		 Operation10 - операция
		 №11.


		 -2147483648
		 Operation11 - операция
		 №12.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
