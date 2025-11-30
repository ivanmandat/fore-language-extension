# TreeListBase.NodeVisible

TreeListBase.NodeVisible
-


# TreeListBase.NodeVisible


## Синтаксис


NodeVisible: Boolean;


## Описание


Свойство NodeVisible определяет
 признак видимости указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeVisible(nodeKey,
 value), а возвращается с помощью метода getNodeVisible(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. Boolean. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Определим признак видимости второй вершины
Tree.setNodeVisible(1, false);
В результате выполнения примера будет спрятана вторая вершина.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
