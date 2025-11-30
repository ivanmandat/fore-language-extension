# TreeListBase.getNodeChildren

TreeListBase.getNodeChildren
-


# TreeListBase.getNodeChildren


## Синтаксис


getNodeChildren(nodeKey);


## Параметры


nodeKey. Number. Ключ вершины.


## Описание


Метод getNodeChildren возвращает
 массив ключей потомков указанной вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим ключи потомков первой вершины
Tree.getNodeChildren(0);
// -> ["4", "5", "6"]
В результате выполнения примера будут получены ключи потомков первой
 вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
