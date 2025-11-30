# IWxSelectedShapes.Size

IWxSelectedShapes.Size
-


# IWxSelectedShapes.Size


## Синтаксис


Size(Sizing: [WxShapesSizing](../../Enums/WxShapesSizing.htm));


## Параметры


Sizing. Тип изменения размеров.


## Описание


Метод Size изменяет размеры
 фигур в соответствии с выбранным типом изменения.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox и компонента
 UiWorkspace с наименованием UiWorkspace1, являющимся источником данных
 для WorkspaceBox.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Wsp: IWxWorkspace;

	    Rect: IWxRectangle;

	    Ellipse: IWxEllipse;

	    Pos: IGxPointF;

	    Size: IGxSizeF;

	    SelectS: IWxSelectedShapes;

	Begin

	    Wsp := UiWorkspace1.WxWorkspace;

	    Wsp.BeginUpdate;

	    Rect := Wsp.CreateRectangle;

	    Pos := New GxPointF.Create(20, 10);

	    Size := New GxSizeF.Create(10, 7);

	    Rect.PinPosition := Pos;

	    Rect.Size := Size;

	    Ellipse := Wsp.CreateEllipse;

	    Pos := New GxPointF.Create(40, 50);

	    Size := New GxSizeF.Create(40, 15);

	    Ellipse.PinPosition := Pos;

	    Ellipse.Size := Size;

	    SelectS := Wsp.Views.Item(0).SelectedShapes;

	    SelectS.Add(Rect);

	    SelectS.Add(Ellipse);

	    SelectS.Size(WxShapesSizing.MaxWidth);

	    Wsp.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера ширина фигур будет изменена на ширину самой
 широкой фигуры.


См. также:


[IWxSelectedShapes](IWxSelectedShapes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
