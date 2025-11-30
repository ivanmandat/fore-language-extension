# TreeListBase.getAllExpandedNodes

TreeListBase.getAllExpandedNodes
-


# TreeListBase.getAllExpandedNodes


## Синтаксис


getAllExpandedNodes(value);


## Параметры


value. Boolean. Состояние экспандера
 искомых вершин. При значении true метод вернет вершины с развернутым экспандером,
 при значении false метод вернет вершины со свернутым экспандером/без экспандера.


## Описание


Метод getAllExpandedNodes возвращает массив
 вершин, в зависимости от статуса экспандера.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Развернем первую вершину
Tree.setNodeExpanded(0, true);
// Получим вершины с неразвернутым экспандером
Tree.getAllExpandedNodes(false);
// -> ["1", "2", "4", "5", "6", "key3", ""]
В результате выполнения примера в консоль будут выведены ключи неразвернутых
 вершин.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
