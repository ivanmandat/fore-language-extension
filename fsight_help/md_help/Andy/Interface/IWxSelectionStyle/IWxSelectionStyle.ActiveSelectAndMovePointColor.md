# IWxSelectionStyle.ActiveSelectAndMovePointColor

IWxSelectionStyle.ActiveSelectAndMovePointColor
-


# IWxSelectionStyle.ActiveSelectAndMovePointColor


## Синтаксис


ActiveSelectAndMovePointColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство ActiveSelectAndMovePointColor
 определяет цвет точек выделенных объектов при работе в режиме выделения
 и перемещения.


## Комментарии


Данное свойство актуально, если в свойству [IWxView.ActiveTool](../IWxView/IWxView.ActiveTool.htm)
 установлено значение [WxTool.SelectAndMove](../../Enums/WxTool.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Wsp: IWxWorkspace;

	    View: IWxView;

	    Rect: IWxEllipseBaloon;

	Begin

	    Wsp := UiWorkspace1.WxWorkspace;

	    Wsp.BeginUpdate;

	    Rect := Wsp.CreateEllipseBaloon;

	    Wsp.EndUpdate;

	    View := WorkspaceBox1.View;

	    View.ActiveTool := WxTool.SelectAndMove;

	    View.SelectionStyle.ActiveSelectAndMovePointColor := GxColor.FromName("Red");

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет включен режим выделения
 и перемещения объектов рабочего пространства. При выделении объекты будут
 обозначены красными точками.


См. также:


[IWxSelectionStyle](IWxSelectionStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
