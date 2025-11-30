# TreeListBase.setExpandedForAll

TreeListBase.setExpandedForAll
-


# TreeListBase.setExpandedForAll


## Синтаксис


setExpandedForAll(value, fireEvents, ignoreRules);


## Параметры


value. Boolean. Устанавливаемое
 значение;


fireEvents. Boolean. Генерировать
 событие изменения значения. По умолчанию true;


ignoreRules. Boolean. Игнорировать
 правила. По умолчанию false.


## Описание


Метод setExpandedForAll устанавливает
 значения экспандеров всем вершинам.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Раскроем все вершины
Tree.setExpandedForAll(true);
В результате выполнения примера будут раскрыты все вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
