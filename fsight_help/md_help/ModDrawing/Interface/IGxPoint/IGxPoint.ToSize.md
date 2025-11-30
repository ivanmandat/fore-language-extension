# IGxPoint.ToSize

IGxPoint.ToSize
-


# IGxPoint.ToSize


## Синтаксис


ToSize: [IGxSize](../IGxSize/IGxSize.htm);


## Описание


Метод ToSize осуществляет преобразование
 точки в размер.


## Пример


			Sub UserProc;

Var

    Point: IGxPoint;

    Size: IGxSize;

Begin

    Point := New GxPoint.Create(10, 15);

    Size := Point.ToSize;

    Debug.WriteLine("Ширина: " + Size.Width.ToString + ". Высота: " + Size.Height.ToString);

End Sub UserProc;


При выполнении примера будет создана целочисленная точка. Затем на основе
 точки будет создан размер. Полученные ширина и высота размера будут выведены
 в консоль среды разработки.


См. также:


[IGxPoint](IGxPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
