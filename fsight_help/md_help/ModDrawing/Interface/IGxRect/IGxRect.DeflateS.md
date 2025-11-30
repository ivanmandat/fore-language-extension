# IGxRect.DeflateS

IGxRect.DeflateS
-


# IGxRect.DeflateS


## Синтаксис


DeflateS(Size: [IGxSize](../IGxSize/IGxSize.htm));


## Параметры


Size.
 Размер, на который необходимо уменьшить.


## Описание


Метод DeflateS осуществляет
 уменьшение размеров целочисленного прямоугольника на указанный размер.


## Пример


			Sub UserProc;

Var

    Rect: IGxRect;

    Size: IGxSize;

Begin

    Rect := New GxRect.Create(0, 0, Math.RandBetweenI(0, 60), Math.RandBetweenI(0, 60));

    Size := New GxSize.Create(10, 10);

    Rect.DeflateS(Size);

    Debug.WriteLine("Новая ширина: " + Rect.Width.ToString + ". Новая высота: " + Rect.Height.ToString);

End Sub UserProc;


При выполнении примера будут созданы прямоугольник случайного размера
 и размер. Затем прямоугольник будет уменьшен на созданный размер. Полученные
 ширина и высота прямоугольника будут выведены в консоль среды разработки.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
