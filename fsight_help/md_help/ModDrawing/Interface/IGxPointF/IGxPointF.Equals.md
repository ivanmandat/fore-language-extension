# IGxPointF.Equals

IGxPointF.Equals
-


# IGxPointF.Equals


## Синтаксис


Equals(Point: [IGxPointF](IGxPointF.htm)):
 Boolean;


## Параметры


Point. Точка,
 с которой производится сравнение.


## Описание


Метод Equals проверяет равенство
 данной точки с точкой, передаваемой посредством входного параметра.


## Пример


	Sub UserProc;

	Var

	    p1, p2: IGxPointF;

	Begin

	    p1 := New GxPointF.Create(Math.RandBetween(0, 2), Math.RandBetween(0, 2));

	    p2 := New GxPointF.Create(Math.RandBetween(0, 2), Math.RandBetween(0, 2));

	    Debug.WriteLine("X1: " + p1.X.ToString + ". Y1: " + p1.Y.ToString);

	    Debug.WriteLine("X2: " + p2.X.ToString + ". Y2: " + p2.Y.ToString);

	    Debug.WriteLine(p1.Equals(p2));

	End Sub UserProc;


При выполнении примера будут созданы две точки. Координаты точек и результат
 сравнения будут выведены в консоль среды разработки.


См. также:


[IGxPointF](IGxPointF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
