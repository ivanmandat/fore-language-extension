# IGxSize.ToSizeF

IGxSize.ToSizeF
-


# IGxSize.ToSizeF


## Синтаксис


ToSizeF: [IGxSizeF](../IGxSizeF/IGxSizeF.htm);


## Описание


Метод ToSizeF осуществляет преобразование
 целочисленного размера в вещественный размер.


## Пример


			Sub UserProc;

Var

    Size: IGxSize;

    SizeF: IGxSizeF;

Begin

    Size := New GxSize.Create(10, 15);

    SizeF := Size.ToSizeF;

    Debug.WriteLine("Ширина: " + SizeF.Width.ToString + ". Высота: " + SizeF.Height.ToString);

End Sub UserProc;


При выполнении примера будет создан целочисленный размер. Затем размер
 будет преобразован в вещественный размер. Ширина и высота полученного
 размера будут выведены в консоль среды разработки.


См. также:


[IGxSize](IGxSize.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
