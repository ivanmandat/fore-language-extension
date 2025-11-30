# IWxView.ActiveTool

IWxView.ActiveTool
-


# IWxView.ActiveTool


## Синтаксис


ActiveTool: [WxTool](../../Enums/WxTool.htm);


## Описание


Свойство ActiveTool определяет
 активный инструмент.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Wsp: IWxWorkspace;

	    View: IWxView;

	    Arrow: IWxArrow;

	    Ellipse: IWxEllipse;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Wsp := UiWorkspace1.WxWorkspace;

	    View := Wsp.CreateView;

	    View := Wsp.Views.Item(0);

	    Arrow := Wsp.CreateArrow;

	    Arrow.FirstPoint := New GxPointF.Create(10, 10);

	    Arrow.LastPoint := New GxPointF.Create(3, 19);

	    Ellipse := Wsp.CreateEllipse;

	    View.ActiveTool := WxTool.SelectOnly;

	    View.ExplorerMode := False;

	End Sub Button1OnClick;


После выполнения примера будет установлен режим SelectOnly и включена
 возможность выделения всего объекта.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
