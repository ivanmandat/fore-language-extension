# IGxRectF.Equals

IGxRectF.Equals
-


# IGxRectF.Equals


## Синтаксис


Equals(Rect: [IGxRectF](IGxRectF.htm)):
 Boolean;


## Параметры


Rect. Вещественный
 прямоугольник, с которым производится сравнение.


## Описание


Метод Equals проверяет равенство
 текущего вещественного прямоугольника с прямоугольником, передаваемым
 посредством входного параметра.


## Пример


	Sub UserProc;

	Var

	    r1, r2: IGxRectF;

	Begin

	    r1 := New GxRectF.Create(0, 0, Math.RandBetween(0, 2), Math.RandBetween(0, 2));

	    r2 := New GxRectF.Create(0, 0, Math.RandBetween(0, 2), Math.RandBetween(0, 2));

	    Debug.WriteLine("Ширина 1: " + r1.Width.ToString + ". Высота 1: " + r1.Height.ToString);

	    Debug.WriteLine("Ширина 2: " + r2.Width.ToString + ". Высота 2: " + r2.Height.ToString);

	    Debug.WriteLine(r1.Equals(r2));

	End Sub UserProc;


При выполнении примера будут созданы два вещественных прямоугольника.
 Ширина, высота и результат сравнения прямоугольников будут выведены в
 консоль среды разработки.


См. также:


[IGxRectF](IGxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
