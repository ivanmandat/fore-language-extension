# TreeListView.endDropFromOutside

TreeListView.endDropFromOutside
-


# TreeListView.endDropFromOutside


## Синтаксис


endDropFromOutside(args);


## Параметры


args. Аргументы события.


## Описание


Метод endDropFromOutside инициирует
 событие переноса вершины из внешнего дерева с указанными аргументами.


## Комментарии


Фактического перемещения не происходит.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Создадим объект с аргументами
args = {
Action: "InsertAfter",
Cancel: false,
Canceled: false,
Index: 19,
Nodes: {0: 108000, length: 1},
ParentNode: ""
};
// Инициируем событие переноса из внешнего дерева
Tree.endDropFromOutside(args);
В результате выполнения примера было инициировано событие перемещения
 вершины из внешнего дерева.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
