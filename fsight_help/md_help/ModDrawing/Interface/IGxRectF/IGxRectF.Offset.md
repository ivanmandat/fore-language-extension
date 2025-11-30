# IGxRectF.Offset

IGxRectF.Offset
-


# IGxRectF.Offset


## Синтаксис


Offset(DX: Double; DY: Double);


## Параметры


DX. Смещение по оси X.


DY. Смещение по оси Y.


## Описание


Метод Offset осуществляет смещение
 вещественного прямоугольника на заданные значения по осям Х и Y.


## Пример


	Sub UserProc;

	Var

	    r1: IGxRectF;

	Begin

	    r1 := New GxRectF.Create(0, 0, 100, 100);

	    // Смещение

	    r1.Offset(30, 30);

	    Debug.WriteLine("Left: " + r1.Left.ToString + ". Top: " + r1.Top.ToString);

	End Sub UserProc;


При выполнении примера будет создан вещественный прямоугольник. Затем
 прямоугольник будет смещён по осям X и Y. Полученные координаты левой
 и верхней стороны прямоугольника будут выведены в консоль среды разработки.


См. также:


[IGxRectF](IGxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
