# IGxColor.Name

IGxColor.Name
-


# IGxColor.Name


## Синтаксис


Name: String;


## Описание


Свойство Name возвращает название цвета.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    S: String;

Begin

    s:=Panel1.Color.Name;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в переменной «s» будет содержаться название цвета панели с наименованием «Panel1».


См. также:


[IGxColor](IGxColor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
