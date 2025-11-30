# IWxMetabaseObject.ShowDependents

IWxMetabaseObject.ShowDependents
-


# IWxMetabaseObject.ShowDependents


## Синтаксис


ShowDependents(View: [IWxView](Andy.chm::/Interface/IWxView/IWxView.htm);
 [Recursive: Boolean = false]);


## Параметры


View. Параметр определяет рабочее
 пространство, на котором отображаются точки выделения фигур объектов,
 которые зависят от данного объекта;


Recursive. Параметр определяет,
 будет ли отображаться всё дерево объектов, которые зависят от данного
 объекта. По умолчанию значение параметра - False, при котором на рабочем
 пространстве отображаются только объекты первого уровня иерархии.


## Описание


Метод ShowDependents отображает
 на рабочем пространстве объекты, которые зависят от данного объекта.


## Комментарии


Объекты, которые зависят от данного объекта, отображаются на рабочем
 пространстве, на котором отображается непосредственно сам объект. Точки
 выделения фигур объектов отображаются на рабочем пространстве, передаваемом
 с помощью параметра View.


## Пример


Для выполнения примера предполагается наличие объекта типа [рабочее
 пространство](UiWsp.chm::/2_WorkSpace/UiWsp_WorkSpace_Create.htm). Cоздайте форму, добавьте на нее кнопку
 с наименованием Button1, компонент WorkspaceBox с наименованием WorkspaceBox1, компонент
 UiWorkspaceObject с наименованием UiWorkspaceObject1, укажите рабочее
 пространство в качестве объекта компонента UiWorkspaceObject1, компонент
 UiWorkspaceObject1 в качестве источника компонента WorkspaceBox1 и значение
 True свойства Active компонента UiWorkspaceObject1. Добавьте компонент
 CheckBox с наименованием «CheckBox1». Добавьте ссылки на системные сборки:
  Andy, ExtCtrls, Forms, Ui, Workspace, Collections, Metabase.


	Class OBJ48413Form: Form

	    UiWorkspaceObject1: UiWorkspaceObject;

	    WorkspaceBox1: WorkspaceBox;

	    Button1: Button;

	    CheckBox1: CheckBox;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        (WorkspaceBox1.View.Workspace.Shapes.Item(3).Extension As IWxMetabaseObject).ShowDependents(WorkspaceBox1.View, CheckBox1.Checked);

	    End Sub Button1OnClick;


	End Class OBJ48413Form;


При установленном флажке CheckBox1 при нажатии на кнопку Button1 в
 области компонента WorkspaceBox1 будет отображено всё дерево объектов,
 которые зависят от объекта с индексом «3», при снятом флажке CheckBox1
 будут отображены объекты первого уровня иерархии.


См. также:


[IWxMetabaseObject](IWxMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
