# IGxColor.IsKnownColor

IGxColor.IsKnownColor
-


# IGxColor.IsKnownColor


## Синтаксис


IsKnownColor: Boolean;


## Описание


Свойство IsKnownColor возвращает True, если цвет является стандартным.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    s: String;

Begin

    If Panel1.Color.IsKnownColor Then

        s:="Yes";

    Else

        s:="No";

    End If;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в переменной «s» будет содержаться «Yes» если цвет панели с наименованием «Panel1» является стандартным.


См. также:


[IGxColor](IGxColor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
