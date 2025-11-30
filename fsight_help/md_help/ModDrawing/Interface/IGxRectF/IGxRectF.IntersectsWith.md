# IGxRectF.IntersectsWith

IGxRectF.IntersectsWith
-


# IGxRectF.IntersectsWith


## Синтаксис


IntersectsWith(Rect: [IGxRectF](IGxRectF.htm)):
 Boolean;


## Параметры


Rect. Вещественный
 прямоугольник, с которым необходимо проверить пересечение.


## Описание


Метод IntersectsWith осуществляет
 проверку на пересечение текущего прямоугольника и прямоугольника, передаваемого
 в качестве входного параметра.


## Пример


	Sub UserProc;

	Var

	    r1, r2: IGxRectF;

	    b: Boolean;

	Begin

	    r1 := New GxRectF.Create(-10, -10, Math.RandBetween(0, 20), Math.RandBetween(0, 20));

	    r2 := New GxRectF.Create(0, 0, Math.RandBetween(0, 10), Math.RandBetween(0, 10));

	    b := r1.IntersectsWith(r2);

	    Debug.WriteLine(b ? "Прямоугольники пересекаются" : "Прямоугольники не пересекаются");

	End Sub UserProc;


При выполнении примера будут созданы два вещественных прямоугольника
 с фиксированными начальными точками, но случайного размера. В консоль
 среды разработки будет выведено сообщение о наличии пересечения полученных
 прямоугольников.


См. также:


[IGxRectF](IGxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
