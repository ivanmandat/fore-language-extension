# IGxRect.InflateS

IGxRect.InflateS
-


# IGxRect.InflateS


## Синтаксис


InflateS(Size: [IGxSize](../IGxSize/IGxSize.htm));


## Параметры


Size.
 Размер, на который необходимо увеличить.


## Описание


Метод InflateS осуществляет
 увеличение целочисленного прямоугольника на указанный размер.


## Пример


			Sub UserProc;

Var

    Rect: IGxRect;

    Size: IGxSize;

Begin

    Rect := New GxRect.Create(0, 0, Math.RandBetweenI(0, 60), Math.RandBetweenI(0, 60));

    Size := New GxSize.Create(10, 10);

    Rect.InflateS(Size);

    Debug.WriteLine("Новая ширина: " + Rect.Width.ToString + ". Новая высота: " + Rect.Height.ToString);

End Sub UserProc;


При выполнении примера будут созданы прямоугольник случайного размера
 и размер. Затем прямоугольник будет увеличен на созданный размер. Полученные
 ширина и высота прямоугольника будут выведены в консоль среды разработки.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
