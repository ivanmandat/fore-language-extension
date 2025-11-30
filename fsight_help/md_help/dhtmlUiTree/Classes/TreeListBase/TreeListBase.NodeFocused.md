# TreeListBase.NodeFocused

TreeListBase.NodeFocused
-


# TreeListBase.NodeFocused


## Синтаксис


NodeFocused: Boolean;


## Описание


Свойство NodeFocused определяет
 признак выбора в фокус указанной вершины.


## Комментарии


Фокус - рамка вокруг вершины, перемещаемая стрелками и/или мышкой. Выделение
 сфокусированного элемента производится нажатием клавиши ПРОБЕЛ.


Значение свойства устанавливается с помощью метода setNodeFocused(nodeKey,
 value), а возвращается с помощью метода getNodeFocused(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. Boolean. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Выберем в фокус первую вершину
Tree.setNodeFocused(0, true);
В результате выполнения примера первая вершина будет сфокусирована.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
