# TreeList.BeforeCollapse

TreeList.BeforeCollapse
-


# TreeList.BeforeCollapse


## Синтаксис


BeforeCollapse: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие BeforeCollapse наступает перед сворачиванием вершины дерева.


## Пример


Для выполнения примера [создайте компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавим обработчик события BeforeCollapse:


treeListSett.BeforeCollapse.add(function (sender, args)


{


  treeListSett.deSelectAll();


});


После выполнения примера при нажатии на знак ![](../../Components/TreeList/treelist10.gif) (перед сворачиванием вершины) будет снята отметка с ранее выделенных элементов.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
