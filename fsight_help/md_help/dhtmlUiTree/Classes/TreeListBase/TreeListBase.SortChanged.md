# TreeListBase.SortChanged

TreeListBase.SortChanged
-


# TreeListBase.SortChanged


## Синтаксис


SortChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии:


	- Node. String. Ключ вершины;


	- Column. Number. Индекс столбца;


	- Direction. PP.Ui.TreeSortDirection. Направление сортировки;


	- Method. PP.Ui.TreeSortMethod. Метод сортировки.


## Описание


Событие SortChanged наступает
 после изменения сортировки.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим событие
Tree.SortChanged.add( function(sender, args) {
  console.log("Событие SortChanged:");
  console.log(args);
});
// Инициируем событие
Tree.setSort(0, PP.Ui.TreeSortDirection.Asc, PP.Ui.TreeSortMethod.String);
В результате выполнения примера добавлено событие SortChanged.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
