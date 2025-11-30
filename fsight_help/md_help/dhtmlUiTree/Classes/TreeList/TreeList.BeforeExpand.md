# TreeList.BeforeExpand

TreeList.BeforeExpand
-


# TreeList.BeforeExpand


## Синтаксис


BeforeExpand: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие BeforeExpand наступает перед разворачиванием вершины дерева.


## Пример


Для выполнения примера [создайте компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавим обработчик события BeforeExpand:


treeListSett.BeforeExpand.add(function (sender, args)


{


  treeListSett.selectAll();


});


После выполнения примера при нажатии на знак ![](../../Components/TreeList/treelist9.gif) (перед разворачиванием вершины) будут выделены все вершины дерева.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
