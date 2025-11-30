# IGxColor.Saturation

IGxColor.Saturation
-


# IGxColor.Saturation


## Синтаксис


Saturation: Double;


## Описание


Свойство Saturation возвращает насыщенность цвета.


## Комментарии


Возвращаемое значение находится в диапазоне от 0,0 до 1,0.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Panel с наименованием «Panel1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    d: Double;

Begin

    d:=Panel1.Color.Saturation;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в переменной «d» будет содержаться насыщенность цвета панели с наименованием «Panel1».


См. также:


[IGxColor](IGxColor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
