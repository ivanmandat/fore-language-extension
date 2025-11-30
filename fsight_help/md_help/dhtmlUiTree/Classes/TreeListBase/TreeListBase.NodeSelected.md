# TreeListBase.NodeSelected

TreeListBase.NodeSelected
-


# TreeListBase.NodeSelected


## Синтаксис


NodeSelected: Boolean;


## Описание


Свойство NodeSelected определяет
 признак выделения указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeSelected(nodeKey,
 value), а возвращается с помощью метода getNodeSelected(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. Boolean. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Определим признак выделения второй вершины
Tree.getNodeSelected(1);
// -> true
В результате выполнения примера будет определен признак выделения второй
 вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
