# IGxRect.OffsetP

IGxRect.OffsetP
-


# IGxRect.OffsetP


## Синтаксис


OffsetP(Point: [IGxPoint](../IGxPoint/IGxPoint.htm));


## Параметры


Point. Точка,
 на размер координат которой произойдет смещение.


## Описание


Метод OffsetP осуществляет смещение
 целочисленного прямоугольника на значения координат точки, передаваемой
 посредством входного параметра.


## Пример


			Sub UserProc;

Var

    r1: IGxRect;

    p1: IGxPoint;

Begin

    r1 := New GxRect.Create(0, 0, 10, 10);

    p1 := New GxPoint.Create(Math.RandBetweenI(-10, 10), Math.RandBetweenI(-10, 10));

    r1.OffsetP(p1);

    Debug.WriteLine("Left: " + r1.Left.ToString + ". Top: " + r1.Top.ToString);

End Sub UserProc;


При выполнении примера будут созданы целочисленный прямоугольник и точка.
 Точка будет создана со случайными координатами. Затем координаты прямоугольника
 будут смещены на размер координат точки. Полученные координаты левой и
 верхней стороны прямоугольника будут выведены в консоль среды разработки.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
