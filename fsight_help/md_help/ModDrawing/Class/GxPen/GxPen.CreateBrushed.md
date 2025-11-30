# GxPen.CreateBrushed

GxPen.CreateBrushed
-


# GxPen.CreateBrushed


## Синтаксис


CreateBrushed(Brush: [IGxBrush](../../Interface/IGxBrush/IGxBrush.htm); [Width: Double = 1]);


## Параметры


Brush. Кисть, определяющая способ рисования с использованием данного пера.


Width. Ширина нового пера. По умолчанию создается перо, размером в один пиксель.


## Описание


Конструктор CreateBrushed создает новое перо на основе кисти, передаваемой посредством параметра Brush.


## Пример


			Function GetPen(PenBrush: IGxBrush; PenWidth: Double): IGxPen;

Var

    OutPen: IGxPen;

Begin

    OutPen := New GxPen.CreateBrushed(PenBrush, PenWidth);

    Return OutPen;

End Function GetPen;


Данная функция вернет перо, созданное на основании кисти и толщины, передаваемых в качестве входных параметров.


См. также:


[GxPen](GxPen.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
