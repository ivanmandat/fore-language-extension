# IGxPoint.ToPointF

IGxPoint.ToPointF
-


# IGxPoint.ToPointF


## Синтаксис


ToPointF: [IGxPointF](../IGxPointF/IGxPointF.htm);


## Описание


Метод ToPointF осуществляет
 преобразование точки в вещественную точку.


## Пример


	Sub UserProc;

	Var

	    Point: IGxPoint;

	    PointF: IGxPointF;

	Begin

	    Point := New GxPoint.Create(10, 15);

	    PointF := Point.ToPointF;

	    Debug.WriteLine("X: " + PointF.X.ToString + ". Y: " + PointF.Y.ToString);

	End Sub UserProc;


При выполнении примера будет создана целочисленная точка. Затем точка
 будет преобразована в вещественную точку. Полученные координаты вещественной
 точки будут выведены в консоль среды разработки.


См. также:


[IGxPoint](IGxPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
