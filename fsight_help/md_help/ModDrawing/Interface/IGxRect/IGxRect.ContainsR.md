# IGxRect.ContainsR

IGxRect.ContainsR
-


# IGxRect.ContainsR


## Синтаксис


ContainsR(Rect: [IGxRect](IGxRect.htm)):
 Boolean;


## Параметры


Rect.
 Прямоугольник, который необходимо проверить.


## Описание


Метод ContainsR проверяет наличие
 прямоугольника в текущем прямоугольнике.


## Пример


	Sub UserProc;

	Var

	    Rect, Rect1: IGxRect;

	Begin

	    Rect := New GxRect.Create(0, 0, 50, 50);

	    Rect1 := New GxRect.Create(Math.RandBetweenI(-50, 50), Math.RandBetweenI(-50, 50), Math.RandBetweenI(0, 70), Math.RandBetweenI(0, 70));

	    Debug.WriteLine(Rect.ContainsR(Rect1))

	End Sub UserProc;


При выполнение примера будут созданы два прямоугольника. В консоль среды
 разработки будет выведен признак наличия второго прямоугольника в первом.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
