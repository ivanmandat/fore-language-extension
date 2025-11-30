# ScenarioDimensionSpecificRights

ScenarioDimensionSpecificRights
-


# ScenarioDimensionSpecificRights


## Описание


Перечисление ScenarioDimensionSpecificRights
 содержит список специфических операций для объекта репозитория «[Сценарий
 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_2_Window_container/Scenario_Of_Modeling.htm)».


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
		 WriteFact. Запись данных
		 по сценарию «Факт». Это
		 право наследуется от прав MetabaseObjectPredefinedRights.Write
		 и MetabaseObjectPredefinedRights.WriteBody.
		 Если разрешено право Write
		 или WriteBody, то право
		 WriteFact тоже будет
		 разрешено для пользователя. И наоборот: если право WriteFact
		 явно запрещено для пользователя, то права Write
		 и WriteBody будут тоже
		 явно запрещены.


См. также:


[Перечисления
 сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
