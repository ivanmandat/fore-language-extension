# IPopupMenu.Popup

IPopupMenu.Popup
-


# IPopupMenu.Popup


## Синтаксис


Popup(ParentControl: [IControl](../IControl/IControl.htm); X: Integer; Y: Integer);


## Параметры


ParentControl - родительский компонент, для которого вызывается контекстное меню. Данный компонент будет передан в аргумент события [OnPopup](../../Class/PopupMenu/PopupMenu.OnPopup.htm) и доступен для проверки в свойстве [IPopupMenuEventArgs.Control](../IPopupMenuEventArgs/IPopupMenuEventArgs.Control.htm).


X - координаты всплывающего меню по оси X.


Y - координаты всплывающего меню по оси Y.


## Описание


Метод Popup отображает контекстное меню в позиции, координаты которой определяются параметрами X и Y.


## Комментарии


Для данного метода в качестве значений координат X и Y должны указываться экранные координаты. Для получения экранных координат используйте метод [IControl.ClientToScreen](../IControl/IControl.ClientToScreen.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента Memo с наименованием «Memo1» и компонента PopupMenu с наименованием «PopupMenu1».


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        p: IPoint;

    Begin

        p := Self.ClientToScreen(Memo1.Left, Memo1.Top);

        PopupMenu1.Popup(Memo1, p.X + 5, p.Y + 5);

    End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в области компонента «Memo1» будет вызвано контекстное меню. Контекстное меню будет смещено от левого верхнего угла компонента на 5 пикселей по осям X и Y.


См. также:


[IPopupMenu](IPopupMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
