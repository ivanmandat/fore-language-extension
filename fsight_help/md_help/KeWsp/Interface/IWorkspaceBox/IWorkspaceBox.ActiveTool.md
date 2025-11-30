# IWorkspaceBox.ActiveTool

IWorkspaceBox.ActiveTool
-


# IWorkspaceBox.ActiveTool


## Синтаксис


ActiveTool: [WxTool](Andy.chm::/Enums/WxTool.htm);


## Описание


Свойство ActivTool определяет
 активный инструмент рабочего пространства.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для компонента WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Ui, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    WorkspaceBox1.ActiveTool := WxTool.Hand;

	End Sub Button1OnClick;


При нажатии на кнопку в качестве активного инструмента будет включен
 указатель в виде руки, позволяющая изменять видимую область рабочего пространства.


См. также:


[IWorkspaceBox](IWorkspaceBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
