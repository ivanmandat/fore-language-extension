# IABACRule.Condition

IABACRule.Condition
-


# IABACRule.Condition


## Синтаксис


Condition: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Condition определяет
 для правила дополнительное [условие](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm)
 проверки доступа.


## Комментарии


Для определения выражения, по которому будет вычисляться дополнительное
 условие проверки доступа, используйте свойство [IExpression.AsString](ForeSys.chm::/Interface/IExpression/IExpression.AsString.htm).
 Выражение задается в строковом виде.


Для проверки корректности выражения используйте свойство [IExpression.Valid](ForeSys.chm::/Interface/IExpression/IExpression.Valid.htm).


## Пример


Использование свойства приведено в примере для [IABACRootPolicyObject.Policies](../IABACRootPolicyObject/IABACRootPolicyObject.Policies.htm).


См. также:


[IABACRule](IABACRule.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
