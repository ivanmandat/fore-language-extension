# TreeListView.scrollToNode

TreeListView.scrollToNode
-


# TreeListView.scrollToNode


## Синтаксис


scrollToNode(node, bottom);


## Параметры


node. String. Ключ вершины;


bottom. Number| Boolean. Положение
 вершины в видимой области дерева. При значениях 0 | false - вершина будет
 сверху. При значении 1 | true - вершина будет снизу. При промежуточных
 значениях соответственное промежуточное положение.


## Описание


Метод scrollToNode прокручивает
 дерево до вершины по ключу.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Прокрутим дерево до вершины с ключом 0
Tree.scrollToNode(0, 1)
В результате выполнения примера дерево было прокручено до вершины с
 ключом 0.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
