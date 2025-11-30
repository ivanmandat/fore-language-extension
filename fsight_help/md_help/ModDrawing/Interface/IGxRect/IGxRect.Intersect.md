# IGxRect.Intersect

IGxRect.Intersect
-


# IGxRect.Intersect


## Синтаксис


Intersect(Rect: [IGxRect](IGxRect.htm)):
 [IGxRect](IGxRect.htm);


## Параметры


Rect. Прямоугольник, с которым производится пересечение.


## Описание


Метод Intersect возвращает прямоугольник,
 являющийся результатом пересечения текущего прямоугольника и прямоугольника,
 передаваемого в качестве входного параметра.


## Пример


	Sub UserProc;

	Var

	    r1, r2, r3: IGxRect;

	Begin

	    r1 := New GxRect.Create(-10, -10, 10, 10);

	    r2 := New GxRect.Create(0, 0, 20, 20);

	    r3 := r1.Intersect(r2);

	    Debug.WriteLine("Left: " + r3.Left.ToString + ". Right: " + r3.Right.ToString + ". Top: " + r3.Top.ToString + ". Bottom: " + r3.Bottom.ToString +

	        "; Ширина: " + r3.Width.ToString + ". Высота: " + r3.Height.ToString);

	End Sub UserProc;


При выполнении примера будут созданы два прямоугольника. Будет получен
 прямоугольник, являющийся результатом пересечения двух прямоугольников.
 Координаты и размеры полученного прямоугольника будут выведены в консоль
 среды разработки.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
