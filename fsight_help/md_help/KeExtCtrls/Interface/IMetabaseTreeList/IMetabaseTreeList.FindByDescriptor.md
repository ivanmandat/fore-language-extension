# IMetabaseTreeList.FindByDescriptor

IMetabaseTreeList.FindByDescriptor
-


# IMetabaseTreeList.FindByDescriptor


## Синтаксис


FindByDescriptor(ObjectDescriptor: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)):
 [IMetabaseTreeListNode](../IMetabaseTreeListNode/IMetabaseTreeListNode.htm);


## Параметры


ObjectDescriptor. Описание
 объекта репозитория, для которого необходимо найти соответствующий элемент
 в дереве компонента.


## Описание


Метод FindByDescriptor осуществляет
 поиск вершины в дереве компонента, соответствующей объекту репозитория,
 описание которого передается посредством параметра ObjectDescriptor.
 В случае удачного поиска метод возвращает параметры вершины, иначе Null.


См. также:


[IMetabaseTreeList](IMetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
