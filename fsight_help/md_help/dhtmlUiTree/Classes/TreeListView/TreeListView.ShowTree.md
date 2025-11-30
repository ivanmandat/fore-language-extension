# TreeListView.ShowTree

TreeListView.ShowTree
-


# TreeListView.ShowTree


## Синтаксис


ShowTree: Boolean;


## Описание


Свойство ShowTree определяет
 режим отображения структуры дерева в первом столбце.


## Комментарии


Структура дерева включает в себя экспандеры.


Значение свойства устанавливается из JSON и с помощью метода setShowTree(value,
 preventUpdate), а возвращается с помощью метода getShowTree.


Параметры:


value.
 Boolean. Устанавливаемое значение;


preventUpdate.
 Boolean. Признак отмены обновления дерева.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Спрячем структуру дерева
Tree.setShowTree(false);
В результате выполнения примера в первом столбце была спрятана структура
 отображения дерева.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
