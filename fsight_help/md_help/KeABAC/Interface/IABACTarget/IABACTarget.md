# IABACTarget

IABACTarget
-


# IABACTarget


## Описание


Интерфейс IABACTarget предназначен
 для настройки логического выражения [цели](Admin.chm::/04_SecurityPolicy/Target.htm)
 набора политик, политики, правила.


## Комментарии


Для определения набора политик используйте интерфейс [IABACPolicySet](../IABACPolicySet/IABACPolicySet.htm),
 для политики - [IABACPolicy](../IABACPolicy/IABACPolicy.htm),
 для правила - [IABACRule](../IABACRule/IABACRule.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttributeId](IABACTarget.AttributeId.htm)
		 Свойство AttributeId
		 определяет [системный](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#available_attributes)
		 или [пользовательский](admin.chm::/04_SecurityPolicy/Creating_attributes.htm)
		 атрибут в логическом выражении.


		 ![](../../Property_Image.gif)
		 [AttributeValue](IABACTarget.AttributeValue.htm)
		 Свойство AttributeValue
		 определяет значение, сравниваемое с атрибутом.


		 ![](../../Property_Image.gif)
		 [Operation](IABACTarget.Operation.htm)
		 Свойство Operation
		 определяет операцию сравнения атрибута и значения.


		 ![](../../Property_Image.gif)
		 [SecondAttrId](IABACTarget.SecondAttrId.htm)
		 Свойство SecondAttrId
		 определяет значение в виде [пользовательского](admin.chm::/04_SecurityPolicy/Creating_attributes.htm)
		 атрибута для сравнения с заданным атрибутом.


См. также:


[Интерфейсы
 сборки ABAC](../KeABAC_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
