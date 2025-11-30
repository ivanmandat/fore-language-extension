# ITreeListNode.IsDropTarget

ITreeListNode.IsDropTarget
-


# ITreeListNode.IsDropTarget


## Синтаксис


IsDropTarget: Boolean;


## Описание


Свойство IsDropTarget определяет
 признак прохождения в текущий момент над данной вершиной какой-либо другой
 вершины.


## Комментарии


Используется для настройки механизма Drag&Drop. При установке значения
 True текущая вершина будет выделена.


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

        Node.IsDropTarget := True;

    End If;

    Args.Effect := DragDropEffects.Move;

End Sub TreeList1OnDragOver;


После выполнения примера при перетаскивании какой-либо вершины в компоненте
 TreeList1, вершина, над которой происходит перетаскивание, будет выделяться.


См. также:


[ITreeListNode](ITreeListNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
