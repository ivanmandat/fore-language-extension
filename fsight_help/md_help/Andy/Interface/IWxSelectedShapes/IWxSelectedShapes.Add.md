# IWxSelectedShapes.Add

IWxSelectedShapes.Add
-


# IWxSelectedShapes.Add


## Синтаксис


		Add(Value: [IWxShape](../IWxShape/IWxShape.htm));


## Параметры


Value. Фигура.


## Описание


Метод Add добавляет фигуру в
 коллекцию выделенных фигур.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkspaceBox
 и компонента UiWorkspace с наименованием
 «UiWorkspace1», являющимся источником данных для WorkspaceBox.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    ws: IWxWorkspace;

		    Rect: IWxRectangle;

		    Ellipse: IWxEllipse;

		    pos: IGxPointF;

		    SelectS: IWxSelectedShapes;

		Begin

		    ws := UiWorkspace1.WxWorkspace;

		    ws.BeginUpdate;

		    Rect := ws.CreateRectangle;

		    pos := New GxPointF.Create(20, 10);

		    Rect.PinPosition := pos;

		    Rect.Text := "Прямоугольник";

		    Ellipse := ws.CreateEllipse;

		    pos := New GxPointF.Create(40, 50);

		    Ellipse.PinPosition := pos;

		    Ellipse.Text := "Эллипс";

		    SelectS := WorkspaceBox1.View.SelectedShapes;

		    SelectS.Add(Ellipse);

		    SelectS.Add(Rect);

		    SelectS.Align(WxShapesAlignment.VerticalCenter);

		    ws.EndUpdate;

		End Sub Button1OnClick;


После выполнения примера созданные объекты будут выделены и выровнены
 по вертикальному центру.


См. также:


[IWxSelectedShapes](IWxSelectedShapes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
