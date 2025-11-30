# GxSize.CreateFromPoint

GxSize.CreateFromPoint
-


# GxSize.CreateFromPoint


## Синтаксис


CreateFromPoint(Point: [IGxPoint](../../Interface/IGxPoint/IGxPoint.htm));


## Параметры


Point. Точка, на основе которой
 создается новый размер.


## Описание


Конструктор CreateFromPoint
 создает новый размер, на основании расстояния от центра системы координат
 до точки, передаваемой посредством параметра Point.


## Комментарии


Координата X точки будет соответствовать ширине, а координата Y - высоте
 нового размера.


## Пример


			Function GetSizeFromPoint(Point: IGxPoint): IGxSize;

Var

    OutSize: IGxSize;

Begin

    OutSize := New GxSize.CreateFromPoint(Point);

    Return OutSize;

End Function GetSizeFromPoint;


Данная функция вернет новый размер, созданный на основании расстояния
 до точки, передаваемой посредством входного параметра.


См. также:


[GxSize](GxSize.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
