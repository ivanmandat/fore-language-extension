# ITreeControl.DropTargetNode

ITreeControl.DropTargetNode
-


# ITreeControl.DropTargetNode


## Синтаксис


DropTargetNode: [ITreeListNode](../ITreeListNode/ITreeListNode.htm);


## Описание


Свойство DropTargetNode определяет
 вершину компонента, над которой в данный момент пользователь перетаскивает
 другую вершину.


## Комментарии


Используется для настройки механизма Drag&Drop. При установке значения
 вызывает выделение вершины.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента TreeList с наименованием
 TreeList1. Для TreeList1 включена возможность использования механизма
 Drag&Drop.


	Sub TreeList1OnDragOver(Sender: Object; Args: IDragEventArgs);

	Var

	    Node: ITreeListNode;

	Begin

	    Node := TreeList1.GetItemAt(Args.Point);

	    If Node <> Null Then

	        TreeList1.DropTargetNode := Node;

	    End If;

	    Args.Effect := DragDropEffects.Move;

	End Sub TreeList1OnDragOver;


После выполнения примера при перетаскивании какой-либо вершины в компоненте
 TreeList1, вершина, над которой происходит перетаскивание, будет выделяться.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
