# TreeListBase.setSelectedForAll

TreeListBase.setSelectedForAll
-


# TreeListBase.setSelectedForAll


## Синтаксис


setSelectedForAll(value, fireEvents, ignoreRules);


## Параметры


value. Boolean. Устанавливаемое
 значение;


fireEvents. Boolean. Генерировать
 событие изменения отметки. По умолчанию true;


ignoreRules. Boolean. Игнорировать
 правила отметки. По умолчанию false.


## Описание


Метод setSelectedForAll устанавливает
 выделение всем вершинам.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Выделим все вершины
Tree.setSelectedForAll(true);
В результате выполнения примера будут выделены все вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
