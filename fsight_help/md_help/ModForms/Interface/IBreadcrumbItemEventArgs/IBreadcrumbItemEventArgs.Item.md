# IBreadcrumbItemEventArgs.Item

IBreadcrumbItemEventArgs.Item
-


# IBreadcrumbItemEventArgs.Item


## Синтаксис


Item: [IBreadcrumbItem](../IBreadcrumbItem/IBreadcrumbItem.htm);


## Описание


Свойство Item возвращает элемент, над которым производится какое-либо действие.


Примечание. В событии [OnRemoveItem](../../Class/Breadcrumb/Breadcrumb.OnRemoveItem.htm) удаляемый элемент уже отсутствует, поэтому данное свойство вернет значение Null. Также данное свойство возвращает значение Null в событии [OnGetPopupMenu](../../Class/Breadcrumb/Breadcrumb.OnGetPopupMenu.htm), при вызове всплывающего меню для дополнительной кнопки, отображаемой после кнопки удаления элементов.


См. также:


[IBreadcrumbItemEventArgs](IBreadcrumbItemEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
