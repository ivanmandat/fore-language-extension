# IABACUtils.Count

IABACUtils.Count
-


# IABACUtils.Count


## Синтаксис


Count(Value: Variant): Variant;


## Параметры


Value. Атрибут:


	- SUBJECT.<идентификатор атрибута>.
	 Пользовательский атрибут субъекта;


	- OBJECT.<идентификатор атрибута>.
	 Пользовательский атрибут объекта;


	- SUBJECT.GROUPS. Список
	 групп, в которых состоит пользователь.


Для получения подробной информации обратитесь к разделу «[Доступные
 атрибуты](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#available_attributes)».


## Описание


Метод Count возвращает количество
 значений в массиве [пользовательского
 атрибута](admin.chm::/04_securitypolicy/creating_attributes.htm) субъекта или объекта, а также количество групп,
 в которых состоит пользователь.


## Комментарии


Метод используется только в строковом виде для задания выражения, по
 которому будет вычисляться дополнительное [условие](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm)
 проверки доступа, с помощью свойства [IExpression.AsString](ForeSys.chm::/Interface/IExpression/IExpression.AsString.htm).


Для определения дополнительного [условия](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm)
 проверки доступа используйте свойство [IABACRule.Condition](../IABACRule/IABACRule.Condition.htm).


См. также:


[IABACUtils](IABACUtils.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
