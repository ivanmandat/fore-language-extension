# IWxSelectedShapes.Clear

IWxSelectedShapes.Clear
-


# IWxSelectedShapes.Clear


## Синтаксис


Clear;


## Описание


Метод Clear очищает коллекцию
 выделенных фигур.


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

	    SelectS: IWxSelectedShapes;

	Begin

	    Wsp := UiWorkspace1.WxWorkspace;

	    Wsp.BeginUpdate;

	    Rect := Wsp.CreateRectangle;

	    Pos := New GxPointF.Create(20, 10);

	    Rect.PinPosition := Pos;

	    Rect.Text := "Прямоугольник";

	    Ellipse := Wsp.CreateEllipse;

	    Pos := New GxPointF.Create(40, 50);

	    Ellipse.PinPosition := Pos;

	    Ellipse.Text := "Эллипс";

	    SelectS := Wsp.Views.Item(0).SelectedShapes;

	    SelectS.Add(Ellipse);

	    SelectS.Add(Rect);

	    SelectS.Align(WxShapesAlignment.VerticalCenter);

	    SelectS.Clear;

	    Wsp.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера созданные объекты будут выделены и выровнены
 по вертикальному центру, после чего коллекция выделенных фигур будет очищена.


См. также:


[IWxSelectedShapes](IWxSelectedShapes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
