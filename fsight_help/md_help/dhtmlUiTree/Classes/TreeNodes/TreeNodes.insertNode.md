# TreeNodes.insertNode

TreeNodes.insertNode
-


# TreeNodes.insertNode


## Синтаксис


insertNode (node, beforeNode)


## Параметры


node. Вершина, которую нужно вставить в дерево;


beforeNode. Вершина, перед которой нужно вставить новую.


## Описание


Метод insertNode вставляет вершину в дерево.


## Пример


Для выполнения примера предполагается наличие на странице компонента [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeList» (см. «[Пример создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Добавим новую вершину перед первой вершиной дерева:


treeList.getNodes().insertNode(new PP.Ui.TreeNode(


{


    Columns: ["1", "2", "3"],


    Text: "New Node"


}), treeList.getNodes().getItem(0))


После выполнения примера перед первой вершиной дерева будет добавлена вершина с названием «New Node».


См. также:


[TreeNodes](TreeNodes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
