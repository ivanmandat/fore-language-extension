# IGxColor.Brightness

IGxColor.Brightness
-


# IGxColor.Brightness


## Синтаксис


Brightness: Double;


## Описание


Свойство Brightness возвращает яркость цвета от 0,0 до 1,0.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);
Var

    d: Double;
Begin

    d:=Panel1.Color.Brightness;
End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в переменной «d» будет содержаться яркость цвета панели с наименованием «Panel1».


См. также:


[IGxColor](IGxColor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
