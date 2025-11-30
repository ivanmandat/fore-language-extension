# TreeList.getAllSelectedKeys

TreeList.getAllSelectedKeys
-


# TreeList.getAllSelectedKeys


## Синтаксис


getAllSelectedKeys ();


## Описание


Метод getAllSelectedKeys возвращает массив ключей, принадлежащих всем выделенным вершинам дерева.


## Пример


Для выполнения примера предполагается наличие на странице компонента [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeListSett» (см. пример события [TreeList.NodeUnHovered](TreeList.NodeUnHovered.htm)). Отметим все вершины и раскроем все отмеченные вершины:


treeList.setMultiSelect(true);


treeList.selectAll();


nodes = treeList.getAllSelectedKeys();


treeList.setExpandedByKeys(nodes);


После выполнения будут отмечены все вершины дерева. Все вершины, имеющие дочерние элементы, будут раскрыты.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
