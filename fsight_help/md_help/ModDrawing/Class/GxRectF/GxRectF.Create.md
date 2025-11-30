# GxRectF.Create

GxRectF.Create
-


# GxRectF.Create


## Синтаксис


Create(Left: Double; Top: Double; Right: Double;
 Bottom: Double);


## Параметры


Left. Расстояние от центра
 системы координат до левой границы прямоугольника.


Top. Расстояние от центра системы
 координат до верхней границы прямоугольника.


Right. Расстояние от центра
 системы координат до правой границы прямоугольника.


Bottom. Расстояние от центра
 системы координат до нижней границы прямоугольника.


## Описание


Конструктор Create создает новый
 прямоугольник с указанными размерами.


## Пример


			Function GetRectF(Left: Double; Top: Double; Right: Double; Bottom: Double): IGxRectF;

Var

    OutRect: IGxRectF;

Begin

    OutRect := New GxRectF.Create(Left, Top, Right, Bottom);

    Return OutRect;

End Function GetRectF;


Данная функция возвращает прямоугольник заданных размеров.


См. также:


[GxRectF](GxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
