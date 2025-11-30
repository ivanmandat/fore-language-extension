# TreeListView.VisibleNodesChanged

TreeListView.VisibleNodesChanged
-


# TreeListView.VisibleNodesChanged


## Синтаксис


VisibleNodesChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Nodes. Array of String. Массив ключей вершин для отображения;


	- Changed. Array of String. Массив ключей вершин, для которых
	 был изменен признак отображения.


## Описание


Событие VisibleNodesChanged
 наступает после отображения новых вершин.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.VisibleNodesChanged.add( function(sender, args) {
  console.log("Событие VisibleNodesChanged:");
  console.log(args);
});
// Инициируем событие
Tree.setNodeExpanded(0, true);
В результате выполнения примера добавлено событие VisibleNodesChanged.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
