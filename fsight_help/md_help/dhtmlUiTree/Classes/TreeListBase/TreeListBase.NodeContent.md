# TreeListBase.NodeContent

TreeListBase.NodeContent
-


# TreeListBase.NodeContent


## Синтаксис


NodeContent: Array of String;


## Описание


Свойство NodeContent определяет
 содержимое вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeContent(nodeKey,
 value), а возвращается с помощью метода getNodeContent(nodeKey).


Параметры:


nodeKey. String. Ключ вершины;


value. Array of String. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим содержимое вершины
Tree.getNodeContent(0);
// -> ["Node0", "Node0 - Col2"]
В результате выполнения примера будет получено содержимое вершины с
 ключом 0.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
