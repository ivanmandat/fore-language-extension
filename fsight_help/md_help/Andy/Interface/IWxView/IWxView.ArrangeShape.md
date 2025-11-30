# IWxView.ArrangeShape

IWxView.ArrangeShape
-


# IWxView.ArrangeShape


## Синтаксис


ArrangeShape(Shape: [IWxShape](../IWxShape/IWxShape.htm));


## Параметры


Shape. Фигура рабочего пространства.


## Описание


Метод ArrangeShape выставляет
 фигуру на диагональ, направленную из верхнего левого угла в нижний правый
 угол отображения.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ws: IWxWorkspace;

	    view: IWxView;

	    Shape: IWxShape;

	    arrow: IWxArrow;

	    ellipse: IWxEllipse;

	    Shapes: IWxShapes;

	    i: Integer;

	Begin

	    // Получаем рабочее пространство для редактирования

	    ws := UiWorkspace1.WxWorkspace;

	    view := ws.CreateView;

	    view := ws.Views.Item(0);

	    arrow := ws.CreateArrow;

	    Arrow.FirstPoint := New GxPointF.Create(10, 10);

	    Arrow.LastPoint := New GxPointF.Create(3, 19);

	    ellipse := ws.CreateEllipse;

	    Shapes := ws.Shapes;

	    For i := 0 To Shapes.Count - 1 Do

	        view.ArrangeShape(Shapes.Item(i));

	    End For;

	End Sub Button1OnClick;


После выполнения примера все объекты рабочего пространства будут выставлены
 по диагонали.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
