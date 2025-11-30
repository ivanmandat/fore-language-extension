# IGxPointF.OffsetS

IGxPointF.OffsetS
-


# IGxPointF.OffsetS


## Синтаксис


OffsetS(Size: [IGxSizeF](../IGxSizeF/IGxSizeF.htm));


## Параметры


Size.
 Размер, на который осуществляется смещение.


## Описание


Метод OffsetS осуществляет смещение
 точки на размер, передаваемый посредством входного параметра.


## Пример


	Sub UserProc;

	Var

	    p1: IGxPointF;

	    s1: IGxSizeF;

	Begin

	    p1 := New GxPoint.Create(10.5, 10.5);

	    s1 := New GxSize.Create(Math.RandBetween(0, 10), Math.RandBetween(0, 10));

	    p1.OffsetS(s1);

	    Debug.WriteLine("X: " + p1.X.ToString + ". Y: " + p1.Y.ToString);

	End Sub UserProc;


При выполнении примера будут созданы точка и размер. Затем координаты
 точки будут смещены на созданный размер. Полученные координаты точки будут
 выведены в консоль среды разработки.


См. также:


[IGxPointF](IGxPointF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
