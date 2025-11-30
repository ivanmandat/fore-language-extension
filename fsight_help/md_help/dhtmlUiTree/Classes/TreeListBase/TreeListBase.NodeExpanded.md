# TreeListBase.NodeExpanded

TreeListBase.NodeExpanded
-


# TreeListBase.NodeExpanded


## Синтаксис


NodeExpanded: Boolean;


## Описание


Свойство NodeExpanded определяет
 признак раскрытия указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeExpanded(nodeKey,
 value, fireEvents, ignoreRules), а возвращается с помощью метода
 getNodeExpanded(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. Boolean. Значение;


fireEvents. Boolean. Определяет,
 необходимо ли генерировать событие раскрытия вершины, например [TreeListBase.ExpansionChanging](TreeListBase.ExpansionChanging.htm)
 / [TreeListBase.ExpansionChanged](TreeListBase.ExpansionChanged.htm);


ignoreRules. Boolean. Определяет,
 следует ли игнорировать правила раскрытия вершин, например [TreeListBase.NodeFixedExpanded](TreeListBase.NodeFixedExpanded.htm).


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Раскроем первую вершину
Tree.setNodeExpanded(0, true, false. true);
В результате выполнения примера будет запрещено редактирование вершины
 с индексом 0, без инициализации события редактирования, игнорируя правила,
 запрещающие раскрытие вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
