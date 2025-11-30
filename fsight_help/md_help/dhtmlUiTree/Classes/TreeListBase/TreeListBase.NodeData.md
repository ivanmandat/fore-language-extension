# TreeListBase.NodeData

TreeListBase.NodeData
-


# TreeListBase.NodeData


## Синтаксис


NodeData: Any;


## Описание


Свойство NodeData определяет
 пользовательские данные указанной вершины.


## Комментарии


Пользовательские данные не используются во внутренней реализации.


Значение свойства устанавливается с помощью метода setNodeData(nodeKey,
 value), а возвращается с помощью метода getNodeData(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. Any. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Установим пользовательские данные
Tree.setNodeData(0, "Первая вершина");
В результате выполнения примера вершине с индексом ноль будет присвоено
 пользовательское строковое значение.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
