# IABACUtils.Is_Empty

IABACUtils.Is_Empty
-


# IABACUtils.Is_Empty


## Синтаксис


Is_Empty(Value: Variant): Boolean;


## Параметры


Value. Атрибут:


	- SUBJECT.<идентификатор атрибута>.
	 Пользовательский атрибут субъекта;


	- OBJECT.<идентификатор атрибута>.
	 Пользовательский атрибут объекта.


Для получения подробной информации обратитесь к разделу «[Создание
 пользовательских атрибутов](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm)».


## Описание


Метод Is_Empty определяет, является
 ли значение [пользовательского
 атрибута](admin.chm::/04_securitypolicy/creating_attributes.htm) субъекта или объекта пустым.


## Комментарии


Метод возвращает значение:


	- True. Пользовательский
	 атрибут субъекта или объекта содержит пустое значение;


	- False.
	 Пользовательский атрибут субъекта или объекта не содержит пустое значение.


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
