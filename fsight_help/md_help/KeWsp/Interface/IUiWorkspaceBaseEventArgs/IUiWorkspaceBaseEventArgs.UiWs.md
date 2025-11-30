# IUiWorkspaceBaseEventArgs.UiWs

IUiWorkspaceBaseEventArgs.UiWs
-


# IUiWorkspaceBaseEventArgs.UiWs


## Синтаксис


UiWs: [IUiWorkspaceObject](../IUiWorkspaceObject/IUiWorkspaceObject.htm);


## Описание


Свойство UiWs возвращает объект,
 содержащий компонент [UiWorkspaceObject](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiWorkspaceObject.htm),
 сгенерировавший событие.


## Пример


Для выполнения примера предполагается наличие в репозитории формы и
 рабочего пространства с идентификатором WORKSPACE. Разместите на форме
 компоненты [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm),
 [WorkspaceBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/WorkspaceBox.htm),
 [UiWorkspaceObject](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiWorkspaceObject.htm)
 с наименованиями «Button1», «WorkspaceBox1», «UiWorkspaceObject1» соответственно.


Добавьте ссылки на системные сборки: Andy, Drawing, Fore, Forms, Metabase,
 Workspace.


	Class TESTForm: Form

	    Button1: Button;

	    WorkspaceBox1: WorkspaceBox;

	    UiWorkspaceObject1: UiWorkspaceObject;


	    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	    Var

	        Mb: IMetabase;

	        Workspace: IMetabaseObjectDescriptor;

	    Begin

	        // Получим рабочее пространство

	        Mb := MetabaseClass.Active;

	        Workspace := Mb.ItemById("WORKSPACE").Edit;

	        // Зададим параметры открытия объекта на форме

	        UiWorkspaceObject1.Active := True;

	        UiWorkspaceObject1.Object := Workspace;

	        UiWorkspaceObject1.OperationMode := UiMetabaseObjectOperationMode.Edit;

	        WorkspaceBox1.Source := UiWorkspaceObject1 As IWorkspaceSource;

	    End Sub TESTFormOnCreate;


	    // Добавим фигуру на рабочее пространство при нажатии на кнопку

	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Workspace: IWxWorkspace;

	    Begin

	        Workspace := UiWorkspaceObject1.Workspace As IWxWorkspace;

	        Workspace.CreateEllipse;

	    End Sub Button1OnClick;


	    // Настроим событие, которое будет происходить после добавления фигуры

	    Sub UiWorkspaceObject1OnAfterCreateShape(Sender: Object; Args: IUiWorkspaceShapeEventArgs);

	    Var

	        Arg: IUiWorkspaceBaseEventArgs;

	        Object: IUiWorkspaceObject;

	        Workspace: IWxWorkspace;

	        Shapes: IWxShapes;

	        Shape: IWxShape;

	        Style: IWxStyle;

	        Count: Integer;

	    Begin

	        Arg := Args As IUiWorkspaceBaseEventArgs;

	        // Получим объект, содержащий компонент UiWorkspaceObject

	        Object := Arg.UiWs;

	        // Получим рабочее пространство

	        Workspace := Object.Workspace As IWxWorkspace;

	        Workspace.BeginUpdate;

	        // Получим коллекцию фигур и их количество

	        Shapes := Workspace.Shapes;

	        Count := Shapes.Count;

	        // Зададим красный цвет заливки добавленной фигуре

	        Shape := Workspace.Shapes.Item(Count - 1);

	        Style := Shape.Style;

	        Style.BackgroundBrushForeColor := GxColor.FromName("Red");

	        Workspace.EndUpdate;

	    End Sub UiWorkspaceObject1OnAfterCreateShape;

	End Class TESTForm;


В результате выполнения примера при нажатии на кнопку на рабочем пространстве
 будет добавлена фигура - эллипс. При добавлении фигуры выполняется событие,
 которое устанавливает красный цвет заливки.


См. также:


[IUiWorkspaceBaseEventArgs](IUiWorkspaceBaseEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
