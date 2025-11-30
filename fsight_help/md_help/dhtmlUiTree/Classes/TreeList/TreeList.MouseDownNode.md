# TreeList.MouseDownNode

TreeList.MouseDownNode
-


# TreeList.MouseDownNode


## Синтаксис


MouseDownNode: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие MouseDownNode наступает при нажатии и удержании кнопки мыши у вершины компонента.


## Пример


Для выполнения примера [создайте компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавим обработчик события MouseDownNode:


    treeListSett.MouseDownNode.add(function (sender, args) {


        treeListSett.getNodes().getItem(0).getNodes().getItem(0).collapse();


    });


После выполнения примера при нажатии и удержании кнопки мыши у вершины компонента будут свернута вершина, дочерняя по отношению к первой вершине дерева.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
