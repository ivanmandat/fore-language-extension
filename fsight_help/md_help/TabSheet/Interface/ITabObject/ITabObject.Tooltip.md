# ITabObject.Tooltip

ITabObject.Tooltip
-


# ITabObject.Tooltip


## Синтаксис


Tooltip: String;


## Описание


Свойство Tooltip определяет
 текст всплывающей подсказки при наведении курсора на объект.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Obj: ITabObject;

	    Size: IGxRectF;

	Begin

	    Size := New GxRectF.Create(0, 0, 10, 10);

	    Obj := UiTabSheet1.TabSheet.Objects.Add("PrxPicture", Size);

	    (Obj As IPrxPicture).Image := GxImage.FromFile("c:\View.bmp");

	    Obj.Tooltip := "Это изображение";

	End Sub Button1OnClick;


После выполнения примера на листе таблицы создается рисунок "c:\View.bmp",
 при наведении курсора мыши над которым появляется подсказка с текстом
 "Это картинка".


См. также:


[ITabObject](ITabObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
