# WorkspaceBox.OnShapeChanged

WorkspaceBox.OnShapeChanged
-


# WorkspaceBox.OnShapeChanged


## Синтаксис


Sub OnShapeChanged(Sender:
 Object; Args: [IShapeChangedEventArgs](../../Interface/IShapeChangedEventArgs/IShapeChangedEventArgs.htm));


Begin


//набор операторов;


End Sub OnShapeChanged;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnShapeChanged наступает
 после каких-либо изменений, связанных с фигурой рабочего пространства.


## Комментарии


Событие наступает при создании/удалении фигур, а также при изменении
 их параметров (изменяется текст, оформление или изображение фигуры).


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента WorkspaceBox с наименованием WorkspaceBox1 и какого-либо
 источника данных для компонента WorkspaceBox1. Указанная процедура является
 обработчиком события OnShapeChanged.


Добавьте ссылки на системные сборки: Andy, ExtCtrls, Forms, Workspace.


	Sub WorkspaceBox1OnShapeChanged(Sender: Object; Args: IShapeChangedEventArgs);

	Begin

	    Debug.WriteLine(Args.Shape.Id);

	    Debug.WriteLine(Args.ShapeOperation);

	End Sub WorkspaceBox1OnShapeChanged;


Если в компоненте происходят какие-либо изменения, связанные с фигурами,
 то в консоль среды разработки будет выведен идентификатор фигуры и действие,
 в результате которого было сгенерировано событие.


См. также:


[WorkspaceBox](WorkspaceBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
