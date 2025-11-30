# TreeListBase.NodeFixedSelected

TreeListBase.NodeFixedSelected
-


# TreeListBase.NodeFixedSelected


## Синтаксис


NodeFixedSelected: Boolean;


## Описание


Свойство NodeFixedSelected определяет возможность
 выделения указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeFixedFocused(nodeKey,
 value), а возвращается с помощью метода getNodeFixedFocused(nodeKey).


Параметры:


	- nodeKey. String. Идентификатор
	 вершины;


	- value. Boolean. Значение.


Возможные варианты значения:


	- true. Выделение вершины
	 запрещено;


	- false. Выделение вершины
	 разрешено.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Запретим выделение первой вершины
Tree.setNodeFixedSelected(0, true);
В результате выполнения примера будет запрещено выделение первой вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
