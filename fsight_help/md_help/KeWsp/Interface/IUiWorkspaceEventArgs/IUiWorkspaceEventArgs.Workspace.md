# IUiWorkspaceEventArgs.Workspace

IUiWorkspaceEventArgs.Workspace
-


# IUiWorkspaceEventArgs.Workspace


## Синтаксис


Workspace: [IWorkspace](../IWorkspace/IWorkspace.htm);


## Описание


Свойство Workspace возвращает
 рабочее пространство.


## Пример


Для выполнения примера предполагается наличие в репозитории формы и
 рабочего пространства с идентификатором WORKSPACE. Разместите на форме
 компоненты [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm),
 [WorkspaceBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/WorkspaceBox.htm),
 [UiWorkspaceObject](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiWorkspaceObject.htm)
 с наименованиями «Button1», «WorkspaceBox1», «UiWorkspaceObject1» соответственно.


Добавьте ссылки на системные сборки: Andy, Drawing, Fore, ExtCtrls,
 Forms, MathFin, Metabase, Workspace.


	Class TESTForm: Form

	    Button1: Button;

	    UiWorkspaceObject1: UiWorkspaceObject;

	    WorkspaceBox1: WorkspaceBox;


	    Sub IUIWORKSPACEEVENTARGS_WORKSPACEFormOnCreate(Sender: Object; Args: IEventArgs);

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

	    End Sub IUIWORKSPACEEVENTARGS_WORKSPACEFormOnCreate;


	    // Выведем на печать рабочее пространство при нажатии на кнопку

	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Printer: IGxDocumentPrinter;

	        w: IGxDocument;

	    Begin

	        // Получим принтер для печати

	        Printer := GxPrinters.DefaultPrinter As IGxDocumentPrinter;

	        w := (UiWorkspaceObject1 As IDocumentSource).GetDocument;

	        // Выведем на печать рабочее пространство

	        w.Print(Printer, -1, -1, "");

	    End Sub Button1OnClick;


	    // Настроим событие, которое будет происходить после печати рабочего пространства

	    Sub UiWorkspaceObject1OnAfterPrintWorkspace(Sender: Object; Args: IUiWorkspaceEventArgs);

	    Var

	        ui: IWxWorkspace;

	        shapesCount, i: Integer;

	        shape: IWxShape;

	    Begin

	        // Ввдём наименование рабочего пространства для печати

	        Debug.WriteLine("OnAfterPrintWorkspace - Form");

	        // Получим рабочее пространство

	        ui := Args.Workspace As IWxWorkspace;

	        // Получим коллекцию фигур и их количество

	        With shapes: ui.Shapes Do

	            shapesCount := shapes.Count;

	            For i := 0 To shapesCount - 1 Do

	                // Получим текущую фигуру

	                shape := shapes.Item(i);

	                shape.Style.BeginUpdate;

	                // Сгенерируем случайный цвет и применим его к фигуре

	                With r: Math.RandBetween(0, 255) As Integer, g: Math.RandBetween(0, 255) As Integer, b: Math.RandBetween(0, 255) As Integer Do

	                    shape.Style.BackgroundBrushBackColor := New GxColor.CreateRGB(r, g, b);

	                End With;

	                shape.Style.EndUpdate;

	            End For;

	        End With;

	    End Sub UiWorkspaceObject1OnAfterPrintWorkspace;

	End Class TESTForm;


В результате выполнения примера при нажатии на кнопку будет печататься
 рабочее пространство с идентификатором WORKSPACE. После печати рабочего
 пространства цвет фигур будет изменён на случайный.


См. также:


[IUiWorkspaceEventArgs](IUiWorkspaceEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
