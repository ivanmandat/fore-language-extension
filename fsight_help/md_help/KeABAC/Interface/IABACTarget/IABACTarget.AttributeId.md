# IABACTarget.AttributeId

IABACTarget.AttributeId
-


# IABACTarget.AttributeId


## Синтаксис


AttributeId: String;


## Описание


Свойство AttributeId определяет
 [системный](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#available_attributes)
 или [пользовательский](admin.chm::/04_SecurityPolicy/Creating_attributes.htm)
 атрибут в логическом выражении.


## Комментарии


Для сравнения атрибута со значением типа данных: целый, строковый, дата,
 используйте свойство [IABACTarget.AttributeValue](IABACTarget.AttributeValue.htm).


Для сравнения двух атрибутов используйте свойство [IABACTarget.SecondAttrId](IABACTarget.SecondAttrId.htm)
 в качестве значения второго атрибута. Сравнение атрибутов актуально для
 [пользовательских](admin.chm::/04_SecurityPolicy/Creating_attributes.htm)
 атрибутов субъектов или объектов.


## Пример


Использование свойства приведено в примере для [IABACPolicySet.CombineAlgorithm](../IABACPolicySet/IABACPolicySet.CombineAlgorithm.htm).


См. также:


[IABACTarget](IABACTarget.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
