# GxRectF.CreateFromEdges

GxRectF.CreateFromEdges
-


# GxRectF.CreateFromEdges


## Синтаксис


CreateFromEdges(TopLeft: [IGxPointF](../../Interface/IGxPointF/IGxPointF.htm);
 BottomRight: [IGxPointF](../../Interface/IGxPointF/IGxPointF.htm));


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


			Function GetRectFFromEdges(TopLeft: IGxPointF; BottomRight: IGxPointF): IGxRectF;

Var

    OutRect: IGxRectF;

Begin

    OutRect := New GxRectF.CreateFromEdges(TopLeft, BottomRight);

    Return OutRect;

End Function GetRectFFromEdges;


Данная функция возвращает прямоугольник, созданный на основании верхней
 левой и правой нижней точки границ прямоугольника.


См. также:


[GxRectF](GxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
