# IGxSize.Reduce

IGxSize.Reduce
-


# IGxSize.Reduce


## Синтаксис


Reduce(DX: Integer; DY: Integer);


## Параметры


DX. Изменение по ширине.


DY. Изменение по высоте.


## Описание


Метод Reduce осуществляет уменьшение
 размера на указанные значения по ширине и высоте.


## Пример


			Sub UserProc;

Var

    Size: IGxSize;

Begin

    Size := New GxSize.Create(Math.RandBetweenI(0, 60), Math.RandBetweenI(0, 60));

    Size.Reduce(10, 10);

    Debug.WriteLine("Новая ширина: " + Size.Width.ToString + ". Новая высота: " + Size.Height.ToString);

End Sub UserProc;


При выполнении примера будет создан размер случайной ширины и высоты.
 Затем размер будет уменьшен. Полученные ширина и высота размера будут
 выведены в консоль среды разработки.


См. также:


[IGxSize](IGxSize.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
