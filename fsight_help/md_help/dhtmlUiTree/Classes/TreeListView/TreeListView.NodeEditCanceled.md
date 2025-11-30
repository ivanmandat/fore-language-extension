# TreeListView.NodeEditCanceled

TreeListView.NodeEditCanceled
-


# TreeListView.NodeEditCanceled


## Синтаксис


NodeEditCanceled: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины;


	- Column. Number. Индекс столбца.


## Описание


Событие NodeEditCanceled наступает
 при отмене редактирования ячейки.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Включим режим редактирования
Tree.setEnableEdit(true);
// Зададим события
Tree.NodeEditCanceled.add( function(sender, args) {
  console.log("Событие NodeEditCanceled:");
  console.log(args);
});
Tree.NodeEdited.add( function(sender, args) {
  console.log("Событие NodeEdited:");
  console.log(args);
});
Tree.NodeEditing.add( function(sender, args) {
  console.log("Событие NodeEditing:");
  console.log(args);
});
// Инициируем события отредактируя ячейку
В результате выполнения примера добавлены события редактирования.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
