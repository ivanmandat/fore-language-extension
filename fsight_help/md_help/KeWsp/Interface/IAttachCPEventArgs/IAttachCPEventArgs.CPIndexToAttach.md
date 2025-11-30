# IAttachCPEventArgs.CPIndexToAttach

IAttachCPEventArgs.CPIndexToAttach
-


# IAttachCPEventArgs.CPIndexToAttach


## Синтаксис


CPIndexToAttach: Integer;


## Описание


Свойство CPIndexToAttach возвращает
 индекс соединительной точки объекта рабочего пространства, к которой была
 присоединена конечная точка соединительной линии после перемещения.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента WorkspaceBox с наименованием WorkspaceBox1 и какого-либо
 источника данных для WorkspaceBox. Указанная процедура является обработчиком
 события [OnAfterMoveCP](../../Class/WorkspaceBox/WorkspaceBox.OnAfterMoveCP.htm).


Добавьте ссылки на системные сборки: Andy, Collections, ExtCtrls, Forms,
 Ui, Workspace.


	Sub WorkspaceBox1OnAfterMoveCP(Sender: Object; Args: IAttachCPEventArgs);

	    Var

	        i: Integer;

	    Begin

	        If Args.ShapeToAttach <> Null Then

	            i := Args.CPIndexToAttach;

	    End If;

	End Sub Workspace1BoxOnAfterMoveCP;


После выполнения события в переменной i
 будет содержаться индекс соединительной точки объекта рабочего пространства,
 к которой была присоединена конечная точка соединительной линии, сгенерировавшей
 событие [OnAfterMoveCP](../../Class/WorkspaceBox/WorkspaceBox.OnAfterMoveCP.htm).


См. также:


[IAttachCPEventArgs](IAttachCPEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
