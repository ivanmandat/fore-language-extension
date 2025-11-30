# IToolbarControls.Clear

IToolbarControls.Clear
-


# IToolbarControls.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет удаление
 всех компонентов, расположенных на панели инструментов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента Toolbar с наименованием
 Toolbar1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    Toolbar1.BeginUpdate;

    Toolbar1.Controls.Clear;

    Toolbar1.EndUpdate;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку с панели инструментов
 будут удалены все элементы управления.


См. также:


[IToolbarControls](IToolbarControls.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
