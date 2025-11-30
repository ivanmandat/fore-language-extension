# TreeList.Expand

TreeList.Expand
-


# TreeList.Expand


## Синтаксис


Expand: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Expand наступает при разворачивании вершин.


## Пример


Для выполнения примера [создайте компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett». Добавим обработчик события Expand:


treeListSett.Expand.add(function (sender, args)


{


   alert(treeListSett.getSelectedNodes().length);


});


После выполнения примера при разворачивании вершины будет выдаваться сообщение с количеством выделенных элементов.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
