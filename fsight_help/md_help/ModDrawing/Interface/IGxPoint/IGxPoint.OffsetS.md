# IGxPoint.OffsetS

IGxPoint.OffsetS
-


# IGxPoint.OffsetS


## Синтаксис


OffsetS(Size: [IGxSize](../IGxSize/IGxSize.htm));


## Параметры


Size.
 Размер, на который осуществляется смещение.


## Описание


Метод OffsetS осуществляет смещение
 точки на размер, передаваемый посредством входного параметра.


## Пример


	Sub UserProc;

	Var

	    p1: IGxPoint;

	    s1: IGxSize;

	Begin

	    p1 := New GxPoint.Create(10, 10);

	    s1 := New GxSize.Create(Math.RandBetweenI(0, 10), Math.RandBetweenI(0, 10));

	    p1.OffsetS(s1);

	    Debug.WriteLine("X: " + p1.X.ToString + ". Y: " + p1.Y.ToString);

	End Sub UserProc;


При выполнении примера будут созданы точка и размер. Затем координаты
 точки будут смещены на созданный размер. Полученные координаты точки будут
 выведены в консоль среды разработки.


См. также:


[IGxPoint](IGxPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
