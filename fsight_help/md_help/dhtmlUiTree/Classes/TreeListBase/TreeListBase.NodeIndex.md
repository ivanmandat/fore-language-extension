# TreeListBase.NodeIndex

TreeListBase.NodeIndex
-


# TreeListBase.NodeIndex


## Синтаксис


NodeIndex: Number;


## Описание


Свойство NodeIndex определяет
 порядковый номер указанной вершины на текущем уровне.


## Комментарии


Порядковый номер у наследников начинается с 0.


Значение свойства устанавливается с помощью метода setNodeIndex(nodeKey,
 value), а возвращается с помощью метода getNodeIndex(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. Number. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Раскроем первую вершину
Tree.setNodeExpanded(0, true)
// Получим индекс потомка
Tree.getNodeIndex(4);
// -> 0
В результате выполнения примера будет выведен индекс первого потомка
 вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
