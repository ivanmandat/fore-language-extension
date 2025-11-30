# TreeListBase.setSelectedFromToIndex

TreeListBase.setSelectedFromToIndex
-


# TreeListBase.setSelectedFromToIndex


## Синтаксис


moveNode(firstIndex, lastIndex, value, fireEvents,
 ignoreRules);


## Параметры


firstIndex. Object. Начало
 диапазона вершин;


lastIndex. Object. Конец диапазона
 вершин;


value. Boolean. Устанавливаемое
 значение;


fireEvents. Boolean. Генерировать
 событие изменения отметки. По умолчанию true;


ignoreRules. Boolean. Игнорировать
 правила отметки. По умолчанию false.


## Описание


Метод setSelectedFromToIndex
 изменяет текущее выделение для диапазона вершин.


## Комментарии


Метод использует настройки, заданные методом [preserveSelection](TreeListBase.preserveSelection.htm).


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим инвертирование отметки
Tree.preserveSelection(true, true);
// Изменим отметку диапазона элементов
Tree.setSelectedFromToIndex(0, 2, true)
В результате выполнения примера будет инвертирована отметка для первых
 трех элементов.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
