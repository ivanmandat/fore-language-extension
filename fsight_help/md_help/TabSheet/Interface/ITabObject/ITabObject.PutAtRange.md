# ITabObject.PutAtRange

ITabObject.PutAtRange
-


# ITabObject.PutAtRange


## Синтаксис


PutAtRange(Range: [ITabRange](../ITabRange/ITabRange.htm));


## Параметры


Range — диапазон, на которым необходимо разместить объект.


## Описание


Метод PutAtRange помещает объект в область, которая передается в качестве входного параметра Range.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Range: ITabRange;

    Obj: ITabObject;

    Size: IGxRectF;

Begin

    Range := UiTabSheet1.TabSheet.View.Selection.Range;

    Size := New GxRectF.Create(0, 0, 10, 10);

    Obj := UiTabSheet1.TabSheet.Objects.Add("PrxPicture", Size);

    (Obj As IPrxPicture).Image := GxImage.FromFile("c:\Image.bmp");

    Obj.PutAtRange(Range);

End Sub Button1OnClick;


После выполнения примера на листе таблицы создается рисунок "c:\Image.bmp", затем этот рисунок помещается в выделенную область ячеек.


См. также:


[ITabObject](ITabObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
