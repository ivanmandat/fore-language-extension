# IGxRect.ContainsP

IGxRect.ContainsP
-


# IGxRect.ContainsP


## Синтаксис


ContainsP(Point: [IGxPoint](../IGxPoint/IGxPoint.htm)):
 Boolean;


## Параметры


Point.
 Точка, которую необходимо проверить.


## Описание


Метод ContainsP проверяет наличие
 точки в текущем прямоугольнике.


## Пример


			Sub UserProc;

Var

    Rect: IGxRect;

    Point: IGxPoint;

Begin

    Rect := New GxRect.Create(0, 0, 50, 45);

    Point := New GxPoint.Create(Math.RandBetweenI(0, 70), Math.RandBetweenI(0, 70));

    Debug.WriteLine(Rect.ContainsP(Point))

End Sub UserProc;


При выполнение примера будут созданы прямоугольник и точка. В консоль
 среды разработки будет выведен признак наличия точки в прямоугольнике.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
