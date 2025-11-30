# GxPointF.Create

GxPointF.Create
-


# GxPointF.Create


## Синтаксис


Create(X: Double; Y: Double);


## Параметры


X. Координата Х точки.


Y. Координата Y точки.


## Описание


Конструктор Create создает новую
 точку с указанными координатами.


## Пример


			Function GetPointF(X: Double; Y: Double): IGxPointF;

Var

    OutPoint: IGxPointF;

Begin

    OutPoint := New GxPointF.Create(X, Y);

    Return OutPoint;

End Function GetPointF;


Данная функция вернет новую точку, координаты которой передаются в качестве
 входных параметров.


См. также:


[GxPointF](GxPointF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
