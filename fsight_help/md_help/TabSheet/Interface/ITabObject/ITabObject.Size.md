# ITabObject.Size

ITabObject.Size
-


# ITabObject.Size


## Синтаксис


Size: [IGxSizeF](ModDrawing.chm::/Interface/IGxSizeF/IGxSizeF.htm);


## Описание


Свойство Size определяет размер
 объекта, расположенного на листе отчета.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Obj: ITabObject;

    Size: IGxRectF;

    SizeF: IGxSizeF;

Begin

    Size := New gxrectf.Create(0, 0, 10, 10);

    Obj := UiTabSheet1.TabSheet.Objects.Add("PrxPicture", Size);

    (Obj As IPrxPicture).Image := GxImage.FromFile("c:\Image.bmp");

    SizeF := Obj.Size;

End Sub Button1OnClick;


После выполнения примера на листе таблицы будет создан рисунок "c:\Image.bmp",
 после чего в переменной «SizeF» будет содержаться его размер.


См. также:


[ITabObject](ITabObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
