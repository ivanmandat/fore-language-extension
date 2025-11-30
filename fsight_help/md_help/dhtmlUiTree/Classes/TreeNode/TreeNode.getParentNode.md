# TreeNode.getParentNode

TreeNode.getParentNode
-


# TreeNode.getParentNode


## Синтаксис


getParentNode ();


## Описание


Метод getParentNode возвращает родительскую вершину.


## Пример


Для выполнения примера предполагается наличие на странице компонента [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeList» (см. «[Пример создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Добавим обработчик события [TreeList.NodeDblClick](../TreeList/TreeList.NodeDblClick.htm):


treeList.NodeDblClick.add(function (sender, args)
    {

        var n = args.Node.getParentNode();
        if (n == null)
            n = sender;
        n.getNodes().deleteNode(args.Node);
    });

После выполнения примера при двойном щелчке по вершине дерева на любом уровне иерархии эта вершина будет удалена.


См. также:


[TreeNode](TreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
