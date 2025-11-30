# IGxPoint.Equals

IGxPoint.Equals
-


# IGxPoint.Equals


## Синтаксис


Equals(Point: [IGxPoint](IGxPoint.htm)):
 Booelan;


## Параметры


Point.
 Точка, с которой производится сравнение.


## Описание


Метод Equals проверяет равенство
 данной точки с точкой, передаваемой посредством входного параметра.


## Комментарии


Метод возвращает значение True,
 если координаты точек совпадают и False,
 если хотя бы одна координата отличается.


## Пример


			Sub UserProc;

Var

    p1, p2: IGxPoint;

Begin

    p1 := New GxPoint.Create(Math.RandBetweenI(0, 2), Math.RandBetweenI(0, 2));

    p2 := New GxPoint.Create(Math.RandBetweenI(0, 2), Math.RandBetweenI(0, 2));

    Debug.WriteLine("X1: " + p1.X.ToString + ". Y1: " + p1.Y.ToString);

    Debug.WriteLine("X2: " + p2.X.ToString + ". Y2: " + p2.Y.ToString);

    Debug.WriteLine(p1.Equals(p2));

End Sub UserProc;


При выполнении примера будут созданы две точки. Координаты точек и результат
 сравнения будут выведены в консоль среды разработки.


См. также:


[IGxPoint](IGxPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
