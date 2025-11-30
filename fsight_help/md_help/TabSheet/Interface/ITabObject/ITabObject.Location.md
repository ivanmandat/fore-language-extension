# ITabObject.Location

ITabObject.Location
-


# ITabObject.Location


## Синтаксис


Location: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Описание


Свойство Location определяет
 верхний левый угол объекта, расположенного на листе отчета.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Obj: ITabObject;

    Size: IGxRectF;

    Point: IGxPointF;

Begin

    Size := New GxRectF.Create(0, 0, 10, 10);

    Obj := UiTabSheet1.TabSheet.Objects.Add("PrxPicture", Size);

    (Obj As IPrxPicture).Image := GxImage.FromFile("c:\Image.bmp");

    Point := Obj.Location;

End Sub Button1OnClick;


После выполнения примера на листе таблицы создается рисунок "c:\Image.bmp",
 после чего в переменную «Point» помещаются координаты левого верхнего
 угла рисунка.


См. также:


[ITabObject](ITabObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
