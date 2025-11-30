# FindAttr

FindAttr
-


# FindAttr


## Синтаксис


FindAttr(AttrProperty: String, SubjectAttribute:
 Variant, AttrValue: Variant, ResultProperty: String)


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


Осуществляет поиск атрибута по указанному свойству в списке групп, в
 которых состоит пользователь, и возвращает значение заданного свойства
 найденного атрибута.


## Пример


		 Формула
		 Результат


		 = FindAttr("NAME", SUBJECT.GROUPS, "ADMIN",
		 "NAME")
		 Функция возвращает значение «ADMIN», если в списке групп, в
		 которых состоит пользователь, содержится наименование группы «ADMIN».


		 = FindAttr("NAME", SUBJECT.GROUPS, "ADMIN",
		 "SID")
		 Функция возвращает SID группы «ADMIN», если в списке групп,
		 в которых состоит пользователь, содержится наименование группы
		 «ADMIN».


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) | [Атрибутный доступ](Func_ABAC.htm)
 | [IABACUtils.FindAttr](KeABAC.chm::/Interface/IABACUtils/IABACUtils.FindAttr.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
