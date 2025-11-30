# IDimensionViewer.DropTargetNode

IDimensionViewer.DropTargetNode
-


# IDimensionViewer.DropTargetNode


## Синтаксис


DropTargetNode: Integer;


## Описание


Свойство DropTargetNode определяет
 вершину компонента, над которой в данный момент пользователь перетаскивает
 другую вершину.


## Комментарии


Используется для настройки механизма Drag&Drop. При установке значения
 вызывает выделение вершины.


Имеет смысл только для компонента [DimensionTree](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DimensionTree.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента DimensionTree с наименованием
 «DimensionTree1» и компонента UiDimension, являющегося источником данных
 для «DimensionTree1». Для «DimensionTree1» включена возможность использования
 механизма Drag&Drop.


	Sub DimensionTree1OnDragOver(Sender: Object; Args: IDragEventArgs);

	Var

	    Node: Integer;

	Begin

	    Node := DimensionTree1.GetItemAt(Args.Point);

	    If Node <> -1 Then

	        DimensionTree1.DropTargetNode := Node;

	    End If;

	    Args.Effect := DragDropEffects.Move;

	End Sub DimensionTree1OnDragOver;


После выполнения примера при перетаскивании какой-либо вершины в компоненте
 «DimensionTree1», вершина, над которой происходит перетаскивание, будет
 выделяться.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
