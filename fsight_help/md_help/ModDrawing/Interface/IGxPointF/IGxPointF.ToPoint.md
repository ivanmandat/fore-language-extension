# IGxPointF.ToPoint

IGxPointF.ToPoint
-


# IGxPointF.ToPoint


## Синтаксис


ToPoint: [IGxPoint](../IGxPoint/IGxPoint.htm);


## Описание


Метод ToPoint осуществляет преобразование
 вещественной точки в целочисленную.


## Комментарии


При преобразовании дробная часть у координат точки отбрасывается.


## Пример


	Sub UserProc;

	Var

	    PointF: IGxPointF;

	    Point: IGxPoint;

	Begin

	    PointF := New GxPointF.Create(10.5, 15.5);

	    Point := PointF.ToPoint;

	    Debug.WriteLine("X: " + Point.X.ToString + ". Y: " + Point.Y.ToString);

	End Sub UserProc;


При выполнении примера будет создана вещественная точка. Затем точка
 будет преобразована в целочисленную точку. Полученные координаты целочисленной
 точки будут выведены в консоль среды разработки.


См. также:


[IGxPointF](IGxPointF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
