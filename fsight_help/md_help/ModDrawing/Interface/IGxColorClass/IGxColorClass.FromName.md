# IGxColorClass.FromName

IGxColorClass.FromName
-


# IGxColorClass.FromName


## Синтаксис


FromName(ColorName: String): [IGxColor](../IGxColor/IGxColor.htm);


## Параметры


ColorName.
 Название цвета.


## Описание


Метод FromName возвращает объект,
 содержащий цвет, наименование которого передается посредством входного
 параметра.


## Пример


			Sub UserProc;

Var

    Color: IGxColor;

Begin

    Color := GxColor.FromName("Black");

End Sub UserProc;


После выполнения примера в переменной Color будет содержаться черный
 цвет.


См. также:


[IGxColorClass](IGxColorClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
