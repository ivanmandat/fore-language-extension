# IUiCommandExecutionContext.Data

IUiCommandExecutionContext.Data
-


# IUiCommandExecutionContext.Data


## Синтаксис


Data: Variant;


## Описание


Свойство Data определяет данные,
 необходимые для выполнения команды.


В качестве значения свойства могут передаваться экземпляры объектов,
 ссылки на файлы, массивы параметров и т.д. Список параметров для конкретных
 команд указан в примерах метода [Execute](../IUiCommandTarget/IUiCommandTarget.Execute.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkspaceBox с наименованием
 «WorkspaceBox1» и компонента UiWorkspaceObject, являющегося источником
 данных для компонента «WorkspaceBox1».


Добавьте ссылки на системные сборки: Forms, UI, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Target: IUiCommandTarget;

	        Context: IUiCommandExecutionContext;

	    Begin

	        Target := WinApplication.Instance.GetPluginTarget("Wsp");

	        Context := Target.CreateExecutionContext;

	        Context.Data := WorkspaceBox1.View;

	        Target.Execute("ShowStyleDialog", Context);

	End Sub Button1OnClick;


При выделении объекта рабочего пространства и при нажатии на кнопку
 будет выведен диалог настройки формата выделенного объекта.


См. также:


[IUiCommandExecutionContext](IUiCommandExecutionContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
