# TreeList.getAllExpandedKeys

TreeList.getAllExpandedKeys
-


# TreeList.getAllExpandedKeys


## Синтаксис


getAllExpandedKeys ();


## Описание


Метод getAllExpandedKeys возвращает
 массив ключей, принадлежащих всем раскрытым вершинам дерева.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeList](../../Components/TreeList/TreeList.htm) с наименованием
 «treeListSett» (см. пример события [TreeList.NodeUnHovered](TreeList.NodeUnHovered.htm)).
 Раскроем все вершины и установим для раскрытых вершин отметку:


treeList.setMultiSelect(true);


treeList.expandAll();


nodes = treeList.getAllExpandedKeys();


treeList.setSelectedByKeys(nodes);


После выполнения примера будут раскрыты и отмечены все вершины, имеющие
 дочерние элементы.


 См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
