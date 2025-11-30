# TreeListView.scrollToPosition

TreeListView.scrollToPosition
-


# TreeListView.scrollToPosition


## Синтаксис


scrollToPosition(position, bottom);


## Параметры


position. Number. Порядковый
 номер вершины;


bottom. Number| Boolean. Положение
 вершины в видимой области дерева. При значениях 0 | false - вершина будет
 сверху. При значении 1 | true - вершина будет снизу. При промежуточных
 значениях соответственное промежуточное положение.


## Описание


Метод scrollToPosition прокручивает
 дерево до вершины по порядковому номеру.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Прокрутим дерево до первой в списке вершины
Tree.scrollToPosition(0, 1)
В результате выполнения примера дерево было прокручено до первой в списке
 вершины.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
