# IGxColorClass.FromSystemColor

IGxColorClass.FromSystemColor
-


# IGxColorClass.FromSystemColor


## Синтаксис


FromSystemColor(SystemColor: [GxSystemColor](../../Enums/GxSystemColor.htm)):
 [IGxColor](../IGxColor/IGxColor.htm);


## Параметры


SystemColor.
 Системный цвет.


## Описание


Метод FromSystemColor возвращает
 объект, содержащий системный цвет.


## Пример


			Sub UserProc;

Var

    Color: IGxColor;

Begin

    Color := GxColor.FromSystemColor(GxSystemColor.Desktop);

End Sub UserProc;


После выполнения примера в переменной Color будет содержаться системный
 цвет рабочего стола.


См. также:


[IGxColorClass](IGxColorClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
