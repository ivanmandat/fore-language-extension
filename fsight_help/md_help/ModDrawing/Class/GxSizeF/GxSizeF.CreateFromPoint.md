# GxSizeF.CreateFromPoint

GxSizeF.CreateFromPoint
-


# GxSizeF.CreateFromPoint


## Синтаксис


CreateFromPoint(Point: [IGxPointF](../../Interface/IGxPointF/IGxPointF.htm));


## Параметры


Point. Точка, на основе которой
 создается новый размер.


## Описание


Конструктор CreateFromPoint
 создает новый размер, на основе параметров точки, передаваемого посредством
 параметра Point.


## Комментарии


Координата X точки будет соответствовать ширине, а координата Y - высоте
 нового размера.


## Пример


			Function GetSizeFFromPoint(Point: IGxPointF): IGxSizeF;

Var

    OutSize: IGxSizeF;

Begin

    OutSize := New GxSizeF.CreateFromPoint(Point);

    Return OutSize;

End Function GetSizeFFromPoint;


Данная функция вернет новый размер, созданный на основании расстояния
 до точки, передаваемой посредством входного параметра.


См. также:


[GxSizeF](GxSizeF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
