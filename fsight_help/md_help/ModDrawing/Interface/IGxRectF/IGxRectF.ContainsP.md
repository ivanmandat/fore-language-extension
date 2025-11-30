# IGxRectF.ContainsP

IGxRectF.ContainsP
-


# IGxRectF.ContainsP


## Синтаксис


ContainsP(Point: [IGxPointF](../IGxPointF/IGxPointF.htm)):
 Boolean;


## Параметры


Point. Точка,
 которую необходимо проверить.


## Описание


Метод ContainsP проверяет наличие
 точки в текущем вещественном прямоугольнике.


## Пример


	Sub UserProc;

	Var

	    Rect: IGxRectF;

	    Point: IGxPointF;

	Begin

	    Rect := New GxRectF.Create(0, 0, 10.5, 10.5);

	    Point := New GxPointF.Create(Math.RandBetween(0, 20), Math.RandBetween(0, 20));

	    Debug.WriteLine(Rect.ContainsP(Point))

	End Sub UserProc;


При выполнении примера будут созданы вещественный прямоугольник и вещественная
 точка. В консоль среды разработки будет выведен признак наличия точки
 в прямоугольнике.


См. также:


[IGxRectF](IGxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
