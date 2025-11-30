# TreeListBase.NodeParent

TreeListBase.NodeParent
-


# TreeListBase.NodeParent


## Синтаксис


NodeParent: String;


## Описание


Свойство NodeParent определяет
 ключ родителя указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeParent(nodeKey,
 value), а возвращается с помощью метода getNodeParent(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. String. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Определим родителя вершины с ключом 4
Tree.getNodeParent(4);
// -> 0
В результате выполнения примера будет выведен ключ родителя вершины
 с ключом 4.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
