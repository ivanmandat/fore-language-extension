# IWxView.ExplorerMode

IWxView.ExplorerMode
-


# IWxView.ExplorerMode


## Синтаксис


ExplorerMode: Boolean;


## Описание


Свойство ExplorerMode определяет
 способ выделения фигур при [ActiveTool](IWxView.ActiveTool.htm),
 установленном в SelectOnly.


## Комментарии


При значении свойства True выделить
 можно только текст, содержащийся в объектах, при значении False
 возможно выделение всего объекта.


По умолчанию свойство имеет значение True.


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

	    view.ActiveTool := WxTool.SelectOnly;

	    view.ExplorerMode := False;

	End Sub Button1OnClick;


После выполнения примера будет установлен режим SelectOnly и включена
 возможность выделения всего объекта.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
