# GxPoint.Create

GxPoint.Create
-


# GxPoint.Create


## Синтаксис


Create(X: Integer; Y: Integer);


## Параметры


X. Координата Х точки.


Y. Координата Y точки.


## Описание


Конструктор Create создает новую
 точку с указанными координатами.


## Пример


			Function GetPoint(X: Integer; Y: Integer): IGxPoint;

Var

    OutPoint: IGxPoint;

Begin

    OutPoint := New GxPoint.Create(X, Y);

    Return OutPoint;

End Function GetPoint;


Данная функция вернет новую точку, координаты которой передаются в качестве
 входных параметров.


См. также:


[GxPoint](GxPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
