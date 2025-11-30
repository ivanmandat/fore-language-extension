# TreeListBase.setExpandedForNodeAncestors

TreeListBase.setExpandedForNodeAncestors
-


# TreeListBase.setExpandedForNodeAncestors


## Синтаксис


setExpandedForNodeAncestors(nodeKey, value, fireEvents,
 ignoreRules);


## Параметры


noeKey. String. Ключ вершины;


value. Boolean. Устанавливаемое
 значение;


fireEvents. Boolean. Генерировать
 событие изменения значения. По умолчанию true;


ignoreRules. Boolean. Игнорировать
 правила. По умолчанию false.


## Описание


Метод setExpandedForNodeAncestors
 устанавливает значения экспандеров каждому предку указанной вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Раскроем все вершины предкам вершины с ключом 4
Tree.setExpandedForNodeAncestors(4, true);
В результате выполнения примера будут раскрыты все вершины предков вершины
 с ключом 4.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
