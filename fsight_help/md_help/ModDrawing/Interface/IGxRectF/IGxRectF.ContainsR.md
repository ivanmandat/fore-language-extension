# IGxRectF.ContainsR

IGxRectF.ContainsR
-


# IGxRectF.ContainsR


## Синтаксис


ContainsR(Rect: [IGxRectF](IGxRectF.htm)):
 Boolean;


## Параметры


Rect. Прямоугольник,
 который необходимо проверить.


## Описание


Метод ContainsR проверяет наличие
 вещественного прямоугольника в текущем прямоугольнике.


## Пример


	Sub UserProc;

	Var

	    Rect, Rect1: IGxRectF;

	Begin

	    Rect := New GxRectF.Create(0, 0, 50, 50);

	    Rect1 := New GxRectF.Create(Math.RandBetween(-50, 50), Math.RandBetween(-50, 50), Math.RandBetween(0, 70), Math.RandBetween(0, 70));

	    Debug.WriteLine(Rect.ContainsR(Rect1))

	End Sub UserProc;


При выполнение примера будут созданы два вещественных прямоугольника.
 В консоль среды разработки будет выведен признак наличия второго прямоугольника
 в первом.


См. также:


[IGxRectF](IGxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
