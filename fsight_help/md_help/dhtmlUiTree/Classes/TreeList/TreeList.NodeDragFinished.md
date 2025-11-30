# TreeList.NodeDragFinished

TreeList.NodeDragFinished
-


# TreeList.NodeDragFinished


## Синтаксис


NodeDragFinished: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Event - событие мыши, Node - перетаскиваемая вершина, Canceled - определяет, было ли отменено перетаскивание вершины (true - было отменено, false - не было отменено).


## Описание


Событие NodeDragFinished наступает после помещения вершины в новую позицию.


## Комментарии


Событие наступает после события [TreeList.NodeDragEnd](TreeList.NodeDragEnd.htm).


## Пример


Пример использования события приведен в описании свойства [TreeNode.Draggable](../TreeNode/TreeNode.Draggable.htm).


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
