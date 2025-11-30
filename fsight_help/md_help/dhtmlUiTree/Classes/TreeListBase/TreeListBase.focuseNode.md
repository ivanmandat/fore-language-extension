# TreeListBase.focusNode

TreeListBase.focusNode
-


# TreeListBase.focusNode


## Синтаксис


focusNode(nodeKey, fireEvents, ignoreRules);


## Параметры


nodeKey. String. Ключ вершины;


fireEvents. Boolean. Генерировать
 событие изменения ([FocusChanged](TreeListBase.FocusChanged.htm)
 / [FocusChanging](TreeListBase.FocusChanging.htm)). Необязательный
 параметр;


ignoreRules. Boolean. Игнорировать
 правила фокусировки ([NodeFixedFocused](TreeListBase.NodeFixedFocused.htm)).


## Описание


Метод focusNode устанавливает
 фокус на указанную вершину.


## Комментарии


Фокус - рамка вокруг вершины, перемещаемая стрелками и/или мышкой. Выделение
 сфокусированного элемента производится нажатием клавиши ПРОБЕЛ.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Установим фокус на четвертую вершину
Tree.focusNode("key3", false, true);
В результате выполнения примера будет установлен фокус на четвертую
 вершину, без инициализации события фокусировки и игнорируя правила фокусировки.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
