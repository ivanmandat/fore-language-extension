# GxRectF.CreateFromRect

GxRectF.CreateFromRect
-


# GxRectF.CreateFromRect


## Синтаксис


CreateFromRect(Rect: [IGxRectF](../../Interface/IGxRectF/IGxRectF.htm));


## Параметры


Rect. Прямоугольник, на основе
 которого создается новый прямоугольник.


## Описание


Конструктор CreateFromRect создает
 новый прямоугольник, являющийся копией прямоугольника, передаваемого посредством
 параметра Rect.


## Пример


			Function GetCopyRectF(SourceRect: IGxRectF): IGxRectF;

Var

    DestinationRect: IGxRectF;

Begin

    DestinationRect := New GxRectF.CreateFromRect(SourceRect);

    Return DestinationRect;

End Function GetCopyRectF;


Данная функция вернет копию прямоугольника, передаваемого в качестве
 входного параметра.


См. также:


[GxRectF](GxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
