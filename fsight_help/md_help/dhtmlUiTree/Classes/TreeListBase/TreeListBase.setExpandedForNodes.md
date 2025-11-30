# TreeListBase.setExpandedForNodes

TreeListBase.setExpandedForNodes
-


# TreeListBase.setExpandedForNodes


## Синтаксис


setExpandedForNodes(nodes, value, fireEvents, ignoreRules);


## Параметры


nodes. Array of String. Массив
 ключей вершин;


value. Boolean. Устанавливаемое
 значение;


fireEvents. Boolean. Генерировать
 событие изменения значения. По умолчанию true;


ignoreRules. Boolean. Игнорировать
 правила. По умолчанию false.


## Описание


Метод setExpandedForNodes устанавливает
 значения экспандеров массиву вершин.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Раскроем указанные вершины
Tree.setExpandedForNodes([0, 1], true);
В результате выполнения примера будут раскрыты указанные вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
