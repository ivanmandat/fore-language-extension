# IGxRect.IntersectsWith

IGxRect.IntersectsWith
-


# IGxRect.IntersectsWith


## Синтаксис


IntersectsWith(Rect: [IGxRect](IGxRect.htm)):
 Boolean;


## Параметры


Rect. Целочисленный
 прямоугольник, с которым необходимо проверить пересечение.


## Описание


Метод IntersectsWith осуществляет
 проверку на пересечение текущего прямоугольника и прямоугольника, передаваемого
 в качестве входного параметра.


## Пример


	Sub UserProc;

	Var

	    r1, r2: IGxRect;

	    b: Boolean;

	Begin

	    r1 := New GxRect.Create(-10, -10, Math.RandBetweenI(0, 20), Math.RandBetweenI(0, 20));

	    r2 := New GxRect.Create(0, 0, Math.RandBetweenI(0, 10), Math.RandBetweenI(0, 10));

	    b := r1.IntersectsWith(r2);

	    Debug.WriteLine(b ? "Прямоугольники пересекаются" : "Прямоугольники не пересекаются");

	End Sub UserProc;


При выполнении примера будут созданы два прямоугольника с фиксированными
 начальными точками, но случайного размера. В консоль среды разработки
 будет выведено сообщение о наличии пересечения полученных прямоугольников.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
