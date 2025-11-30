# GxLinearGradientBrush.Create

GxLinearGradientBrush.Create
-


# GxLinearGradientBrush.Create


## Синтаксис


Create(StatrColor: [IGxColor](../../Interface/IGxColor/IGxColor.htm);
 EndColor: [IGxColor](../../Interface/IGxColor/IGxColor.htm);
 Angle: Double; [Rect: [IGxRect](../../Interface/IGxRect/IGxRect.htm)
 = Null]);


## Параметры


StatrColor. Начальный цвет
 градиента;


EndColor. Конечный цвет градиента;


Angle. Угол наклона градиента;


Rect. Прямоугольник, ограничивающий
 область градиента. По умолчанию прямоугольник не указывается, при этом
 создается линейно-градиентная кисть, размером 100*100 пикселей.


## Описание


Метод Create создает новую линейно-градиентную
 кисть в соответствии с указанными параметрами.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Drawing.


			Function GetLinearGradientBrush(StartColor: GxKnownColor; EndColor: GxKnownColor; Angle: Double): IGxLinearGradientBrush;

Var

    SColor, EColor: IGxColor;

    LGradientBrush: IGxLinearGradientBrush;

Begin

    SColor := New GxColor.FromKnownColor(StartColor);

    EColor := New GxColor.FromKnownColor(EndColor);

    LGradientBrush := New GxLinearGradientBrush.Create(SColor, EColor, Angle);

    Return LGradientBrush;

End Function GetLinearGradientBrush;


Функция возвращает линейно-градиентную кисть с заданными цветами и углом
 наклона градиента. Размер кисти будет 100*100 пикселей.


См. также:


[GxLinearGradientBrush](GxLinearGradientBrush.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
