# IAttachCPEventArgs.ShapeToAttach

IAttachCPEventArgs.ShapeToAttach
-


# IAttachCPEventArgs.ShapeToAttach


## Синтаксис


ShapeToAttach: [IWxShape](Andy.chm::/Interface/IWxShape/IWxShape.htm);


## Описание


Свойство ShapeToAttach возвращает
 объект рабочего пространства, к соединительной точке которого была присоединена
 конечная точка линии связи.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента WorkspaceBox с наименованием WorkspaceBox1 и какого-либо
 источника данных для WorkspaceBox. Указанная процедура является обработчиком
 события [OnAfterMoveCP](../../Class/WorkspaceBox/WorkspaceBox.OnAfterMoveCP.htm).


Добавьте ссылки на системные сборки: Andy, Collections, ExtCtrls, Forms,
 Ui, Workspace.


	Sub WorkspaceBox1OnAfterMoveCP(Sender: Object; Args: IAttachCPEventArgs);

	    Var

	        s: String;

	    Begin

	        If Args.ShapeToAttach <> Null Then

	            s := Args.ShapeToAttach.Id;

	    End If;

	End Sub WorkspaceBox1OnAfterMoveCP;


После выполнения события в переменной s будет содержаться идентификатор
 объекта рабочего пространства, к соединительной точке которого была присоединена
 конечная точка соединительной линии, сгенерировавшей событие [OnAfterMoveCP](../../Class/WorkspaceBox/WorkspaceBox.OnAfterMoveCP.htm).


См. также:


[IAttachCPEventArgs](IAttachCPEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
