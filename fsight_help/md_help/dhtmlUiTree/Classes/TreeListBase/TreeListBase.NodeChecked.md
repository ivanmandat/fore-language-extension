# TreeListBase.NodeChecked

TreeListBase.NodeChecked
-


# TreeListBase.NodeChecked


## Синтаксис


NodeChecked: Boolean;


## Описание


Свойство NodeChecked определяет
 признак отметки флажка указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeChecked(nodeKey,
 value), а возвращается с помощью метода getNodeChecked(nodeKey).


Параметры:


nodeKey. String. Ключ вершины;


value. Boolean. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Отметим вершину с ключом 2
Tree.setNodeChecked(2, true);
В результате выполнения примера будет выделена вторая вершина.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
