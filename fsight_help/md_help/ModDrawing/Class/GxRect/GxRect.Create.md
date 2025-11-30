# GxRect.Create

GxRect.Create
-


# GxRect.Create


## Синтаксис


Create(Left: Integer; Top: Integer; Right: Integer;
 Bottom: Integer);


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


			Function GetRect(Left: Integer; Top: Integer; Right: Integer; Bottom: Integer): GxRect;

Var

    OutRect: IGxRect;

Begin

    OutRect := New GxRect.Create(Left, Top, Right, Bottom);

    Return OutRect;

End Function GetRect;


Данная функция возвращает прямоугольник заданных размеров.


См. также:


[GxRect](GxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
