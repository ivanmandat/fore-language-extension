# IABACTarget.AttributeValue

IABACTarget.AttributeValue
-


# IABACTarget.AttributeValue


## Синтаксис


AttributeValue: Variant;


## Описание


Свойство AttributeValue определяет
 значение, сравниваемое с атрибутом.


## Комментарии


Свойство актуально для сравнения атрибута со значением типа данных:
 целый, строковый, дата.


Если используется свойство [IABACTarget.SecondAttrId](IABACTarget.SecondAttrId.htm)
 со значением в виде [пользовательского](admin.chm::/04_SecurityPolicy/Creating_attributes.htm)
 атрибута, то использовать свойство AttributeValue
 не нужно. Значение свойства [IABACTarget.SecondAttrId](IABACTarget.SecondAttrId.htm)
 автоматически передается свойству AttributeValue.
 В результате логического выражения цели сравниваются два пользовательских
 атрибута субъектов или объектов, если свойству [IABACTarget.AttributeId](IABACTarget.AttributeId.htm)
 также был задан пользовательский атрибут.


## Пример


Использование свойства приведено в примере для [IABACPolicySet.CombineAlgorithm](../IABACPolicySet/IABACPolicySet.CombineAlgorithm.htm).


См. также:


[IABACTarget](IABACTarget.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
