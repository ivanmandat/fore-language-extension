# TreeListBase.setSelectedForLevel

TreeListBase.setSelectedForLevel
-


# TreeListBase.setSelectedForLevel


## Синтаксис


setSelectedForLevel(level, value, fireEvents, ignoreRules);


## Параметры


level. Number. Уровень;


value. Boolean. Устанавливаемое
 значение;


fireEvents. Boolean. Генерировать
 событие изменения значения. По умолчанию true;


ignoreRules. Boolean. Игнорировать
 правила. По умолчанию false.


## Описание


Метод setSelectedForLevel устанавливает
 выделение всем вершинам указанного уровня.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Выделим всех потомков корневого уровня
Tree.setSelectedForLevel(0, true);
В результате выполнения примера будут выделены все вершины корневого
 уровня.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
