# IGxSizeF.ReduceS

IGxSizeF.ReduceS
-


# IGxSizeF.ReduceS


## Синтаксис


ReduceS(Size: [IGxSizeF](IGxSizeF.htm));


## Параметры


Size.
 Размер, на который осуществляется уменьшение.


## Описание


Метод ReduceS осуществляет уменьшение
 вещественного размера на указанный размер.


## Пример


			Sub UserProc;

Var

    Size1, Size2: IGxSizeF;

Begin

    Size1 := New GxSizeF.Create(Math.RandBetween(0, 60), Math.RandBetween(0, 60));

    Size2 := New GxSizeF.Create(10.5, 10.5);

    Size1.ReduceS(Size2);

    Debug.WriteLine("Новая ширина: " + Size1.Width.ToString + ". Новая высота: " + Size1.Height.ToString);

End Sub UserProc;


При выполнении примера будут созданы два вещественных размера. Первый
 размер имеет случайную ширину и высоту, второй - фиксированные ширину
 и высоту. Затем первый размер будет уменьшен на величину второго размера.
 Полученные ширина и высота первого размера будут выведены в консоль среды
 разработки.


См. также:


[IGxSizeF](IGxSizeF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
