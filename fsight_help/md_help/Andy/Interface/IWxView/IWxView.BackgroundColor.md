# IWxView.BackgroundColor

IWxView.BackgroundColor
-


# IWxView.BackgroundColor


## Синтаксис


BackgroundColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство BackgroundColor определяет
 цвет поля рабочего пространства.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ws: IWxWorkspace;

	    view: IWxView;

	Begin

	    // Получаем рабочее пространство для редактирования

	    ws := UiWorkspace1.WxWorkspace;

	    view := ws.CreateView;

	    view := ws.Views.Item(0);

	    view.BackgroundColor := New GxColor.CreateRGB(0, 129, 255);

	End Sub Button1OnClick;


После выполнения примера будет изменен цвет фона рабочего пространства.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
