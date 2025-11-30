# TreeNode.Draggable

TreeNode.Draggable
-


# TreeNode.Draggable


## Синтаксис


Draggable: Boolean


## Описание


Свойство Draggable определяет возможность перетаскивать вершину.


## Комментарии


Если для свойства установлено значение true, значит вершину можно перетаскивать. По умолчанию установлено значение false.


## Пример


Для выполнения примера создайте компонент [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeListSett», как показано на странице «[Пример создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)». Настроим для вершины с наименованием «South Africa» возможность перетаскивания и добавим обработчики событий [TreeList.NodeDrag](../TreeList/TreeList.NodeDrag.htm), [TreeList.NodeDragEnd](../TreeList/TreeList.NodeDragEnd.htm), [TreeList.NodeDragFinished](../TreeList/TreeList.NodeDragFinished.htm) и [TreeList.NodeDragStart](../TreeList/TreeList.NodeDragStart.htm):


var node = treeListSett.getNodes().getItem(0).getNodes().getItem(0).getNodes().getItem(0);
node.setDraggable(true);
treeListSett.NodeDrag.add(function (sender, args)
{
    console.log("NodeDrag")
});
treeListSett.NodeDragEnd.add(function (sender, args)
{
    console.log("NodeDragEnd")
});
treeListSett.NodeDragStart.add(function (sender, args)
{
    console.log("NodeDragStart")
});
treeListSett.NodeDragFinished.add(function (sender, args)
{
    console.log("NodeDragFinished")
});

После выполнения примера для вершины с наименованием «South Africa» будет доступна возможность перетаскивания. При перетаскивании вершины в консоль браузера будут выдаваться сообщения с названиями происходящих событий.


См. также:


[TreeNode](TreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
