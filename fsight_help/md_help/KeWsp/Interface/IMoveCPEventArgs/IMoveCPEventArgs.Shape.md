# IMoveCPEventArgs.Shape

IMoveCPEventArgs.Shape
-


# IMoveCPEventArgs.Shape


## Синтаксис


Shape: [IWxShape](Andy.chm::/Interface/IWxShape/IWxShape.htm);


## Описание


Свойство Shape возвращает объект
 рабочего пространства - соединительную линию, у которой перемещается конечная
 точка.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента WorkspaceBox с наименованием WorkspaceBox1 и какого-либо
 источника данных для компонента WorkspaceBox1. Указанная процедура является
 обработчиком события [OnBeforeMoveCP](../../Class/WorkspaceBox/WorkspaceBox.OnBeforeMoveCP.htm).


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Workspace.


	Sub WorkspaceBox1OnBeforeMoveCP(Sender: Object; Args: IMoveCPEventArgs);

	    Var

	        s: String;

	    Begin

	        s := Args.Shape.Id;

	End Sub WorkspaceBox1OnBeforeMoveCP;


После выполнения события в переменной s
 будет содержаться идентификатор соединительной линии, конечную точку которой
 собираются переместить.


См. также:


[IMoveCPEventArgs](IMoveCPEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
