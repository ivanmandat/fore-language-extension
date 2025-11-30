# IWxView.ConvertPtToView

IWxView.ConvertPtToView
-


# IWxView.ConvertPtToView


## Синтаксис


		ConvertPtToView(Pt: [IGxPoint](ModDrawing.chm::/Interface/IGxPoint/IGxPoint.htm)):
		 [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Параметры


Pt. Точка в пикселях.


## Описание


Метод ConvertPtToView преобразует
 заданную точку в пикселях в точку в миллиметрах.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней компоненты WorkspaceBox с
 наименованием «WorkspaceBox1» и какого-либо источника данных для «WorkspaceBox1».


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


					Sub WorkspaceBox1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    WS: IWxWorkspace;

		    View: IWxView;

		    Point: IGxPointF;

		    Ellipse: IWxEllipse;

		Begin

		    WS := UiWorkspace1.WxWorkspace;

		    View := WS.Views.Item(0);

		    View.Id := "MyView";

		    View.Scale := 0.5;

		    View.Size := New GxSizeF.Create(100.55,100.66);

		    Point := View.ConvertPtToView(New GxPoint.Create(Args.pPoint.X, Args.pPoint.Y));

		    Ellipse := WS.CreateEllipse;

		    Ellipse.PinPosition := View.ViewToWorkspace(Point);

		    //Координаты

		    Debug.WriteLine(Args.pPoint.X.ToString + " " + Args.pPoint.Y.ToString);

		    Debug.WriteLine(Point.X.ToString + " " + Point.Y.ToString);

		    Debug.WriteLine(Ellipse.PinPosition.X.ToString + " " + Ellipse.PinPosition.Y.ToString);

		End Sub WorkspaceBox1OnClick;


После выполнения примера будет создано отображение рабочего пространства
 и заданы параметры, также при нажатии на рабочее пространство будет отображаться
 эллипс.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
