# IGxRect.OffsetS

IGxRect.OffsetS
-


# IGxRect.OffsetS


## Синтаксис


OffsetS(Size: [IGxSize](../IGxSize/IGxSize.htm));


## Параметры


Size. Размер,
 на который осуществляется смещение.


## Описание


Метод OffsetS осуществляет смещение
 целочисленного прямоугольника на размер, передаваемый посредством входного
 параметра.


## Пример


			Sub UserProc;

Var

    r1: IGxRect;

    s1: IGxSize;

Begin

    r1 := New GxRect.Create(0, 0, 10, 10);

    s1 := New GxSize.Create(Math.RandBetweenI(0, 10), Math.RandBetweenI(0, 10));

    r1.OffsetS(s1);

    Debug.WriteLine("Left: " + r1.Left.ToString + ". Top: " + r1.Top.ToString);

End Sub UserProc;


При выполнении примера будут созданы целочисленный прямоугольник и размер.
 Затем координаты прямоугольника будут смещены на созданный размер. Полученные
 координаты левой и верхней стороны прямоугольника будут выведены в консоль.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
