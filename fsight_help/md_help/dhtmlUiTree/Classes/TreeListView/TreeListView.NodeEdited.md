# TreeListView.NodeEdited

TreeListView.NodeEdited
-


# TreeListView.NodeEdited


## Синтаксис


NodeEdited: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины;


	- Column. Number. Индекс столбца;


	- ColumnContent. String. Новое содержимое ячейки;


	- OldColumnContent. String. Старое содержимое ячейки.


## Описание


Событие NodeEdited наступает
 после окончания редактирования ячейки.


## Пример


Пример использования события приведен в описании события [TreeListView.NodeEditCanceled](TreeListView.NodeEditCanceled.htm).


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
