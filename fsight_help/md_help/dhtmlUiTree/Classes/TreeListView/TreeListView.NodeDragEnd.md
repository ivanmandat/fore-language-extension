# TreeListView.NodeDragEnd

TreeListView.NodeDragEnd
-


# TreeListView.NodeDragEnd


## Синтаксис


NodeDragEnd: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Action. String. Определяет метод вставки вершины. Например,
	 "InsertBefore" - вершина была вставлена перед другой;


	- Cancel. Boolean. Флаг отмены действия. При установке в обработчике
	 значения true - действие будет отменено;


	- Canceled. Boolean. Признак отмены действия;


	- Event. Object. Данные о передвижении мыши;


	- Nodes. Array of String. Массив ключей перетаскиваемых вершин;


	- Index. Number. Новый порядковый номер вершины;


	- ParentNode. String. Ключ вершины, в которую была перенесена
	 вершина;


	- StartTree. PP.Ui.SimpleTreeList. Дерево, из которого перетаскивается
	 вершина.


## Описание


Событие NodeDragEnd наступает
 перед окончанием перемещения вершины.


## Пример


Пример использования события приведен в описании свойства [TreeListView.NodeDrag](TreeListView.NodeDrag.htm).


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
