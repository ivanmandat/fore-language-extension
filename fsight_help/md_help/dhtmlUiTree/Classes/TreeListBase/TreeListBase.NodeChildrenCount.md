# TreeListBase.NodeChildrenCount

TreeListBase.NodeChildrenCount
-


# TreeListBase.NodeChildrenCount


## Синтаксис


NodeChildrenCount: Number;


## Описание


Свойство NodeChildrenCount определяет
 количество наследников указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeChildrenCount(nodeKey,
 value), а возвращается с помощью метода getNodeChildrenCount(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. Number. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Определим количество наследников у вершины с индексом ноль
Tree.getNodeChildrenCount(0);
// -> 3
В результате выполнения примера будет выведено количество наследников
 у вершины с индексом ноль.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
