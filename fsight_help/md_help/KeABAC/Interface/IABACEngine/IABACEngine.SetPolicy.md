# IABACEngine.SetPolicy

IABACEngine.SetPolicy
-


# IABACEngine.SetPolicy


## Синтаксис


SetPolicy(Policies: [IABACRootPolicyObject](../IABACRootPolicyObject/IABACRootPolicyObject.htm));


## Параметры


Policies. Структура [атрибутного
 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm).


## Описание


Метод SetPolicy задает политику
 атрибутного доступа.


## Комментарии


Метод используется с методом [IABACEngine.Evaluate](IABACEngine.Evaluate.htm)
 для вычисления доступа субъекта к объекту.


Для обращения к структуре атрибутного доступа:


	- используйте [структуру](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm),
	 сформированную в менеджере безопасности, с помощью свойства [IMetabasePolicy.ABACRules](kesom.chm::/interface/imetabasepolicy/imetabasepolicy.abacrules.htm);


	- используйте класс [ABACRootPolicyObject](../../Class/ABACRootPolicyObject/ABACRootPolicyObject.htm)
	 для формирования отдельной структуры.


## Пример


Использование метода приведено в примере для [IABACEngine.Evaluate](IABACEngine.Evaluate.htm).


См. также:


[IABACEngine](IABACEngine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
