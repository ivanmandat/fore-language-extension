# IWxView.ViewToWorkspace

IWxView.ViewToWorkspace
-


# IWxView.ViewToWorkspace


## Синтаксис


ViewToWorkspace(Position: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm)):
 [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Параметры


Position. Координата отображения.


## Описание


Метод ViewToWorkspace возвращает
 координату рабочего пространства, которая соответствует заданной координате
 отображения.


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

	    PointF := New GxPointF.Create(-66, -7);

	    ws.Shapes.Item(1).PinPosition := view.ViewToWorkspace(PointF);

	End Sub Button1OnClick;


После выполнения примера будет изменено положение фигуры.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
