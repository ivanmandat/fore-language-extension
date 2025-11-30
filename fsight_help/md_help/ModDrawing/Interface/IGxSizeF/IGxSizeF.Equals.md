# IGxSizeF.Equals

IGxSizeF.Equals
-


# IGxSizeF.Equals


## Синтаксис


Equals(Size: [IGxSizeF](IGxSizeF.htm)):
 Boolean;


## Параметры


Size. Размер, с которым производится сравнение.


## Описание


Метод Equals проверяет равенство
 текущего вещественного размера с размером, передаваемым посредством входного
 параметра.


## Пример


			Sub UserProc;

Var

    s1, s2: IGxSizeF;

Begin

    s1 := New GxSizeF.Create(Math.RandBetween(0, 2), Math.RandBetween(0, 2));

    s2 := New GxSizeF.Create(Math.RandBetween(0, 2), Math.RandBetween(0, 2));

    Debug.WriteLine("Ширина 1: " + s1.Width.ToString + ". Высота 1: " + s1.Height.ToString);

    Debug.WriteLine("Ширина 2: " + s2.Width.ToString + ". Высота 2: " + s2.Height.ToString);

    Debug.WriteLine(s1.Equals(s2));

End Sub UserProc;


При выполнении примера будут созданы два вещественных размера. Ширина,
 высота и результат сравнения размеров будут выведены в консоль среды разработки.


См. также:


[IGxSizeF](IGxSizeF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
