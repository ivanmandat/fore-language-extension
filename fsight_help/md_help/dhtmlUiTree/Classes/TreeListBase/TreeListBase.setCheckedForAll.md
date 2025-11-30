# TreeListBase.setCheckedForAll

TreeListBase.setCheckedForAll
-


# TreeListBase.setCheckedForAll


## Синтаксис


setCheckedForAll(value, fireEvents, ignoreRules);


## Параметры


value. Boolean. Устанавливаемое
 значение;


fireEvents. Boolean. Генерировать
 событие изменения значения. По умолчанию true;


ignoreRules. Boolean. Игнорировать
 правила. По умолчанию false.


## Описание


Метод setCheckedForAll устанавливает
 значение всем флажкам дерева.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Установим всем вершинам значение флажка.
Tree.setCheckedForAll(true);
В результате выполнения примера будут установлены значения всем флажкам
 дерева.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
