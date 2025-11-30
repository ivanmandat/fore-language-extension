# IClipboard.HasText

IClipboard.HasText
-


# IClipboard.HasText


## Синтаксис


HasText: Boolean;


## Описание


Метод HasText возвращает признак
 наличия в буфере обмена текстовой информации.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием Button1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Cl: Clipboard;

Begin

    Cl := New Clipboard.Create;

    If Cl.HasText Then

        Debug.WriteLine(Cl.Text);

    End If;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку если в буфере обмена
 содержится текстовая информация, то она будет выведена в консоль среды
 разработки.


См.также:


[IClipboard](IClipboard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
