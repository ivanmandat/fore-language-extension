# IGxRectF.DeflateS

IGxRectF.DeflateS
-


# IGxRectF.DeflateS


## Синтаксис


DeflateS(Size: [IGxSizeF](../IGxSizeF/IGxSizeF.htm));


## Параметры


Size. Размер,
 на который необходимо уменьшить.


## Описание


Метод DeflateS осуществляет
 уменьшение размеров вещественного прямоугольника на указанный размер.


## Пример


	Sub UserProc;

	Var

	    Rect: IGxRectF;

	    Size: IGxSizeF;

	Begin

	    Rect := New GxRectF.Create(0, 0, Math.RandBetween(0, 60), Math.RandBetween(0, 60));

	    Size := New GxSizeF.Create(10, 10);

	    Rect.DeflateS(Size);

	    Debug.WriteLine("Новая ширина: " + Rect.Width.ToString + ". Новая высота: " + Rect.Height.ToString);

	End Sub UserProc;


При выполнении примера будут созданы вещественный прямоугольник случайного
 размера и вещественный размер. Затем прямоугольник будет уменьшен на созданный
 размер. Полученные ширина и высота прямоугольника будут выведены в консоль
 среды разработки.


См. также:


[IGxRectF](IGxRectF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
