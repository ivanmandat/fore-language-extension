# IGxPointF.OffsetP

IGxPointF.OffsetP
-


# IGxPointF.OffsetP


## Синтаксис


OffsetP(Point: [IGxPointF](IGxPointF.htm));


## Параметры


Point.
 Точка, на размер координат которой произойдет смещение.


## Описание


Метод OffsetP осуществляет смещение
 текущей точки на значения координат точки, передаваемой посредством входного
 параметра.


## Пример


	Sub UserProc;

	Var

	    p1, p2: IGxPointF;

	Begin

	    p1 := New GxPoint.Create(10.5, 10.5);

	    p2 := New GxPoint.Create(Math.RandBetween(-10, 10), Math.RandBetween(-10, 10));

	    p1.OffsetP(p2);

	    Debug.WriteLine("X: " + p1.X.ToString + ". Y: " + p1.Y.ToString);

	End Sub UserProc;


При выполнении примера будут созданы две точки, первая точка с фиксированными
 координатами, вторая - со случайными координатами. Затем координаты первой
 точки будут смещены на размер координат второй точки. Полученные координаты
 первой точки будут выведены в консоль среды разработки.


См. также:


[IGxPointF](IGxPointF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
