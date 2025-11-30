# IUiWorkspace.WxWorkspace

IUiWorkspace.WxWorkspace
-


# IUiWorkspace.WxWorkspace


## Синтаксис


WxWorkspace: [IWxWorkspace](Andy.chm::/Interface/IWxWorkspace/IWxWorkspace.htm);


## Описание


Свойство WxWorkspace возвращает
 графический контекст рабочего пространства, отображаемый в дальнейшем,
 в компоненте [WorkspaceBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/WorkspaceBox.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и компонента UiWorkspace, являющегося источником данных
 для компонента WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Ui, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Workspace: IWxWorkspace;

	        Rect: IWxRectangle;

	        Point: IGxPointF;

	    Begin

	        Point := New GxPointF.Create(-15, -15);

	        WorkspaceBox1.Source := UiWorkspace1 As IWorkspaceSource;

	        Workspace := UiWorkspace1.WxWorkspace;

	        Workspace.BeginUpdate;

	        //1 прямоугольник

	        Rect := Workspace.CreateRectangle;

	        //2 прямоугольник

	        Rect := Workspace.CreateRectangle;

	        Rect.PinPosition := Point;

	        Workspace.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку, в качестве источника
 данных для компонента WorkspaceBox1 будет установлен компонент UiWorkspace1.
 На рабочем пространстве компонента UiWorkspace1 будут созданы два прямоугольника,
 второй прямоугольник будет смещен в заданную точку.


См. также:


[IUiWorkspace](IUiWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
