# TreeListBase.moveNode

TreeListBase.moveNode
-


# TreeListBase.moveNode


## Синтаксис


moveNode(nodeKey, parent, index);


## Параметры


nodeKey. String. Ключ вершины;


parent. String. Ключ родительской
 вершины, куда будет совершен перенос;


index. String. Новый индекс
 вершины.


## Описание


Метод moveNode перемещает указанную
 вершину.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Переместим вершину
Tree.moveNode(1, 2);
В результате выполнения примера вторая вершина будет перенесена к новому
 родителю.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
