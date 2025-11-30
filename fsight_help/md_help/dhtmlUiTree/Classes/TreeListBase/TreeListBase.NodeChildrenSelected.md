# TreeListBase.NodeChildrenSelected

TreeListBase.NodeChildrenSelected
-


# TreeListBase.NodeChildrenSelected


## Синтаксис


NodeChildrenSelected: Number;


## Описание


Свойство NodeChildrenSelected
 определяет количество выделенных наследников указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeChildrenSelected(nodeKey,
 value), а возвращается с помощью метода getNodeChildrenSelected(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. Number. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Определим количество выделенных наследников у вершины с индексом ноль
Tree.getNodeChildrenSelected(0);
// -> 0
В результате выполнения примера будет выведено количество выделенных
 наследников у вершины с индексом ноль.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
