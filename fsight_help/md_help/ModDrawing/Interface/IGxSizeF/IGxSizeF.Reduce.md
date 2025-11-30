# IGxSizeF.Reduce

IGxSizeF.Reduce
-


# IGxSizeF.Reduce


## Синтаксис


Reduce(DX: Double; DY: Double);


## Параметры


DX. Изменение по ширине.


DY. Изменение по высоте.


## Описание


Метод Reduce осуществляет уменьшение
 размера на указанные значения по ширине и высоте.


## Пример


			Sub UserProc;

Var

    Size: IGxSizeF;

Begin

    Size := New GxSizeF.Create(Math.RandBetween(0, 60), Math.RandBetween(0, 60));

    Size.Reduce(10.5, 10.5);

    Debug.WriteLine("Новая ширина: " + Size.Width.ToString + ". Новая высота: " + Size.Height.ToString);

End Sub UserProc;


При выполнении примера будет создан вещественный размер случайной ширины
 и высоты. Затем размер будет уменьшен. Полученные ширина и высота размера
 будут выведены в консоль среды разработки.


См. также:


[IGxSizeF](IGxSizeF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
