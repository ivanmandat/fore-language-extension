# DictionarySpecificRights

DictionarySpecificRights
-


# DictionarySpecificRights


## Описание


Перечисление DictionarySpecificRights
 содержит список специфических операций, доступных для различных [справочников НСИ](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Master_RDS.htm).


## Комментарии


Список основных и дополнительных операций доступен в перечислении [MetabaseObjectPredefinedRights](MetabaseObjectPredefinedRights.htm).


Используется следующими свойствами и методами:


	- [IMetabaseObjectDescriptor.HasAccess](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.HasAccess.htm);


	- [IMetabaseObjectDescriptor.CheckAndAudit](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAudit.htm);


	- [IMetabaseObjectDescriptor.CheckAndAuditLabel](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAuditLabel.htm);


	- [IMetabaseObjectDescriptor.GetDeniedAccess](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.GetDeniedAccess.htm);


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
		 ReadElements. Чтение
		 элементов справочника.


		 2097152
		 UpdateElements. Изменение
		 элементов справочника.


		 4194304
		 InsertElements. Добавление
		 элементов справочника.


		 8388608
		 DeleteElements. Удаление
		 элементов справочника.


		 16777216
		 AccessElements. Изменение
		 прав на элементы.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
