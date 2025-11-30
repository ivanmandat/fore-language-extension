# GxRectF.CreateFromOrigin

GxRectF.CreateFromOrigin
-


# GxRectF.CreateFromOrigin


## Синтаксис


CreateFromOrigin(Origin: [IGxPointF](../../Interface/IGxPointF/IGxPointF.htm);
 Size: [IGxSizeF](../../Interface/IGxSizeF/IGxSizeF.htm));


## Параметры


Origin. Точка, определяющая
 расположение верхнего левого угла прямоугольника.


Size. Размер прямоугольника.


## Описание


Конструктор CreateFromOrigin
 создает новый прямоугольник в соответствии с указанным расположением и
 размером.


## Пример


			Function GetRectFFromOrigin(Origin: IGxPointF; RectSize: IGxSizeF): IGxRectF;

Var

    OutRect: IGxRectF;

Begin

    OutRect := New GxRectF.CreateFromOrigin(Origin, RectSize);

    Return OutRect;

End Function GetRectFFromOrigin;


Данная функция возвращает прямоугольник, созданный на основании указанной
 точки расположения верхнего угла и размера прямоугольника.


См. также:


[GxRectF](GxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
