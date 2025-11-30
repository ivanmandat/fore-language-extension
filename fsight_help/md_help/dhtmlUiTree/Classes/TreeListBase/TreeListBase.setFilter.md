# TreeListBase.setFilter

TreeListBase.setFilter
-


# TreeListBase.setFilter


## Синтаксис


setFilter(string, column);


## Параметры


string. String. Искомая строка;


column. Number. Столбец фильтрации.


## Описание


Метод setFilter устанавливает
 фильтр для дерева.


## Комментарии


В дереве будут оставлены вершины, содержащие указанную строку в указанном
 столбце.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Отфильтруем вершины
Tree.setFilter("2", 0);
В результате выполнения примера будут отфильтрованы вершины, не содержащие
 значение "2".


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
