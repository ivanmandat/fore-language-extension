# IWorkspaceBox.DefaultMenu

IWorkspaceBox.DefaultMenu
-


# IWorkspaceBox.DefaultMenu


## Синтаксис


DefaultMenu: Boolean;


## Описание


Свойство DefaultMenu определяет
 признак наличия системного контестного меню у рабочего пространства и
 у фигур, расположенных на нем.


## Комментарии


Свойство доступно для использования, если свойству [DefaultHandlers](IWorkspaceBox.DefaultHandlers.htm)
 установлено значение True.


Если свойству DefaultMenu установить
 значение True, то будет доступно
 системное контекстное меню, реализованное в рабочем пространстве репозитория.
 При значении False контекстное
 меню отсутствует, либо доступно меню, которое задано для компонента в
 свойстве [PopupMenu](ModForms.chm::/Interface/IControl/IControl.PopupMenu.htm).


По умолчанию свойству установлено значение False.


Примечание.
 При заданном значении свойства [PopupMenu](ModForms.chm::/Interface/IControl/IControl.PopupMenu.htm)
 системное меню будет недоступно для использования.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором Button1, компонент WorkspaceBox с идентификатором
 WorkspaceBox1. Для компонента WorkspaceBox1 укажите источник данных. Пример
 является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Ui, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    WorkspaceBox1.DefaultHandlers := True;

	    WorkspaceBox1.DefaultMenu := True;

	End Sub Button1OnClick;


При нажатии на кнопку для рабочего пространства
 и его фигур будет доступно системное контекстное меню. Также для фигур
 будут выполняться те действия, которые для них определены в рабочем пространстве
 репозитория.


См. также:


[IWorkspaceBox](IWorkspaceBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
