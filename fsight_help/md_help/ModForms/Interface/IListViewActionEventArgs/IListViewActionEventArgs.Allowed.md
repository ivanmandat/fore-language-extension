# IListViewActionEventArgs.Allowed

IListViewActionEventArgs.Allowed
-


# IListViewActionEventArgs.Allowed


## Синтаксис


Allowed: Boolean;


## Описание


Свойство Allowed определяет
 признак разрешения действия.


## Комментарии


Если свойству установить значение False,
 то действие будет запрещено. По умолчанию свойству установлено значение
 True.


Данное свойство используется в следующих случаях:


	- Определение доступа на редактирование текста элемента
	 в событии [OnEditing](../../Class/ListView/ListView.OnEditing.htm);


	- Определение доступа на изменение состояния флажка
	 элемента в событии [OnChecking](../../Class/ListView/ListView.OnChecking.htm);


	- Определение возможности сменить сфокусированный элемент
	 в событии [OnFocusChanging](../../Class/ListView/ListView.OnFocusChanging.htm);


	- Определение возможности изменения отметки элементов
	 в событии [OnSelectingItem](../../Class/ListView/ListView.OnSelectingItem.htm).


См. также:


[IListViewActionEventArgs](IListViewActionEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
