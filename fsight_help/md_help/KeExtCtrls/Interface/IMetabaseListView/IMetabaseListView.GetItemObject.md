# IMetabaseListView.GetItemObject

IMetabaseListView.GetItemObject
-


# IMetabaseListView.GetItemObject


## Синтаксис


GetItemObject(Item: [IMetabaseListViewItem](../IMetabaseListViewItem/IMetabaseListViewItem.htm)):
 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Item. Элемент компонента.


## Описание


Метод GetItemObject возвращает
 описание объекта репозитория, которому соответствует указанный элемент
 компонента.


## Комментарии


Список элементов компонента можно получить в свойстве [Items](ModForms.chm::/Interface/IListView/IListView.Items.htm).
 Каждый элемент списка может быть приведён к интерфейсу [IMetabaseListViewItem](../IMetabaseListViewItem/IMetabaseListViewItem.htm).
 Также можно использовать другие свойства и методы, которые возвращают
 тип [IMetabaseListViewItem](../IMetabaseListViewItem/IMetabaseListViewItem.htm)
 или [IListViewItem](ModForms.chm::/Interface/IListViewItem/IListViewItem.htm).


## Пример


Использование метода приведено в примере для [IMetabaseListView.SelectElem](IMetabaseListView.SelectElem.htm).


См. также:


[IMetabaseListView](IMetabaseListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
