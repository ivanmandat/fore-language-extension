# GxSolidBrush.Create

GxSolidBrush.Create
-


# GxSolidBrush.Create


## Синтаксис


Create(Color: [IGxColor](../../Interface/IGxColor/IGxColor.htm));


## Параметры


Color. Цвет кисти.


## Описание


Конструктор Create создает новую
 сплошную кисть с указанным, в параметре Color,
 цветом.


## Пример


Function GetSolidBrush(BrushColor: GxKnownColor): IGxSolidBrush;

Var

    SolidBrush: IGxSolidBrush;

Begin

    SolidBrush := New GxSolidBrush.Create(GxColor.FromKnownColor(BrushColor));

    Return SolidBrush;

End Function GetSolidBrush;


Данная функция вернет сплошную кисть, цвет которой передается в качестве
 входного параметра.


См. также:


[GxSolidBrush](GxSolidBrush.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
