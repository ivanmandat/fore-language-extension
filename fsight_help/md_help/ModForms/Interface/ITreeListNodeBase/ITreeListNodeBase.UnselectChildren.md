# ITreeListNodeBase.UnselectChildren

ITreeListNodeBase.UnselectChildren
-


# ITreeListNodeBase.UnselectChildren


## Синтаксис


UnselectChildren([Recursively: Boolean = False]);


## Параметры


Recursively.
 Параметр, определяющий рекурсивность отмены выделения дочерних элементов
 дерева.


## Описание


Метод UnselectChildren осуществляет
 снятие отметки дочерних элементов.


## Комментарии


Если параметр Recursively принимает
 значение True,
 то отмена выделения осуществляется для всех дочерних элементов. При установке
 параметру значения False произойдет отмена выделения только
 для непосредственных дочерних элементов, расположенных на один уровень
 ниже текущего элемента.


См. также:


[ITreeListNodeBase](ITreeListNodeBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
