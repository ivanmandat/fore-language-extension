# IGxSize.Equals

IGxSize.Equals
-


# IGxSize.Equals


## Синтаксис


Equals(Size: [IGxSize](IGxSize.htm)):
 Boolean;


## Параметры


Size.
 Размер, с которым производится сравнение.


## Описание


Метод Equals проверяет равенство
 текущего размера с размером, передаваемым посредством входного параметра.


## Пример


			Sub UserProc;

Var

    s1, s2: IGxSize;

Begin

    s1 := New GxSize.Create(Math.RandBetweenI(0, 2), Math.RandBetweenI(0, 2));

    s2 := New GxSize.Create(Math.RandBetweenI(0, 2), Math.RandBetweenI(0, 2));

    Debug.WriteLine("Ширина 1: " + s1.Width.ToString + ". Высота 1: " + s1.Height.ToString);

    Debug.WriteLine("Ширина 2: " + s2.Width.ToString + ". Высота 2: " + s2.Height.ToString);

    Debug.WriteLine(s1.Equals(s2));

End Sub UserProc;


При выполнении примера будут созданы два размера. Ширина, высота и результат
 сравнения размеров будут выведены в консоль среды разработки.


См. также:


[IGxSize](IGxSize.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
