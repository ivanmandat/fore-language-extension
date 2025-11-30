# IWxShapes.ClearAll

IWxShapes.ClearAll
-


# IWxShapes.ClearAll


## Синтаксис


ClearAll;


## Описание


Метод ClearAll удаляет все фигуры
 с рабочего пространства.


## Пример


Для выполнения примера предполагается наличие объекта типа рабочего
 пространства. Cоздайте форму, добавьте на нее кнопку с наименованием Button1,
 компонент WorkspaceBox с наименованием WorkspaceBox1, компонент UiWorkspaceObject
 с наименованием UiWorkspaceObject1, укажите рабочее пространство в качестве
 объекта компонента UiWorkspaceObject1, компонент UiWorkspaceObject1 в
 качестве источника компонента WorkspaceBox1 и значение True свойства Active
 компонента UiWorkspaceObject1.


Добавьте ссылки на системные сборки: Andy, Metabase, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    WorkspaceBox1.View.Workspace.Shapes.ClearAll;

	End Sub Button1OnClick;


При нажатии на кнопку из области компонента WorkspaceBox1 будут удалены
 все фигуры.


См. также:


[IWxShapes](IWxShapes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
