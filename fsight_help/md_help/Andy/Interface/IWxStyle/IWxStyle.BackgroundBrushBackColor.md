# IWxStyle.BackgroundBrushBackColor

IWxStyle.BackgroundBrushBackColor
-


# IWxStyle.BackgroundBrushBackColor


## Синтаксис


BackgroundBrushBackColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство BackgroundBrushBackColor
 определяет цвет узора для фона объекта.


## Пример


В рассматриваемом примере предполагается наличие формы с размещёнными
 на ней компонентами Button и UiWorkspaceObject с идентификаторами
 «Button1» и «UiWorkspaceObject1» соотоветственно. К UiWorkspaceObject
 должен быть подключён соответствующий объект репозитория. Также этот компонент
 должен содержать заранее созданную фигуру.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ws: IWxWorkspace;

	    Shape: IWxShape;

	    Style: IWxStyle;

	Begin

	    ws := UiWorkspaceObject1.Instance As IWxWorkspace;

	    ws.BeginUpdate;

	    Shape := ws.Shapes.Item(0);

	    Style := Shape.Style;

	    Style.BackgroundBrushForeColor := GxColor.FromName("Red");

	    Style.BackgroundBrushForeTransparent := 30;

	    Style.BackgroundBrushBackColor := GxColor.FromName("Blue");

	    Style.BackgroundBrushBackTransparent := 60;

	    Style.BackgroundBrushPattern := GxBrushPattern.Diagonals;

	    ws.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на компонент «Button1» на фигуре
 компонента «UiWorkspaceObject1» будет задана заливка с указанными настройками.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
