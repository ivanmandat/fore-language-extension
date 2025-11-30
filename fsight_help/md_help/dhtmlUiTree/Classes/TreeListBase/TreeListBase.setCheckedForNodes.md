# TreeListBase.setCheckedForNodes

TreeListBase.setCheckedForNodes
-


# TreeListBase.setCheckedForNodes


## Синтаксис


setCheckedForNodes(nodes, value, fireEvents, ignoreRules);


## Параметры


nodes. Array. Массив
 ключей вершин;


value. Boolean. Устанавливаемое
 значение;


fireEvents. Boolean. Генерировать
 событие изменения значения. По умолчанию true;


ignoreRules. Boolean. Игнорировать
 правила. По умолчанию false.


## Описание


Метод setCheckedForNodes устанавливает
 значение флажкам указанных вершин.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Установим значение флажкам
Tree.setCheckedForNodes([4, 1, 2], true);
В результате выполнения примера будут установлены значения флажков указанных
 вершин.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
