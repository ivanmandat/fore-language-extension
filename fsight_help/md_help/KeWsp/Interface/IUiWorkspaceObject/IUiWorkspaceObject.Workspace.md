# IUiWorkspaceObject.Workspace

IUiWorkspaceObject.Workspace
-


# IUiWorkspaceObject.Workspace


## Синтаксис


Workspace: [IWorkspace](../IWorkspace/IWorkspace.htm);


## Описание


Свойство Workspace определяет
 рабочее пространство репозитория, данные которого будут отображаться в
 визуальном компоненте.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и компонента UiWorkspaceObject, являющегося источником данных
 для компонента WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, Collections, ExtCtrls, Forms,
 Ui, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        MB: IMetabase;

	        Wsp: IWorkspace;

	    Begin

	        MB := MetabaseClass.Active;

	        Wsp := MB.ItemById("Wsp_1").Bind As IWorkspace;

	        UiWorkspaceObject1.Workspace := Wsp;

	        UiWorkspaceObject1.Active := True;

	        WorkspaceBox1.Source := UiWorkspaceObject1 As IWorkspaceSource;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку, компонент UiWorkspaceObject1
 будет связан с рабочим пространством с идентификатором Wsp_1. Данные будут
 отображаться в компоненте WorkspaceBox1.


См. также:


[IUiWorkspaceObject](IUiWorkspaceObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
