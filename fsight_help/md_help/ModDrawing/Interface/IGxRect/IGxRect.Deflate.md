# IGxRect.Deflate

IGxRect.Deflate
-


# IGxRect.Deflate


## Синтаксис


Deflate(DX: Integer; DY: Integer);


## Параметры


DX. Изменение по ширине.


DY. Изменение по высоте.


## Описание


Метод Deflate осуществляет уменьшение
 размеров целочисленного прямоугольника на указанные значения по ширине
 и по высоте.


## Пример


	Sub UserProc;

	Var

	    Rect: IGxRect;

	Begin

	    Rect := New GxRect.Create(0, 0, Math.RandBetweenI(0, 60), Math.RandBetweenI(0, 60));

	    Rect.Deflate(10, 10);

	    Debug.WriteLine("Новая ширина: " + Rect.Width.ToString + ". Новая высота: " + Rect.Height.ToString);

	End Sub UserProc;


При выполнении примера будет создан прямоугольник случайного размера.
 Затем прямоугольник будет уменьшен в размерах. Полученные ширина и высота
 прямоугольника будут выведены в консоль среды разработки.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
