# IGxPointF.Offset

IGxPointF.Offset
-


# IGxPointF.Offset


## Синтаксис


Offset(DX: Double; DY: Double);


## Параметры


DX. Смещение по оси Х.


DY. Смещение по оси Y.


## Описание


Метод Offset осуществляет смещение
 точки на заданные значения по осям Х и Y.


## Пример


	Sub UserProc;

	Var

	    p1: IGxPointF;

	Begin

	    p1 := New GxPointF.Create(100.5, 100.5);

	    // Смещение

	    p1.Offset(1.5, 1.5);

	    Debug.WriteLine("X: " + p1.X.ToString + ". Y: " + p1.Y.ToString);

	End Sub UserProc;


При выполнении примера будет создана точка. Затем координаты точки будут
 смещены по осям X и Y. Полученные координаты точки будут выведены в консоль
 среды разработки.


См. также:


[IGxPointF](IGxPointF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
