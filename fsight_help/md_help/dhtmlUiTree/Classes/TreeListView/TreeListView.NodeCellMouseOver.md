# TreeListView.NodeCellMouseOver

TreeListView.NodeCellMouseOver
-


# TreeListView.NodeCellMouseOver


## Синтаксис


NodeCellMouseOver: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины;


	- Column. Number. Номер столбца.


## Описание


Событие NodeCellMouseOver наступает
 при наведении мышью на ячейку вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.NodeCellMouseOver.add( function(sender, args) {
  console.log("Событие NodeCellMouseOver:");
  console.log(args);
});
// Инициируем событие наведением мыши на вершину
В результате выполнения примера добавлено событие NodeCellMouseOver.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
