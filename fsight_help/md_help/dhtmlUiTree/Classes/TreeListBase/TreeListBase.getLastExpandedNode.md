# TreeListBase.getLastExpandedNode

TreeListBase.getLastExpandedNode
-


# TreeListBase.getLastExpandedNode


## Синтаксис


getLastExpandedNode();


## Описание


Метод getLastExpandedNode возвращает
 ключ последней раскрытой вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Раскроем вершину
Tree.setNodeExpanded(0, true);
// Получим индекс последней раскрытой вершины
Tree.getLastExpandedNode()
// -> "0"
В результате выполнения примера будет получен ключ последней раскрытой
 вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
