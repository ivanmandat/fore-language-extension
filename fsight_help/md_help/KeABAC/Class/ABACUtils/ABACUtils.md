# ABACUtils

ABACUtils
-


# ABACUtils


Класс ABACUtils реализует настройку
 дополнительного [условия](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm)
 проверки доступа с использованием предустановленных функций.


## Комментарии


Дополнительное условие проверки доступа задается в виде логического
 выражения с помощью свойства [IABACRule.Condition](../../Interface/IABACRule/IABACRule.Condition.htm).


Важно. При
 формировании выражения предустановленные функции атрибутного доступа задаются
 только в строковом виде с помощью свойства [IExpression.AsString](ForeSys.chm::/Interface/IExpression/IExpression.AsString.htm).
 Методы интерфейса IABACUtils не
 используются.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](ForeSys.chm::/Class/Object/Object.Create.htm)
		 Конструктор Create
		 создает экземпляр объекта класса.


## Методы, унаследованные от [IABACUtils](../../Interface/IABACUtils/IABACUtils.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Count](../../Interface/IABACUtils/IABACUtils.Count.htm)
		 Метод Count возвращает
		 количество значений в массиве [пользовательского
		 атрибута](admin.chm::/04_securitypolicy/creating_attributes.htm) субъекта или объекта, а также количество
		 групп, в которых состоит пользователь.


		 ![](../../Sub_Image.gif)
		 [FindAttr](../../Interface/IABACUtils/IABACUtils.FindAttr.htm)
		 Метод FindAttr осуществляет
		 поиск атрибута по указанному свойству в списке групп, в которых
		 состоит пользователь.


		 ![](../../Sub_Image.gif)
		 [Interseca](../../Interface/IABACUtils/IABACUtils.Interseca.htm)
		 Метод Interseca осуществляет
		 поиск общих значений сравниваемых аргументов.


		 ![](../../Sub_Image.gif)
		 [Intersecc](../../Interface/IABACUtils/IABACUtils.Intersecc.htm)
		 Метод Intersecc осуществляет
		 поиск общих значений сравниваемых аргументов по указанному свойству
		 атрибута.


		 ![](../../Sub_Image.gif)
		 [Is_Empty](../../Interface/IABACUtils/IABACUtils.Is_Empty.htm)
		 Метод Is_Empty определяет,
		 является ли значение [пользовательского
		 атрибута](admin.chm::/04_securitypolicy/creating_attributes.htm) субъекта или объекта пустым.


См. также:


[Классы
 сборки ABAC](../KeABAC_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
