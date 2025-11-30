# TreeListBase.checkSelection

TreeListBase.checkSelection
-


# TreeListBase.checkSelection


## Синтаксис


checkSelection(nodeKey, fireEvents);


## Описание


Метод checkSelection проверяет
 корректность признака выделения вершин.


## Параметры


nodeKey. String. Проверяемая вершина. Необязательный параметр.
 Для проверки всех вершин задайте значение "";


fireEvents. Boolean. Генерировать
 событие изменения. Необязательный параметр.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Включим режим единичной отметки
Tree.setSelectionMode(PP.Ui.TreeListSelectionMode.SingleSelect);
// Отметим несколько вершин в обход правилам
Tree.setNodeSelected(1, true, false, true);
Tree.setNodeSelected(2, true, false, true);
Tree.setNodeSelected(0, true, false, true);
// Проверим выделение
Tree.checkSelection()
В результате выполнения примера будет включен режим единичной отметки,
 было отмечено несколько вершин и вершины неудовлетворяющие условию единичной
 отметки были исправлены.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
