# TreeListView.measureColumnContentWidth

TreeListView.measureColumnContentWidth
-


# TreeListView.measureColumnContentWidth


## Синтаксис


measureColumnContentWidth(columnIndex, fullColumn);


## Параметры


columnIndex. Number. Индекс
 столбца;


fullColumn. Boolean. Подсчет
 ширины для всего столбца, с учетом отсутствующих вершин.


## Описание


Метод measureColumnContentWidth
 возвращает содержимое столбца.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим ширину столбцов
Tree.measureColumnContentWidth(0);
// -> 89
В результате выполнения примера была получена ширина первого столбца.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
