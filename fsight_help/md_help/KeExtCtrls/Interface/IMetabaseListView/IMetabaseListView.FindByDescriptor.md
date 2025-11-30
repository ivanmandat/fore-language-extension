# IMetabaseListView.FindByDescriptor

IMetabaseListView.FindByDescriptor
-


# IMetabaseListView.FindByDescriptor


## Синтаксис


FindByDescriptor(ObjectDescriptor: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)):
 [IMetabaseListViewItem](../IMetabaseListViewItem/IMetabaseListViewItem.htm);


## Параметры


ObjectDescriptor. Описание
 объекта репозитория, по которому необходимо найти элемент в компоненте.


## Описание


Метод FindByDescriptor осуществляет
 поиск элемента компонента по описанию объекта репозитория.


## Комментарии


Если поиск прошёл успешно, то метод возвращает элемент компонента. Если
 элемент не найден, то метод вернёт значение Null.


См. также:


[IMetabaseListView](IMetabaseListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
