# IMoveCPEventArgs.CPIndex

IMoveCPEventArgs.CPIndex
-


# IMoveCPEventArgs.CPIndex


## Синтаксис


CPIndex: Integer;


## Описание


Свойство CPIndex возвращает
 индекс конечной точки соединительной линии, которую необходимо переместить.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента WorkspaceBox с наименованием WorkspaceBox1 и какого-либо
 источника данных для компонента WorkspaceBox1. Указанная процедура является
 обработчиком события [OnBeforeMoveCP](../../Class/WorkspaceBox/WorkspaceBox.OnBeforeMoveCP.htm).


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Workspace.


	Sub WorkspaceBox1OnBeforeMoveCP(Sender: Object; Args: IMoveCPEventArgs);

	    Var

	        i: Integer;

	    Begin

	        i := Args.CPIndex;

	End Sub WorkspaceBox1OnBeforeMoveCP;


После выполнения события в переменной i
 будет содержаться индекс конечной точки линий связи, которую собираются
 переместить.


См. также:


[IMoveCPEventArgs](IMoveCPEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
