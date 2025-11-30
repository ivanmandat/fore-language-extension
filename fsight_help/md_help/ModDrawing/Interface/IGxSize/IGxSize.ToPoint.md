# IGxSize.ToPoint

IGxSize.ToPoint
-


# IGxSize.ToPoint


## Синтаксис


ToPoint: [IGxPoint](../IGxPoint/IGxPoint.htm);


## Описание


Метод ToPoint осуществляет преобразование
 размера в точку.


## Пример


			Sub UserProc;

Var

    Size: IGxSize;

    Point: IGxPoint;

Begin

    Size := New GxSize.Create(10, 15);

    Point := Size.ToPoint;

    Debug.WriteLine("X: " + Point.X.ToString + ". Y: " + Point.Y.ToString);

End Sub UserProc;


При выполнении примера будет создан целочисленный размер. Затем на основе
 размера будет создана точка. Координаты полученной точки будут выведены
 в консоль среды разработки.


См. также:


[IGxSize](IGxSize.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
