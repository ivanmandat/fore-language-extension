# TreeListBase.NodeFixedExpanded

TreeListBase.NodeFixedExpanded
-


# TreeListBase.NodeFixedExpanded


## Синтаксис


NodeFixedExpanded: Boolean;


## Описание


Свойство NodeFixedExpanded определяет
 возможность раскрытия/закрытия указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeFixedExpanded(nodeKey,
 value), а возвращается с помощью метода getNodeFixedExpanded(nodeKey).


Параметры:


	- nodeKey. String. Идентификатор
	 вершины;


	- value. Boolean. Значение.


Возможные варианты значения:


	- true. Раскрытие/закрытие
	 вершины запрещено;


	- false. Раскрытие/закрытиее
	 вершины разрешено.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Запретим раскрывать/закрывать первую вершину
Tree.setNodeFixedExpanded(0, true);
В результате выполнения примера будет запрещено раскрытие/закрытие вершины
 с индексом 0.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
