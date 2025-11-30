# IWxView.CopySelectedShapes

IWxView.CopySelectedShapes
-


# IWxView.CopySelectedShapes


## Синтаксис


CopySelectedShapes;


## Описание


Метод CopySelectedShapes копирует
 выделенные объекты в буфер обмена.


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

	    PointF: IGxPointF;

	Begin

	    // Получаем рабочее пространство для редактирования

	    ws := UiWorkspace1.WxWorkspace;

	    view := ws.CreateView;

	    view := ws.Views.Item(0);

	    arrow := ws.CreateArrow;

	    Arrow.FirstPoint := New GxPointF.Create(10, 10);

	    Arrow.LastPoint := New GxPointF.Create(3, 19);

	    ellipse := ws.CreateEllipse;

	    view.ActiveShape := arrow;

	    view.CopySelectedShapes;

	    PointF := New GxPointF.Create(10, 5);

	    view.Paste(PointF);

	End Sub Button1OnClick;


После выполнения примера выделенный объект будет скопирован и вставлен
 на рабочее пространство.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
