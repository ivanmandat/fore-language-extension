# TreeListView.NodeDrag

TreeListView.NodeDrag
-


# TreeListView.NodeDrag


## Синтаксис


NodeDrag: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- After. String. Ключ вершины, после которой вставится переносимая
	 вершина;


	- Before. String. Ключ вершины, перед которой вставится переносимая
	 вершина;


	- CanInsertAfter. Boolean. Возможность вставки после;


	- CanInsertBefore. Boolean. Возможность вставки перед;


	- CanTakeChildren. Boolean. Вершина, в которую будет произведена
	 вставка может иметь наследников;


	- Event. Object. Данные о передвижении мыши;


	- Nodes. Array of String. Массив ключей перетаскиваемых вершин;


	- StartTree. PP.Ui.SimpleTreeList. Дерево, из которого перетаскивается
	 вершина;


	- TargetNode. String. Ключ вершины, на которую наведен курсор
	 мыши;


	- TargetNodeParent. String. Ключ предка вершины, на которую наведен
	 курсор мыши.


## Описание


Событие NodeDrag наступает при
 перемещении перетаскиваемой вершины по элементам дерева.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Включим режим перетаскивания
Tree.setEnableDragAndDrop(true);
// Зададим события
Tree.NodeDragStart.add( function(sender, args) {
  console.log("Событие NodeDragStart:");
  console.log(args);
});
Tree.NodeDrag.add( function(sender, args) {
  console.log("Событие NodeDrag:");
  console.log(args);
});
Tree.NodeDragEnd.add( function(sender, args) {
  console.log("Событие NodeDragEnd:");
  console.log(args);
});
Tree.NodeDragFinished.add( function(sender, args) {
  console.log("Событие NodeDragFinished:");
  console.log(args);
});
// Инициируем события перенеся вершину в произвольное место
В результате выполнения примера добавлены события перемещения.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
