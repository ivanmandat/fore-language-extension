# IWxWorkspace.CreateRectangle

IWxWorkspace.CreateRectangle
-


# IWxWorkspace.CreateRectangle


## Синтаксис


		CreateRectangle: [IWxRectangle](../IWxRectangle/IWxRectangle.htm);


## Описание


Метод CreateRectangle создает
 прямоугольник.


## Пример


В рассматриваемом примере предполагается наличие формы с размещёнными
 на ней компонентами Button и UiWorkspaceObject с идентификаторами
 «Button1» и «UiWorkspaceObject1» соотоветственно. К UiWorkspaceObject
 должен быть подключён соответствующий объект репозитория.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    ws: IWxWorkspace;

		    Rec: IWxRectangle;

		Begin

		    ws := UiWorkspaceObject1.Instance As IWxWorkspace;

		    Rec := ws.CreateRectangle;

		    Rec.Id := "Rectangle1";

		    Rec.PinPosition := New GxPointF.Create(12.3,-2);

		    Rec.Text := "Прямоугольник";

		End Sub Button1OnClick;


После выполнения примера при нажатии на компонент «Button1» на компоненте
 «UiWorkspaceObject1» будет создан прямоугольник.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
