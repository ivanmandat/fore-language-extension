# IWxView.AutoScroll

IWxView.AutoScroll
-


# IWxView.AutoScroll


## Синтаксис


AutoScroll;


## Описание


Метод AutoScroll центрирует
 изображение на рабочем пространстве без изменения масштаба отображения.


## Пример


Для выполнения примера предполагается наличие объекта типа [рабочее
 пространство](UiWsp.chm::/2_WorkSpace/UiWsp_WorkSpace_Create.htm). Cоздайте форму, добавьте на нее кнопку
 с наименованием «Button1», компонент WorkspaceBox с наименованием «WorkspaceBox1», компонент
 UiWorkspaceObject с наименованием «UiWorkspaceObject1», укажите рабочее
 пространство в качестве объекта компонента «UiWorkspaceObject1», компонент
 «UiWorkspaceObject1» в качестве источника компонента «WorkspaceBox1» и
 значение True свойства Active компонента «UiWorkspaceObject1».


Добавьте ссылки на системные сборки: Andy, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    WorkspaceBox1.View.AutoScroll;

	End Sub Button1OnClick;


При нажатии на кнопку «Button1» изображение будет центрировано в области
 компонента «WorkspaceBox1».


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
