# IWxView.FocusedShape

IWxView.FocusedShape
-


# IWxView.FocusedShape


## Синтаксис


		FocusedShape: [IWxShape](../IWxShape/IWxShape.htm);


## Описание


Свойство FocusedShape определяет
 фигуру, которая находится в фокусной рамке, которая вызывается при нажатии
 на клавишу TAB.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkspaceBox
 с наименованием «WorkspaceBox1» и какого-либо источника данных для «WorkspaceBox1».


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    ws: IWxWorkspace;

		    view: IWxView;

		    arrow: IWxArrow;

		    ellipse: IWxEllipse;

		    Shape: IWxShape;

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

		    view.FocusedShape := ellipse;

		 End Sub Button1OnClick;


После выполнения примера эллипс будет выделен с помощью клавиши TAB.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
