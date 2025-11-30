# TreeListView.NodeCellMouseOut

TreeListView.NodeCellMouseOut
-


# TreeListView.NodeCellMouseOut


## Синтаксис


NodeCellMouseOut: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины;


	- Column. Number. Номер столбца.


## Описание


Событие NodeCellMouseOut наступает
 при уводе мыши с ячейки вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.NodeCellMouseOut.add( function(sender, args) {
  console.log("Событие NodeCellMouseOut:");
  console.log(args);
});
// Инициируем событие наведя мышью на ячейку вершины
В результате выполнения примера добавлено событие NodeCellMouseOut.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
