# IGxPoint.Offset

IGxPoint.Offset
-


# IGxPoint.Offset


## Синтаксис


Offset(DX: Integer; DY: Integer);


## Параметры


DX. Смещение по оси Х.


DY. Смещение по оси Y.


## Описание


Метод Offset осуществляет смещение
 точки на заданные значения по осям Х и Y.


## Пример


	Sub UserProc;

	Var

	    p1: IGxPoint;

	Begin

	    p1 := New GxPoint.Create(100, 100);

	    // Смещение

	    p1.Offset(30, 30);

	    Debug.WriteLine("X: " + p1.X.ToString + ". Y: " + p1.Y.ToString);

	End Sub UserProc;


При выполнении примера будет создана точка. Затем координаты точки будут
 смещены по осям X и Y. Полученные координаты точки будут выведены в консоль
 среды разработки.


См. также:


[IGxPoint](IGxPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
