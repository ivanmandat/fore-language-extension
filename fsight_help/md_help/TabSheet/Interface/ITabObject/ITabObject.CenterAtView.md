# ITabObject.CenterAtView

ITabObject.CenterAtView
-


# ITabObject.CenterAtView


## Синтаксис


CenterAtView;


## Описание


Метод CenterAtView прокручивает
 строки и столбцы таблицы таким образом, чтобы текущий объект был расположен
 в центре листа отчета.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Obj: ITabObject;

	    Size: IGxRectF;

	Begin

	    Size := New GxRectF.Create(100, 100, 110, 110);

	    Obj := UiTabSheet1.TabSheet.Objects.Add("PrxPicture", Size);

	    (Obj As IPrxPicture).Image := GxImage.FromFile("c:\Image.bmp");

	    Obj.CenterAtView;

	End Sub Button1OnClick;


После выполнения примера на листе таблицы создается рисунок "c:\Image.bmp",
 затем происходит прокручивание строк и столбцов таблицы таким образом,
 чтобы текущий рисунок был расположен в центре таблицы.


См. также:


[ITabObject](ITabObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
