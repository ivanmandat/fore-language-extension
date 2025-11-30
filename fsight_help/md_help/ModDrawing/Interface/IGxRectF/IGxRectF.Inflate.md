# IGxRectF.Inflate

IGxRectF.Inflate
-


# IGxRectF.Inflate


## Синтаксис


Inflate(DX: Double; DY: Double);


## Параметры


DX. Изменение по ширине.


DY. Изменение по высоте.


## Описание


Метод Inflate осуществляет увеличение
 размеров целочисленного прямоугольника на указанные значения по ширине
 и по высоте.


## Пример


	Sub UserProc;

	Var

	    Rect: IGxRectF;

	Begin

	    Rect := New GxRectF.Create(0, 0, Math.RandBetween(0, 60), Math.RandBetween(0, 60));

	    Rect.Inflate(10, 10);

	    Debug.WriteLine("Новая ширина: " + Rect.Width.ToString + ". Новая высота: " + Rect.Height.ToString);

	End Sub UserProc;


При выполнении примера будет создан вещественный прямоугольник случайного
 размера. Затем прямоугольник будет увеличен в размерах. Полученные ширина
 и высота прямоугольника будут выведены в консоль среды разработки.


См. также:


[IGxRectF](IGxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
