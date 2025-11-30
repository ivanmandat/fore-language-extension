# IGxPointF.ToSize

IGxPointF.ToSize
-


# IGxPointF.ToSize


## Синтаксис


ToSize: [IGxSizeF](../IGxSizeF/IGxSizeF.htm);


## Описание


Метод ToSize осуществляет преобразование
 вещественной точки в вещественный размер.


## Пример


	Sub UserProc;

	Var

	    Point: IGxPointF;

	    Size: IGxSizeF;

	Begin

	    Point := New GxPointF.Create(10.5, 15.5);

	    Size := Point.ToSize;

	    Debug.WriteLine("Ширина: " + Size.Width.ToString + ". Высота: " + Size.Height.ToString);

	End Sub UserProc;


При выполнении примера будет создана вещественная точка. Затем на основе
 точки будет создан вещественный размер. Полученные ширина и высота размера
 будут выведены в консоль среды разработки.


См. также:


[IGxPointF](IGxPointF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
