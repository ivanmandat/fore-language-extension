# IWxView.SelectionStyle

IWxView.SelectionStyle
-


# IWxView.SelectionStyle


## Синтаксис


SelectionStyle: [IWxSelectionStyle](../IWxSelectionStyle/IWxSelectionStyle.htm);


## Описание


Свойство SelectionStyle определяет
 параметры оформления выделенного объекта на рабочем пространстве.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ws: IWxWorkspace;

	    view: IWxView;

	    arrow: IWxArrow;

	    ellipse: IWxEllipse;

	    SStyle: IWxSelectionStyle;

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

	    SStyle := view.SelectionStyle;

	    SStyle.ActivePointColor := GxColor.FromName("Red");

	    SStyle.SelectedRotationPointColor := GxColor.FromName("Pink");

	    SStyle.SelectionPointStyle := WxSelectionPointStyle.Corners;

	    SStyle.SelectionPointSize := 2;

	    SStyle.ActiveRotationPointColor := New GxColor.CreateRGB(0, 128, 255);

	    SStyle.ConnectionPointColor := New GxColor.CreateRGB(0, 192, 0);

	End Sub Button1OnClick;


После выполнения примера будут задан стиль выделения объектов на рабочем
 пространстве.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
