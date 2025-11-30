# IABACUtils.FindAttr

IABACUtils.FindAttr
-


# IABACUtils.FindAttr


## Синтаксис


FindAttr(AttrProperty: String; SubjectAttribute:
 Variant; AttrValue: Variant; ResultProperty: String): Variant;


## Параметры


AttrProperty. [Свойство
 атрибута](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#available_attributes), указанное справа от точки в названии атрибута.
 Например, у атрибута «SUBJECT.NAME» левая часть до точки определяет группу
 атрибутов субъектов «SUBJECT», а правая часть от точки указывает на свойство
 атрибута «NAME». Параметр используется для фильтрации атрибутов в коллекции
 по указанному свойству;


SubjectAttribute. Атрибут субъекта
 «[SUBJECT.GROUPS](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#subject)».
 Список групп, в которых состоит пользователь;


AttrValue. Числовое или строковое
 искомое значение, соответствующее указанному свойству атрибута в параметре
 AttrProperty;


ResultProperty. Свойство найденного
 атрибута, значение которого необходимо получить.


## Описание


Метод FindAttr осуществляет
 поиск атрибута по указанному свойству в списке групп, в которых состоит
 пользователь.


## Комментарии


Метод возвращает значение заданного свойства найденного атрибута и используется
 только в строковом виде для задания выражения, по которому будет вычисляться
 дополнительное [условие](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm)
 проверки доступа, с помощью свойства [IExpression.AsString](ForeSys.chm::/Interface/IExpression/IExpression.AsString.htm).


Для определения дополнительного [условия](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm)
 проверки доступа используйте свойство [IABACRule.Condition](../IABACRule/IABACRule.Condition.htm).


См. также:


[IABACUtils](IABACUtils.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
