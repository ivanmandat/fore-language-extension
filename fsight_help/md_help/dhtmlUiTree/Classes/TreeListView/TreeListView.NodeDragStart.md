# TreeListView.NodeDragStart

TreeListView.NodeDragStart
-


# TreeListView.NodeDragStart


## Синтаксис


NodeDragStart: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Cancel. Boolean. Флаг отмены действия. При установке в обработчике
	 значения true - действие будет отменено;


	- Event. Object. Данные о передвижении мыши;


	- Nodes. Array of String. Массив ключей перетаскиваемых вершин;


	- StartNode. String. Ключ перетаскиваемой вершины.


## Описание


Событие NodeDragStart наступает
 перед началом перемещения вершины.


## Пример


Пример использования события приведен в описании свойства [TreeListView.NodeDrag](TreeListView.NodeDrag.htm).


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
