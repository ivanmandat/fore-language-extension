# GxHatchBrush.Create

GxHatchBrush.Create
-


# GxHatchBrush.Create


## Синтаксис


Create(HatchStyle: [GxHatchStyle](../../Enums/GxHatchStyle.htm);
 ForegroundColor: [IGxColor](../../Interface/IGxColor/IGxColor.htm);
 BackgroudColor: [IGxColor](../../Interface/IGxColor/IGxColor.htm));


## Параметры


HatchStyle. Тип штриховки.


ForegroundColor. Цвет фона
 штриховки.


BackgroudColor. Цвет линий
 штриховки.


## Описание


Конструктор Create создает новую
 штриховую кисть в соответствии с указанными параметрами.


## Пример


			Function GetHatchBrush(ForegroundColor: GxKnownColor; BackgroudColor: GxKnownColor): IGxHatchBrush;

Var

    FColor, BColor: IGxColor;

    HatchBrush: IGxHatchBrush;

Begin

    FColor := GxColor.FromKnownColor(ForegroundColor);

    BColor := GxColor.FromKnownColor(BackgroudColor);

    HatchBrush := New GxHatchBrush.Create(GxHatchStyle.HorizontalBrick, FColor, BColor);

    Return HatchBrush;

End Function GetHatchBrush;


Данная функция вернет штриховую кисть с заданным типом штриховки. Цвета
 для кисти передаются посредством входных параметров.


См. также:


[GxHatchBrush](GxHatchBrush.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
