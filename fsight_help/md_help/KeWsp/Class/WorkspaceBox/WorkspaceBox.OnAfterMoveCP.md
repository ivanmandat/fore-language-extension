# WorkspaceBox.OnAfterMoveCP

WorkspaceBox.OnAfterMoveCP
-


# WorkspaceBox.OnAfterMoveCP


## Синтаксис


Sub OnAfterMoveCP(Sender:
 Object; Args: [IAttachCPEventArgs](../../Interface/IAttachCPEventArgs/IAttachCPEventArgs.htm));


Begin


//набор операторов;


End Sub
 OnAfterMoveCP;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Метод OnAfterMoveCP реализует
 событие, происходящее после перемещения одной из конечных точек линии
 связи.


## Комментарии


Перемещение конечных точек линий связи доступно, если активным инструментом
 рабочего пространства является [указатель](Andy.chm::/Enums/WxTool.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента WorkspaceBox с наименованием WorkspaceBox1 и какого-либо
 источника данных для WorkspaceBox. Указанная процедура является обработчиком
 события OnAfterMoveCP.


Добавьте ссылки на системные сборки: Andy, Collections, ExtCtrls, Forms,
 Ui, Workspace.


	Sub WorkspaceBox1OnAfterMoveCP(Sender: Object; Args: IAttachCPEventArgs);

	Var

	    i: Integer;

	Begin

	    If Args.ShapeToAttach <> Null Then

	        i := Args.CPIndexToAttach;

	    End If;

	End Sub WorkspaceBox1OnAfterMoveCP;


При наступлении события в переменной i
 будет содержаться индекс соединительной точки объекта рабочего пространства,
 к которой была присоединена конечная точка соединительной линии.


См. также:


[WorkspaceBox](WorkspaceBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
