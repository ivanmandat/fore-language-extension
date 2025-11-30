# GxRect.CreateFromEdges

GxRect.CreateFromEdges
-


# GxRect.CreateFromEdges


## Синтаксис


CreateFromEdges(TopLeft: [IGxPoint](../../Interface/IGxPoint/IGxPoint.htm);
 BottomRight: [IGxPoint](../../Interface/IGxPoint/IGxPoint.htm));


## Параметры


TopLeft. Точка, определяющая
 верхний левый угол прямоугольника.


BottomRight. Точка, определяющая
 нижний правый угол прямоугольника.


## Описание


Конструктор CreateFromEdges
 создает новый прямоугольник, рассчитывая размеры и расположение в соответствии
 с указанными угловыми точками.


## Пример


			Function GetRectFromEdges(TopLeft: IGxPoint; BottomRight: IGxPoint): IGxRect;

Var

    OutRect: IGxRect;

Begin

    OutRect := New GxRect.CreateFromEdges(TopLeft, BottomRight);

    Return OutRect;

End Function GetRectFromEdges;


Данная функция возвращает прямоугольник, созданный на основании верхней
 левой и правой нижней точки границ прямоугольника.


См. также:


[GxRect](GxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
