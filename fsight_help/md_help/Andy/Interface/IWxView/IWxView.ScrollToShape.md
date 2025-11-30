# IWxView.ScrollToShape

IWxView.ScrollToShape
-


# IWxView.ScrollToShape


## Синтаксис


		ScrollToShape(Shape: [IWxShape](../IWxShape/IWxShape.htm));


## Параметры


Shape. Фигура
 рабочего пространства.


## Описание


Метод ScrollToShape центрирует
 изображение рабочего пространства относительно указанной фигуры.


## Пример


Для выполнения примера предполагается наличие объекта типа [рабочее
 пространство](UiWsp.chm::/2_WorkSpace/UiWsp_WorkSpace_Create.htm), содержащего три фигуры. Cоздайте форму,
 добавьте на нее кнопку с наименованием «Button1», компонент WorkspaceBox
 с наименованием «WorkspaceBox1», компонент UiWorkspaceObject с наименованием
 «UiWorkspaceObject1», укажите рабочее пространство в качестве объекта
 компонента «UiWorkspaceObject1», компонент «UiWorkspaceObject1» в качестве
 источника компонента «WorkspaceBox1» и значение True свойства Active компонента
 «UiWorkspaceObject1».


Добавьте ссылки на системные сборки: Andy, Metabase, Workspace.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Begin

		  WorkspaceBox1.View.ScrollToShape(WorkspaceBox1.View.Workspace.Shapes.Item(3));

		End Sub Button1OnClick;


При нажатии на кнопку «Button1» изображение
 рабочего пространства будет центрировано относительно фигуры с индексом
 «3».


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
