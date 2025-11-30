# IGxRect.Equals

IGxRect.Equals
-


# IGxRect.Equals


## Синтаксис


Equals(Rect: [IGxRect](IGxRect.htm)):
 Boolean;


## Параметры


Rect. Целочисленный
 прямоугольник, с которым производится сравнение.


## Описание


Метод Equals проверяет равенство
 текущего целочисленного прямоугольника с прямоугольником, передаваемым
 посредством входного параметра.


## Пример


	Sub UserProc;

	Var

	    r1, r2: IGxRect;

	Begin

	    r1 := New GxRect.Create(0, 0, Math.RandBetweenI(0, 2), Math.RandBetweenI(0, 2));

	    r2 := New GxRect.Create(0, 0, Math.RandBetweenI(0, 2), Math.RandBetweenI(0, 2));

	    Debug.WriteLine("Ширина 1: " + r1.Width.ToString + ". Высота 1: " + r1.Height.ToString);

	    Debug.WriteLine("Ширина 2: " + r2.Width.ToString + ". Высота 2: " + r2.Height.ToString);

	    Debug.WriteLine(r1.Equals(r2));

	End Sub UserProc;


При выполнении примера будут созданы два прямоугольника. Ширина, высота
 и результат сравнения прямоугольников будут выведены в консоль среды разработки.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
