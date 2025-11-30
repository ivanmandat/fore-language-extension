# IGxRect.ToRectF

IGxRect.ToRectF
-


# IGxRect.ToRectF


## Синтаксис


ToRectF: [IGxRectF](../IGxRectF/IGxRectF.htm);


## Описание


Метод ToRectF осуществляет преобразование
 целочисленного прямоугольника в вещественный.


## Пример


			Sub UserProc;

Var

    Rect: IGxRect;

    RectF: IGxRectF;

Begin

    Rect := New GxRect.Create(0, 0, 10, 10);

    RectF := Rect.ToRectF;

    Debug.WriteLine("Ширина: " + RectF.Width.ToString + ". Высота: " + RectF.Height.ToString);

End Sub UserProc;


При выполнении примера будет создан целочисленный прямоугольник. Затем
 он будет преобразован в вещественный прямоугольник. Ширина и высота полученного
 прямоугольника будут выведены в консоль среды разработки.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
