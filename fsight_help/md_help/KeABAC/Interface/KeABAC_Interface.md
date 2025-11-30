# Интерфейсы сборки ABAC

Интерфейсы сборки ABAC
-


# Интерфейсы сборки ABAC


В рамках сборки ABAC существуют
 следующие интерфейсы:


		 Интерфейс
		 Краткое описание


		 ![](../Interface.gif)
		 [IABACAttribute](IABACAttribute/IABACAttribute.htm)
		 Интерфейс IABACAttribute
		 описывает свойства [пользовательских
		 атрибутов](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm) пользователей, групп пользователей,
		 классов объектов, отдельных типов объектов.


		 ![](../Interface.gif)
		 [IABACAttributeInstance](IABACAttributeInstance/IABACAttributeInstance.htm)
		 Интерфейс IABACAttributeInstance
		 предназначен для работы с существующим атрибутом пользователей,
		 групп пользователей, классов объектов, отдельных типов объектов.


		 ![](../Interface.gif)
		 [IABACAttributeInstances](IABACAttributeInstances/IABACAttributeInstances.htm)
		 Интерфейс IABACAttributeInstances
		 предназначен для работы с атрибутами конкретного пользователя,
		 группы пользователей, класса объектов, отдельного типа объектов.


		 ![](../Interface.gif)
		 [IABACAttributes](IABACAttributes/IABACAttributes.htm)
		 Интерфейс IABACAttributes
		 предназначен для работы с коллекцией атрибутов пользователей,
		 групп пользователей, классов объектов, отдельных типов объектов.


		 ![](../Interface.gif)
		 [IABACEngine](IABACEngine/IABACEngine.htm)
		 Интерфейс IABACEngine
		 предназначен для вычисления заданной политики атрибутного доступа,
		 в результате которого определяется доступ субъекта к объекту.


		 ![](../Interface.gif)
		 [IABACEvaluateCallback](IABACEvaluateCallback/IABACEvaluateCallback.htm)
		 Интерфейс IABACEvaluateCallback
		 предназначен для определения значения атрибута, если атрибут субъекта
		 или объекта неопределен в процессе [вычисления](IABACEngine/IABACEngine.htm)
		 политики атрибутного доступа.


		 ![](../Interface.gif)
		 [IABACEvaluatedObject](IABACEvaluatedObject/IABACEvaluatedObject.htm)


		 Интерфейс IABACEvaluatedObject
		 предназначен для работы с элементами структуры атрибутного доступа.


		 ![](../Interface.gif)
		 [IABACPolicies](IABACPolicies/IABACPolicies.htm)
		 Интерфейс IABACPolicies
		 предназначен для работы с [политиками](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#policy)
		 в структуре атрибутного доступа.


		 ![](../Interface.gif)
		 [IABACPolicy](IABACPolicy/IABACPolicy.htm)
		 Интерфейс IABACPolicy
		 описывает свойства [политики](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#policy).


		 ![](../Interface.gif)
		 [IABACPolicySet](IABACPolicySet/IABACPolicySet.htm)
		 Интерфейс IABACPolicySet
		 описывает свойства [набора
		 политик](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#policies_set).


		 ![](../Interface.gif)
		 [IABACPolicySets](IABACPolicySets/IABACPolicySets.htm)
		 Интерфейс IABACPolicySets
		 предназначен для работы с [наборами
		 политик](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#policies_set) в структуре атрибутного доступа.


		 ![](../Interface.gif)
		 [IABACRootPolicyObject](IABACRootPolicyObject/IABACRootPolicyObject.htm)
		 Интерфейс IABACRootPolicyObject
		 предназначен для работы с [атрибутным
		 доступом](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm) на первом уровне иерархии элементов.


		 ![](../Interface.gif)
		 [IABACRule](IABACRule/IABACRule.htm)
		 Интерфейс IABACRule
		 описывает свойства [правила](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#rule).


		 ![](../Interface.gif)
		 [IABACRules](IABACRules/IABACRules.htm)
		 Интерфейс IABACRules
		 предназначен для работы с [правилами](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#rule)
		 в политике атрибутного доступа.


		 ![](../Interface.gif)
		 [IABACTarget](IABACTarget/IABACTarget.htm)
		 Интерфейс IABACTarget
		 предназначен для настройки логического выражения [цели](Admin.chm::/04_SecurityPolicy/Target.htm)
		 набора политик, политики, правила.


		 ![](../Interface.gif)
		 [IABACUtils](IABACUtils/IABACUtils.htm)
		 Интерфейс IABACUtils
		 предназначен для настройки дополнительного [условия](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm)
		 проверки доступа с использованием предустановленных функций.


		 ![](../Interface.gif)
		 [IMetabaseSecurityClassAttributes](IMetabaseSecurityClassAttributes/IMetabaseSecurityClassAttributes.htm)
		 Интерфейс IMetabaseSecurityClassAttributes
		 предназначен для получения коллекции атрибутов и идентификатора
		 типа объектов.


		 ![](../Interface.gif)
		 [IMetabaseSecurityClassesAttributes](IMetabaseSecurityClassesAttributes/IMetabaseSecurityClassesAttributes.htm)
		 Интерфейс IMetabaseSecurityClassesAttributes
		 предназначен для работы с коллекцией [пользовательских](admin.chm::/04_SecurityPolicy/Admin_PermSep_Attributes.htm)
		 атрибутов типа объектов.


		 ![](../Interface.gif)
		 [IMetabaseSecurityObjectsAttributes](IMetabaseSecurityObjectsAttributes/IMetabaseSecurityObjectsAttributes.htm)
		 Интерфейс IMetabaseSecurityObjectsAttributes
		 предоставляет обращение к классам и отдельным типам объектов,
		 которые содержатся в разделе «[Классы
		 объектов](Admin.chm::/04_SecurityPolicy/Admin_Object_Classes.htm)» менеджера безопасности.


См. также:


[Перечисления
 сборки ABAC](../Enums/KeABAC_Enums.htm) | [Классы сборки
 ABAC](../Class/KeABAC_Classes.htm) | [Примеры](../Examples/KeABAC_Example.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
