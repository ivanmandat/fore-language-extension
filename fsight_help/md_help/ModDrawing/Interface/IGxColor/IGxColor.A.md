# IGxColor.A

IGxColor.A
-


# IGxColor.A


## Синтаксис


A: Integer;


## Описание


Свойство A возвращает степень прозрачности цвета от 0 до 255.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    i: Integer;

Begin

    i:=Panel1.Color.A;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в переменной «i» будет содержаться степень прозрачности цвета панели с наименованием «Panel1».


См. также:


[IGxColor](IGxColor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
