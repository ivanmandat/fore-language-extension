# ITabRegion.BackgroundColor

ITabRegion.BackgroundColor
-


# ITabRegion.BackgroundColor


## Синтаксис


BackgroundColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство BackgroundColor определяет
 цвет фона региона таблицы. По умолчанию цвет прозрачный.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Range: ITabRange;

	    Regs: ITabRegions;

	    Reg: ITabRegion;

	Begin

	    Range := UiTabSheet1.TabSheet.View.Selection.Range;

	    Regs := UiTabSheet1.TabSheet.Regions;

	    Reg := Regs.Add;

	    Reg.Range := Range;

	    Reg.Visible := True;

	    Reg.BackgroundColor := GxColor.FromName("Red");

	End Sub Button1OnClick;


После выполнения примера в отмеченной области таблицы будет создан новый
 регион, и фон этого региона будет иметь красный цвет.


См. также:


[ITabRegion](ITabRegion.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
