# IControl.OnBeginDrag

IControl.OnBeginDrag
-


# OnBeginDrag


## Синтаксис


OnBeginDrag(Sender: Object; Args: [IBeginDragEventArgs](../IBeginDragEventArgs/IBeginDragEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeginDrag для компонента
 наступает, когда пользователь начинает перетаскивать объект от компонента.


## Комментарии


В обработчике данного события для компонента, передаваемого в параметре
 Sender, необходимо инициализировать
 процедуру перетаскивания. Для инициализации используется метод [DoDragDrop](IControl.DoDragDrop.htm).


## Пример


	Sub OnBeginDrag(Sender: Object; Args: IBeginDragEventArgs);

	Begin

	    Self.DoDragDrop(Sender, DragDropEffects.Move);

	End Sub OnBeginDrag;


При выполнении события у компонента, для которого оно сгенерировано,
 будет инициализирована процедура перетаскивания.


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
