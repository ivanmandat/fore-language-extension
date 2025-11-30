# TreeListBase.NodeFixedFocused

TreeListBase.NodeFixedFocused
-


# TreeListBase.NodeFixedFocused


## Синтаксис


NodeFixedFocused: Boolean;


## Описание


Свойство NodeFixedFocused определяет возможность
 фокусирования указанной вершины.


## Комментарии


Фокус - рамка вокруг вершины, перемещаемая стрелками и/или мышкой. Выделение
 сфокусированного элемента производится нажатием клавиши ПРОБЕЛ.


Значение свойства устанавливается с помощью метода setNodeFixedFocused(nodeKey,
 value), а возвращается с помощью метода getNodeFixedFocused(nodeKey).


Параметры:


	- nodeKey. String. Идентификатор
	 вершины;


	- value. Boolean. Значение.


Возможные варианты значения:


	- true. Фокусирование
	 вершины запрещено;


	- false. Фокусирование
	 вершины разрешено.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Запретим установку фокуса на первую вершину
Tree.setNodeFixedFocused(0, true);
В результате выполнения примера первая вершина будет недоступна для
 фокусирования.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
