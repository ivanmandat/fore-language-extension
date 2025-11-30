# IWxWorkspace.Views

IWxWorkspace.Views
-


# IWxWorkspace.Views


## Синтаксис


Views: [IWxViews](../IWxViews/IWxViews.htm);


## Описание


Свойство Views возвращает коллекцию
 отображений рабочего пространства.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox и компонента
 UiWorkspace с наименованием UiWorkspace1, являющимся источником данных
 для WorkspaceBox.


Добавьте ссылки на системные сборки: Andy, Drawing, Ui.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    wsp: IWxWorkspace;

	    Arrow: IWxArrow;

	    view: IWxView;

	    Shapes: IWxShapes;

	    SelectS: IWxSelectedShapes;

	    Rec: IWxRectangle;

	Begin

	    wsp := UiWorkspace1.WxWorkspace;

	    Arrow := wsp.CreateArrow;

	    Arrow.FirstPoint := New GxPointF.Create(1, 2);

	    Arrow.LastPoint := New GxPointF.Create(3, 19);

	    Arrow.Angle := 10;

	    Shapes := wsp.Shapes;

	    Rec := wsp.CreateRectangle;

	    Rec.Id := "Rectangle1";

	    Rec.PinPosition := New GxPointF.Create(12.3,-10);

	    view := wsp.Views.Item(0);

	    SelectS := view.SelectedShapes;

	    SelectS.Add(Shapes.Item(0));

	    SelectS.Add(shapes.Item(1));

	    SelectS.Align(WxShapesAlignment.VerticalCenter);

	End Sub Button1OnClick;


После выполнения примера выделенные фигуры будут выровнены по вертикальному
 центру.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
