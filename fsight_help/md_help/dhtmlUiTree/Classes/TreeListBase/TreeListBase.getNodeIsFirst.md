# TreeListBase.getNodeIsFirst

TreeListBase.getNodeIsFirst
-


# TreeListBase.getNodeIsFirst


## Синтаксис


getNodeIsFirst(nodeKey);


## Параметры


nodeKey. Number. Ключ вершины.


## Описание


Метод getNodeIsFirst возвращает
 признак того, что указанная вершина первая в списке.


## Комментарии


Первый потомок также будет считаться «первой вершиной».


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим признак нахождения на первом месте
Tree.getNodeIsFirst(2);
// -> false
В результате выполнения примера будет получен признак нахождения на
 первом месте вершины с ключом 2.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
