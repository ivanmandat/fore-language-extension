# PopupMenuEventArgs.CreateArgs

PopupMenuEventArgs.CreateArgs
-


# PopupMenuEventArgs.CreateArgs


## Синтаксис


CreateArgs(Control: [IControl](../../Interface/IControl/IControl.htm));


## Параметры


Control. Компонент, над которым
 будет сгенерировано событие вызова контекстного меню.


## Описание


Конструктор CreateArgs создает
 аргумент события, возникающего при вызове контекстного меню над каким
 либо компонентом формы.


## Пример


Для выполнения примера предполагается наличие формы, кнопки с наименованием
 Button1, компонента PopupMenu с наименованием PopupMenu1 и компонента
 ScrollBox с наименованием ScrollBox1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Popup: IPopupMenuEventArgs;

Begin

    Popup := New PopupMenuEventArgs.CreateArgs(ScrollBox1);

    PopupMenu1.OnPopup(PopupMenu1, Popup);

End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку, будет сгенерировано
 событие вызова контекстного меню над компонентом ScrollBox1.


См. также:


[PopupMenuEventArgs](PopupMenuEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
