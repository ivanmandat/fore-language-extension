# TreeListView.VisibleNodesChange

TreeListView.VisibleNodesChange
-


# TreeListView.VisibleNodesChange


## Синтаксис


VisibleNodesChange: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Nodes. Array of String. Массив ключей вершин для отображения.


## Описание


Событие VisibleNodesChange наступает
 перед отображением новых вершин.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.VisibleNodesChange.add( function(sender, args) {
  console.log("Событие VisibleNodesChange:");
  console.log(args);
});
// Инициируем событие
Tree.setNodeExpanded(0, true);
В результате выполнения примера добавлено событие VisibleNodesChange.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
