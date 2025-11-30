# GxRect.CreateFromOrigin

GxRect.CreateFromOrigin
-


# GxRect.CreateFromOrigin


## Синтаксис


CreateFromOrigin(Origin: [IGxPoint](../../Interface/IGxPoint/IGxPoint.htm);
 Size: [IGxSize](../../Interface/IGxSize/IGxSize.htm));


## Параметры


Origin. Точка, определяющая
 расположение верхнего левого угла прямоугольника.


Size. Размер прямоугольника.


## Описание


Конструктор CreateFromOrigin
 создает новый прямоугольник в соответствии с указанным расположением и
 размером.


## Пример


			Function GetRectFromOrigin(Origin: IGxPoint; RectSize: IGxSize): IGxRect;

Var

    OutRect: IGxRect;

Begin

    OutRect := New GxRect.CreateFromOrigin(Origin, RectSize);

    Return OutRect;

End Function GetRectFromOrigin;


Данная функция возвращает прямоугольник, созданный на основании указанной
 точки расположения верхнего угла и размера прямоугольника.


См. также:


[GxRect](GxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
