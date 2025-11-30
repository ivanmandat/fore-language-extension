# TreeList.NodeClick

TreeList.NodeClick
-


# TreeList.NodeClick


## Синтаксис


NodeClick: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие NodeClick наступает при щелчке мыши по элементу списка.


## Пример


Для выполнения примера [создайте компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавим обработчик события NodeClick


treeListSett.NodeClick.add(function (sender, args)


{


  treeListSett.getNodes().getItem(0).setSelected(true);


});


После выполнения примера при щелчке мыши по элементу списка будет выделена первая вершина дерева.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
