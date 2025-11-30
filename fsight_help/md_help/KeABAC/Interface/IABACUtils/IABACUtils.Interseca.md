# IABACUtils.Interseca

IABACUtils.Interseca
-


# IABACUtils.Interseca


## Синтаксис


Interseca(Value1: Variant; Value2: Variant): Boolean;


## Параметры


Value1. Первый сравниваемый
 аргумент;


Value2. Второй сравниваемый
 аргумент.


В качестве аргументов задается:


	- SUBJECT.<идентификатор атрибута>.
	 Значение или массив значений пользовательского атрибута субъекта;


	- OBJECT.<идентификатор атрибута>.
	 Значение или массив значений пользовательского атрибута объекта.


Важно. [Массив
 значений](uinav.chm::/03_Objects/UiNav_Obj_BasicPropAttributes.htm) должен содержаться хотя бы в одном из заданных
 аргументов.


Для получения подробной информации обратитесь к разделу «[Создание
 пользовательских атрибутов](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm)».


## Описание


Метод Interseca осуществляет
 поиск общих значений сравниваемых аргументов.


## Комментарии


Метод возвращает значение:


	- True. Найдены общие
	 значения сравниваемых аргументов;


	- False.
	 Не найдены общие значения сравниваемых аргументов.


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
