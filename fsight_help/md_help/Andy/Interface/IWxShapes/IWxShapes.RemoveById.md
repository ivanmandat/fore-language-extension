# IWxShapes.RemoveById

IWxShapes.RemoveById
-


# IWxShapes.RemoveById


## Синтаксис


RemoveById(Id: String): Boolean;


## Параметры


Id. Идентификатор фигуры.


## Описание


Метод RemoveById осуществляет
 удаление фигуры по идентификатору и возвращает признак удачного удаления.


## Комментарии


Метод возвращает значение False при отсутствии на рабочем пространстве
 фигуры с идентификатором, переданным с помощью параметра Id.


## Пример


Для выполнения примера предполагается наличие объекта типа [рабочее
 пространство](UiWsp.chm::/2_WorkSpace/UiWsp_WorkSpace_Create.htm). Cоздайте форму, добавьте на нее кнопку
 с наименованием «Button1», компонент WorkspaceBox с наименованием «WorkspaceBox1», компонент
 UiWorkspaceObject с наименованием «UiWorkspaceObject1», укажите рабочее
 пространство в качестве объекта компонента «UiWorkspaceObject1», компонент
 «UiWorkspaceObject1» в качестве источника компонента «WorkspaceBox1» и
 значение True свойства Active компонента «UiWorkspaceObject1». На рабочем
 пространстве расположена фигура с идентификатором «Shape54».


Добавьте ссылки на системные сборки: Andy, Metabase, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    text := WorkspaceBox1.View.Workspace.Shapes.RemoveById("Shape54").ToString;

	End Sub Button1OnClick;


При нажатии на кнопку «Button1» из области компонента «WorkspaceBox1»
 будет удалена фигура с идентификатором «Shape54» и в тексте заголовка
 окна будет отображен результат удаления.


См. также:


[IWxShapes](IWxShapes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
