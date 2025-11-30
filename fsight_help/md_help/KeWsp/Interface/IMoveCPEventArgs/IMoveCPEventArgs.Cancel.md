# IMoveCPEventArgs.Cancel

IMoveCPEventArgs.Cancel
-


# IMoveCPEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет,
 будет ли происходить перемещение конечной точки линии связи.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента WorkspaceBox с наименованием WorkspaceBox1 и какого-либо
 источника данных для компонента WorkspaceBox1. Указанная процедура является
 обработчиком события [OnBeforeMoveCP](../../Class/WorkspaceBox/WorkspaceBox.OnBeforeMoveCP.htm).


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Workspace.


	Sub WorkspaceBox1OnBeforeMoveCP(Sender: Object; Args: IMoveCPEventArgs);

	    Begin

	        Args.Cancel := True;

	End Sub WorkspaceBox1OnBeforeMoveCP;


После выполнения события будет отменятся перемещение конечных точек
 линий связи.


См. также:


[IMoveCPEventArgs](IMoveCPEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
