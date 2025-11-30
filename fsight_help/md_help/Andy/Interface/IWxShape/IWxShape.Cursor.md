# IWxShape.Cursor

IWxShape.Cursor
-


# IWxShape.Cursor


## Синтаксис


		Cursor: [WxCursor](../../Enums/WxCursor.htm);


## Описание


Свойство Cursor определяет вид
 курсора над объектом.


## Пример


В рассматриваемом примере предполагается наличие формы с размещёнными
 на ней компонентами Button и UiWorkspaceObject с идентификаторами
 «Button1» и «iWorkspaceObject1» соответственно. К UiWorkspaceObject
 должен быть подключен соответствующий объект репозитория.


Добавьте ссылки на системные сборки: Andy, Metabase, Workspace.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    Ws: IWxWorkspace;

		    Shape: IWxShape;

		Begin

		    Ws := UiWorkspaceObject1.Instance As IWxWorkspace;

		    Ws.BeginUpdate;

		    Shape := Ws.Shapes.Item(0);

		    Shape.Cursor := WxCursor.Cross;

		    Ws.EndUpdate;

		End Sub Button1OnClick;


После выполнения примера при нажатии на компонент «Button1» над указанной
 фигурой компонента «UiWorkspaceObject1» курсор мыши будет принимать вид
 креста.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
