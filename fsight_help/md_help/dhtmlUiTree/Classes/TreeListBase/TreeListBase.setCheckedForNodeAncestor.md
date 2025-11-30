# TreeListBase.setCheckedForNodeAncestors

TreeListBase.setCheckedForNodeAncestors
-


# TreeListBase.setCheckedForNodeAncestors


## Синтаксис


setCheckedForNodeAncestors(nodeKey, value, fireEvents,
 ignoreRules);


## Параметры


nodeKey. String. Ключ
 вершины;


value. Boolean. Устанавливаемое
 значение;


fireEvents. Boolean. Генерировать
 событие изменения значения. По умолчанию true;


ignoreRules. Boolean. Игнорировать
 правила. По умолчанию false.


## Описание


Метод setCheckedForNodeAncestors
 устанавливает значение флажкам каждого предка указанной вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Установим значение флажкам
Tree.setCheckedForNodeAncestors(4, true);
В результате выполнения примера будут установлены значения флажков всех
 предков вершины с ключом 4.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
