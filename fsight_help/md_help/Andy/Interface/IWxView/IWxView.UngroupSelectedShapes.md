# IWxView.UngroupSelectedShapes

IWxView.UngroupSelectedShapes
-


# IWxView.UngroupSelectedShapes


## Синтаксис


UngroupSelectedShapes;


## Описание


Метод UngroupSelectedShapes
 разгруппировывает выделенные фигуры.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ws: IWxWorkspace;

	    view: IWxView;

	    PointF: IGxPointF;

	    arrow: IWxArrow;

	    ellipse: IWxEllipse;

	    Shs: IWxShapes;

	    i: Integer;

	Begin

	    // Получаем рабочее пространство для редактирования

	    ws := UiWorkspace1.WxWorkspace;

	    view := ws.CreateView;

	    view := ws.Views.Item(0);

	    ellipse := ws.CreateEllipse;

	    arrow := ws.CreateArrow;

	    Arrow.FirstPoint := New GxPointF.Create(10, 10);

	    Arrow.LastPoint := New GxPointF.Create(3, 19);

	    ellipse := ws.CreateEllipse;

	    Shs := ws.Shapes;

	    For i := 0 To Shs.Count - 1 Do

	        view.SelectedShapes.Add(ws.Shapes.Item(i));

	    End For;

	    view.GroupSelectedShapes;

	    view.UngroupSelectedShapes;

	End Sub Button1OnClick;


После выполнения примера выделенные группы будут разгруппированы.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
