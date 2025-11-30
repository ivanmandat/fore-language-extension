# TreeListBase.setSelectedForChildren

TreeListBase.setSelectedForChildren
-


# TreeListBase.setSelectedForChildren


## Синтаксис


setSelectedForChildren(nodeKey, value, fireEvents,
 ignoreRules);


## Параметры


nodeKey. String. Ключ вершины;


value. Boolean. Устанавливаемое
 значение;


fireEvents. Boolean. Генерировать
 событие изменения отметки. По умолчанию true;


ignoreRules. Boolean. Игнорировать
 правила отметки. По умолчанию false.


## Описание


Метод setSelectedForChildren
 устанавливает выделение всем потомкам указанной вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Выделим всех потомков первой вершины
Tree.setSelectedForChildren(0, true);
В результате выполнения примера будут выделены все потомки первой вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
