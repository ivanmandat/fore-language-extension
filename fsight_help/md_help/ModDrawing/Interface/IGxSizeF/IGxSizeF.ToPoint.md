# IGxSizeF.ToPoint

IGxSizeF.ToPoint
-


# IGxSizeF.ToPoint


## Синтаксис


ToPoint: [IGxPointF](../IGxPointF/IGxPointF.htm);


## Описание


Метод ToPoint осуществляет преобразование
 вещественного размера в вещественную точку.


## Пример


			Sub UserProc;

Var

    Size: IGxSizeF;

    Point: IGxPointF;

Begin

    Size := New GxSizeF.Create(10, 15);

    Point := Size.ToPoint;

    Debug.WriteLine("X: " + Point.X.ToString + ". Y: " + Point.Y.ToString);

End Sub UserProc;


При выполнении примера будет создан вещественный размер. Затем на основе
 размера будет создана вещественная точка. Координаты полученной точки
 будут выведены в консоль среды разработки.


См. также:


[IGxSizeF](IGxSizeF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
