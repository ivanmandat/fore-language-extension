# IWorkspaceBox.Source

IWorkspaceBox.Source
-


# IWorkspaceBox.Source


## Синтаксис


Source: [IWorkspaceSource](../IWorkspaceSource/IWorkspaceSource.htm);


## Описание


Свойство Source определяет источник
 данных для компонента.


## Комментарии


В качестве значения свойства может быть указан какой-либо компонент
 [UiWorkspace](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiWorkspace.htm)
 или [UiWorkspaceObject](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiWorkspaceObject.htm),
 приведенный к интерфейсу [IWorkspaceSource](../IWorkspaceSource/IWorkspaceSource.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox
 с наименованием WorkspaceBox1 и компонента UiWorkspaceObject с наименованием
 UiWorkspaceObject2.


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Ui, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    WorkspaceBox1.Source := UiWorkspaceObject2 As IWorkspaceSource;

	    UiWorkspaceObject2.Active := True;

	End Sub Button1OnClick;


При нажатии на кнопку в качестве источника данных для компонента WorkspaceBox1
 будет установлен компонент UiWorkspaceObject2.


См. также:


[IWorkspaceBox](IWorkspaceBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
