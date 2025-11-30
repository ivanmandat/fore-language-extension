# IABACUtils

IABACUtils
-


# IABACUtils


## Описание


Интерфейс IABACUtils предназначен
 для настройки дополнительного [условия](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm)
 проверки доступа с использованием предустановленных функций.


## Комментарии


Дополнительное условие проверки доступа задается в виде логического
 выражения с помощью свойства [IABACRule.Condition](../IABACRule/IABACRule.Condition.htm).


Важно. При
 формировании выражения предустановленные функции атрибутного доступа задаются
 только в строковом виде с помощью свойства [IExpression.AsString](ForeSys.chm::/Interface/IExpression/IExpression.AsString.htm).
 Методы интерфейса IABACUtils не
 используются.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Count](IABACUtils.Count.htm)
		 Метод Count возвращает
		 количество значений в массиве [пользовательского
		 атрибута](admin.chm::/04_securitypolicy/creating_attributes.htm) субъекта или объекта, а также количество
		 групп, в которых состоит пользователь.


		 ![](../../Sub_Image.gif)
		 [FindAttr](IABACUtils.FindAttr.htm)
		 Метод FindAttr осуществляет
		 поиск атрибута по указанному свойству в списке групп, в которых
		 состоит пользователь.


		 ![](../../Sub_Image.gif)
		 [Interseca](IABACUtils.Interseca.htm)
		 Метод Interseca осуществляет
		 поиск общих значений сравниваемых аргументов.


		 ![](../../Sub_Image.gif)
		 [Intersecc](IABACUtils.Intersecc.htm)
		 Метод Intersecc осуществляет
		 поиск общих значений сравниваемых аргументов по указанному свойству
		 атрибута.


		 ![](../../Sub_Image.gif)
		 [Is_Empty](IABACUtils.Is_Empty.htm)
		 Метод Is_Empty определяет,
		 является ли значение [пользовательского
		 атрибута](admin.chm::/04_securitypolicy/creating_attributes.htm) субъекта или объекта пустым.


См. также:


[Интерфейсы
 сборки ABAC](../KeABAC_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
