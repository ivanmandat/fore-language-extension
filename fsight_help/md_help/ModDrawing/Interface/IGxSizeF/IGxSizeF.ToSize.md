# IGxSizeF.ToSize

IGxSizeF.ToSize
-


# IGxSizeF.ToSize


## Синтаксис


ToSize: [IGxSize](../IGxSize/IGxSize.htm);


## Описание


Метод ToSize осуществляет преобразование
 вещественного размера в целочисленный размер.


## Комментарии


При преобразовании дробная часть у ширины и высоты размера отбрасывается.


## Пример


			Sub UserProc;

Var

    SizeF: IGxSizeF;

    Size: IGxSize;

Begin

    SizeF := New GxSizeF.Create(10.5, 15.5);

    Size := SizeF.ToSize;

    Debug.WriteLine("Ширина: " + Size.Width.ToString + ". Высота: " + Size.Height.ToString);

End Sub UserProc;


При выполнении примера будет создан вещественный размер. Затем размер
 будет преобразован в целочисленный размер. Ширина и высота полученного
 размера будут выведены в консоль среды разработки.


См. также:


[IGxSizeF](IGxSizeF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
