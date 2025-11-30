# TreeList.getNodeLevel

TreeList.getNodeLevel
-


# TreeList.getNodeLevel


## Синтаксис


getNodeLevel (node: PP.Ui.[TreeNode](../TreeNode/TreeNode.htm));


## Параметры


node. [Вершина](../TreeNode/TreeNode.htm), уровень которой нужно вернуть.


## Описание


Метод getNodeLevel определяет уровень, на котором расположена указанная вершина.


## Пример


Для выполнения примера предполагается наличие на странице компонента [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeListSett» (см. пример события [TreeList.NodeUnHovered](TreeList.NodeUnHovered.htm)). Вернем уровень вершины, на которой [установлен фокус](../TreeNode/TreeNode.setFocused.htm) и выделим все вершины, находящиеся на этом уровне:


node = treeList.getFocusedNode();


level = treeListSett.getNodeLevel(node);


treeList.selectLevel(level);


После выполнения примера будут выделены все элементы уровня той вершины, на которой установлен фокус.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
