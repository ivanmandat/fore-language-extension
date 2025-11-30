# IGxSize.ReduceS

IGxSize.ReduceS
-


# IGxSize.ReduceS


## Синтаксис


ReduceS(Size: [IGxSize](IGxSize.htm));


## Параметры


Size.
 Размер, на который осуществляется уменьшение.


## Описание


Метод ReduceS осуществляет уменьшение
 размера на указанный размер.


## Пример


			Sub UserProc;

Var

    Size1, Size2: IGxSize;

Begin

    Size1 := New GxSize.Create(Math.RandBetweenI(0, 60), Math.RandBetweenI(0, 60));

    Size2 := New GxSize.Create(10, 10);

    Size1.ReduceS(Size2);

    Debug.WriteLine("Новая ширина: " + Size1.Width.ToString + ". Новая высота: " + Size1.Height.ToString);

End Sub UserProc;


При выполнении примера будут созданы два размера. Первый размер имеет
 случайную ширину и высоту, второй - фиксированные ширину и высоту. Затем
 первый размер будет уменьшен на величину второго размера. Полученные ширина
 и высота первого размера будут выведены в консоль среды разработки.


См. также:


[IGxSize](IGxSize.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
