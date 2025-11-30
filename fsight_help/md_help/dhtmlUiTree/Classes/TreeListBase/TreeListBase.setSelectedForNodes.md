# TreeListBase.setSelectedForNodes

TreeListBase.setSelectedForNodes
-


# TreeListBase.setSelectedForNodes


## Синтаксис


setSelectedForNodes(nodes, value, fireEvents, ignoreRules);


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


Метод setSelectedForNodes устанавливает
 выделение указанному массиву вершин.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Выделим указанные вершины
Tree.setSelectedForNodes([0, 2, 4], true);
В результате выполнения примера будут выделены указанные вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
