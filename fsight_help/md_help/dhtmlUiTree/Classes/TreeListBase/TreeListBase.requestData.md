# TreeListBase.requestData

TreeListBase.requestData
-


# TreeListBase.requestData


## Синтаксис


requestData(indexes, parent);


## Параметры


indexes. Array. Массив индексов;


Parent. Object. Родительская
 вершина.


## Описание


Метод requestData запрашивает
 динамическую подгрузку дерева.


## Комментарии


Если указана родительская вершина - индексы указываются для потомков.
 Если родитель не указан - индексы указываются для всего видимого дерева.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Загрузим первого потомка первой вершины
Tree.requestData([0], 0)
В результате выполнения примера будет инициирован запрос загрузки первого
 потомка вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
