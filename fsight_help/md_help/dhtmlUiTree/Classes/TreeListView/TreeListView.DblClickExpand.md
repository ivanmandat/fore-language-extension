# TreeListView.DblClickExpand

TreeListView.DblClickExpand
-


# TreeListView.DblClickExpand


## Синтаксис


DblClickExpand: Boolean;


## Описание


Свойство DblClickExpand определяет
 режим раскрытия/закрытия вершин по двойному нажатию мыши.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setDblClickExpand,
 а возвращается с помощью метода getDblClickExpand.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Уберем режим раскрытия вершин по двойному нажатию мыши
Tree.setDblClickExpand(false);
В результате выполнения примера была выключена возможность раскрытия
 вершин по двойному нажатию мыши.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
