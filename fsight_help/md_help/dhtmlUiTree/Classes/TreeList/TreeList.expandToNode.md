# TreeList.expandToNode

TreeList.expandToNode
-


# TreeList.expandToNode


## Синтаксис


expandToNode (treeNode);


## Параметры


treeNode. Вершина дерева, до которой необходимо раскрыть все вершины дерева.


## Описание


Метод expandToNode раскрывает все вершины вплоть до указанной.


## Пример


Для выполнения примера предполагается наличие на странице компонента [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeListSett» (см. пример для события [TreeList.NodeUnHovered](TreeList.NodeUnHovered.htm)). Развернем дерево до вершины с ключом n3, и установим для данной вершины режим редактирования в первом столбце:


var node = treeList.getNodeByKey("n3");


treeList.expandToNode(node);


treeList.startEditing(node, 0);


После выполнения примера компонент будет выглядеть следующим образом:


![](expandToNode.gif)


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
