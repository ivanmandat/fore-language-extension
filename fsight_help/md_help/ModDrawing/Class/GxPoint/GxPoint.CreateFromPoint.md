# GxPoint.CreateFromPoint

GxPoint.CreateFromPoint
-


# GxPoint.CreateFromPoint


## Синтаксис


CreateFromPoint(Point: [IGxPoint](../../Interface/IGxPoint/IGxPoint.htm));


## Параметры


Point. Точка, на основе которой
 создается новая точка.


## Описание


Конструктор CreateFromPoint
 создает новую точку, которая является копией точки, передаваемой посредством
 параметра Point.


## Пример


			Function GetCopyPoint(SourcePoint: IGxPoint): IGxPoint;

Var

    DestinationPoint: IGxPoint;

Begin

    DestinationPoint := New GxPoint.CreateFromPoint(SourcePoint);

    Return DestinationPoint;

End Function GetCopyPoint;


Данная функция вернет копию точки, передаваемой в качестве входного
 параметра.


См. также:


[GxPoint](GxPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
