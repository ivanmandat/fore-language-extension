# GxPointF.CreateFromPoint

GxPointF.CreateFromPoint
-


# GxPointF.CreateFromPoint


## Синтаксис


CreateFromPoint(Point: [IGxPointF](../../Interface/IGxPointF/IGxPointF.htm));


## Параметры


Point.
 Точка, на основе которой создается новая точка.


## Описание


Конструктор CreateFromPoint
 создает новую точку, которая является копией точки, передаваемой посредством
 параметра Point.


## Пример


			Function GetCopyPointF(SourcePoint: IGxPointF): IGxPointF;

Var

    DestinationPoint: IGxPointF;

Begin

    DestinationPoint := New GxPointF.CreateFromPoint(SourcePoint);

    Return DestinationPoint;

End Function GetCopyPointF;


Данная функция вернет копию точки, передаваемой в качестве входного
 параметра.


См. также:


[GxPointF](GxPointF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
