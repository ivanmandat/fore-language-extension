# IWxView.GlueConnector

IWxView.GlueConnector
-


# IWxView.GlueConnector


## Синтаксис


GlueConnector: Boolean;


## Описание


Свойство GlueConnector определяет
 возможность создания связи на свободном пространстве.


## Комментарии


Если значение свойства True,
 то связи можно создавать только между объектами, при значении False
 связь можно будет создавать как между объектами, так и отдельным объектом,
 не соединяющим фигуры.


По умолчанию свойство имеет значение False.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ws: IWxWorkspace;

	    view: IWxView;

	Begin

	    // Получаем рабочее пространство для редактирования

	    ws := UiWorkspace1.WxWorkspace;

	    view := ws.CreateView;

	    view := ws.Views.Item(0);

	    view.GlueConnector := True;

	End Sub Button1OnClick;


После выполнения примера связь можно будет создавать только между объектами.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
