# IGxColorClass.FromThemeColor

IGxColorClass.FromThemeColor
-


# IGxColorClass.FromThemeColor


## Синтаксис


FromThemeColor(ThemeColor: [GxThemeColor](../../Enums/GxThemeColor.htm)):
 [IGxColor](../IGxColor/IGxColor.htm);


## Параметры


ThemeColor. Элемент, для которого
 в теме оформления определен цвет.


## Описание


Метод FromThemeColor возвращает
 цвет, предопределенный для указанного элемента текущей темой оформления.


## Пример


	Sub UserProc;

	Var

	    Color: IGxColor;

	Begin

	    Color := GxColor.FromThemeColor(GxThemeColor.ActiveCaption);

	End Sub UserProc;


После выполнения примера в переменной Color будет содержаться цвет фона
 строки заголовка активного окна, определенный текущей темой оформления.


См. также:


[IGxColorClass](IGxColorClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
