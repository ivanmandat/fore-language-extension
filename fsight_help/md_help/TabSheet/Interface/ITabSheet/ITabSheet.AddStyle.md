# ITabSheet.AddStyle

ITabSheet.AddStyle
-


# ITabSheet.AddStyle


## Синтаксис


AddStyle(Style: [ITabCellStyle](../ITabCellStyle/ITabCellStyle.htm)):
 Integer;


## Параметры


Style — стиль,
 который необходимо добавить.


## Описание


Метод AddStyle позволяет добавить
 новый стиль оформления.


## Пример


	Sub AddStyle;

	Var

	    style : ITabCellStyle;

	Begin

	    style:= New TabCellStyle.Create;

	    style.BackgroundColor:= New GxColor.CreateRGB(255,0,0);

	    UiTabSheet1.TabSheet.AddStyle(style);

	    UiTabSheet1.TabSheet.ParseCell("a0").Style := style;

	End Sub AddStyle;


После выполнения примера для ячейки "a0" установится стиль,
 содержащий красный цвет фона.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
