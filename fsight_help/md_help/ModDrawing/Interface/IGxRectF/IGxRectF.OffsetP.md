# IGxRectF.OffsetP

IGxRectF.OffsetP
-


# IGxRectF.OffsetP


## Синтаксис


OffsetP(Point: [IGxPointF](../IGxPointF/IGxPointF.htm));


## Параметры


Point. Точка,
 на размер координат которой произойдет смещение.


## Описание


Метод OffsetP осуществляет смещение
 вещественного прямоугольника на значения координат точки, передаваемой
 посредством входного параметра.


## Пример


	Sub UserProc;

	Var

	    r1: IGxRectF;

	    p1: IGxPointF;

	Begin

	    r1 := New GxRectF.Create(0, 0, 10, 10);

	    p1 := New GxPointF.Create(Math.RandBetween(-10, 10), Math.RandBetween(-10, 10));

	    r1.OffsetP(p1);

	    Debug.WriteLine("Left: " + r1.Left.ToString + ". Top: " + r1.Top.ToString);

	End Sub UserProc;


При выполнении примера будут созданы вещественный прямоугольник и вещественная
 точка. Точка будет создана со случайными координатами. Затем координаты
 прямоугольника будут смещены на размер координат точки. Полученные координаты
 левой и верхней стороны прямоугольника будут выведены в консоль среды
 разработки.


См. также:


[IGxRectF](IGxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
