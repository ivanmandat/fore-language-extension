# IMetabaseListView.EnableSystemPopupMenu

IMetabaseListView.EnableSystemPopupMenu
-


# IMetabaseListView.EnableSystemPopupMenu


## Синтаксис


EnableSystemPopupMenu: Boolean;


## Описание


Свойство EnableSystemPopupMenu
 определяет признак доступности системного контекстного меню для элементов,
 отображаемых в компоненте.


## Комментарии


Допустимые значения:


	- True. Системное контекстное
	 меню доступно. Набор команд зависит от типа объекта, для которого
	 вызывается контекстное меню.


	- False. Значение по умолчанию.
	 Системное контекстное меню не доступно.


При любом значении свойства EnableSystemPopupMenu,
 если для элемента вызывается контекстное меню, то у компонента будет сгенерировано
 событие [MetabaseListView.OnGetItemPopup](../../Class/MetabaseListView/MetabaseListView.OnGetItemPopup.htm).
 Элемент, для которого вызывается контекстное меню, будет доступен в свойстве
 [IMetabaseListViewItemPopupEventArgs.Item](../IMetabaseListViewItemPopupEventArgs/IMetabaseListViewItemPopupEventArgs.Item.htm)
 аргумента события. Используя свойство [IMetabaseListViewItemPopupEventArgs.PopupMenu](../IMetabaseListViewItemPopupEventArgs/IMetabaseListViewItemPopupEventArgs.PopupMenu.htm),
 можно задать собственное контекстное меню, которое будет отображено для
 элемента. Таким образом для разных элементов можно настроить вызов различных
 контекстных меню.


## Пример


Пример использования приведён в описании свойства [IMetabaseListView.Root](IMetabaseListView.Root.htm).


См. также:


[IMetabaseListView](IMetabaseListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
