# IGxRectF.InflateS

IGxRectF.InflateS
-


# IGxRectF.InflateS


## Синтаксис


InflateS(Size: [IGxSizeF](../IGxSizeF/IGxSizeF.htm));


## Параметры


Size. Размер,
 на который необходимо увеличить.


## Описание


Метод InflateS осуществляет
 увеличение целочисленного прямоугольника на указанный размер.


## Пример


	Sub UserProc;

	Var

	    Rect: IGxRectF;

	    Size: IGxSizeF;

	Begin

	    Rect := New GxRectF.Create(0, 0, Math.RandBetween(0, 60), Math.RandBetween(0, 60));

	    Size := New GxSizeF.Create(10, 10);

	    Rect.InflateS(Size);

	    Debug.WriteLine("Новая ширина: " + Rect.Width.ToString + ". Новая высота: " + Rect.Height.ToString);

	End Sub UserProc;


При выполнении примера будут созданы вещественный прямоугольник случайного
 размера и вещественный размер. Затем прямоугольник будет увеличен на созданный
 размер. Полученные ширина и высота прямоугольника будут выведены в консоль
 среды разработки.


См. также:


[IGxRectF](IGxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
