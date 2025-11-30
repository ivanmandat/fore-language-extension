# WorkspaceBox.OnBeforeMoveCP

WorkspaceBox.OnBeforeMoveCP
-


# WorkspaceBox.OnBeforeMoveCP


## Синтаксис


Sub OnBeforeMoveCP(Sender:
 Object; Args: [IMoveCPEventArgs](../../Interface/IMoveCPEventArgs/IMoveCPEventArgs.htm));


Begin


//набор операторов;


End Sub
 OnBeforeMoveCP;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Метод OnBeforeMoveCP реализует
 событие, происходящее перед перемещением одной из конечных точек линии
 связи.


## Комментарии


Перемещение конечных точек линий связи доступно, если активным инструментом
 рабочего пространства является [указатель](Andy.chm::/Enums/WxTool.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента WorkspaceBox с наименованием WorkspaceBox1 и какого-либо
 источника данных для WorkspaceBox. Указанная процедура является обработчиком
 события OnBeforeMoveCP.


Добавьте ссылки на системные сборки: Andy, Collections, ExtCtrls, Forms,
 Ui, Workspace.


	Sub WorkspaceBox1OnBeforeMoveCP(Sender: Object; Args: IMoveCPEventArgs);

	Begin

	    Args.Cancel := True;

	End Sub WorkspaceBox1OnBeforeMoveCP;


При наступлении события будет запрещено перемещение конечных точек линий
 связи.


См. также:


[WorkspaceBox](WorkspaceBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
