# IGxColorClass.FromKnownColor

IGxColorClass.FromKnownColor
-


# IGxColorClass.FromKnownColor


## Синтаксис


FromKnownColor(KnownColor: [GxKnownColor](../../Enums/GxKnownColor.htm)):
 [IGxColor](../IGxColor/IGxColor.htm);


## Параметры


KnownColor.
 Стандартный цвет.


## Описание


Метод FromKnownColor возвращает
 объект, содержащий стандартный цвет.


## Пример


			Sub UserProc;

Var

    Color: IGxColor;

Begin

    Color := GxColor.FromKnownColor(GxKnownColor.Black);

End Sub UserProc;


После выполнения примера в переменной Color будет содержаться стандартный
 черный цвет.


См. также:


[IGxColorClass](IGxColorClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
