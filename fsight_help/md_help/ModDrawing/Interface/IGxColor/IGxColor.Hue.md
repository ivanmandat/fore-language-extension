# IGxColor.Hue

IGxColor.Hue
-


# IGxColor.Hue


## Синтаксис


Hue: Double;


## Описание


Свойство Hue возвращает тон цвета в градусах от 0,0 до 360,0.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    d: Double;

Begin

    d:=Panel1.Color.Hue;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в переменной «d» будет содержаться тон цвета панели с наименованием «Panel1».


См. также:


[IGxColor](IGxColor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
