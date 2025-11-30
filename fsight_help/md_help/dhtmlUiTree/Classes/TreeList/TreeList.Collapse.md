# TreeList.Collapse

TreeList.Collapse
-


# TreeList.Collapse


## Синтаксис


Collapse: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Collapse наступает при сворачивании вершин компонента.


## Пример


Для выполнения примера [создайте компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавим обработчик события Collapse:


treeListSett.Collapse.add(function (sender, args)


{


   treeListSett.setHeight(treeListSett.getFullTreeHeight());


});


После выполнения примера при сворачивании вершины для компонента будет установлена высота, равная высоте дерева (с учетом свернутой вершины).


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
