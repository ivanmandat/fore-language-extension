# ListView.OnChecking

ListView.OnChecking
-


# ListView.OnChecking


## Синтаксис


OnChecking(Sender: Object; Args: [IListViewActionEventArgs](../../Interface/IListViewActionEventArgs/IListViewActionEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnChecking наступает,
 когда пользователь начинает отмечать элемент списка.


## Комментарии


Обработчик позволяет запретить отметку элемента. Событие происходит,
 если [CheckBoxes](../../Interface/IListView/IListView.Checkboxes.htm)
 = True.


См. также:


[ListView](ListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
