# TreeListBase.getFilterColumn

TreeListBase.getFilterColumn
-


# TreeListBase.FilterColumn


## Синтаксис


FilterColumn: Number;


## Описание


Свойство FilterColumn определяет
 индекс столбца для проверки фильтра.


## Комментарии


Значение свойства устанавливается через JSON с помощью метода setFilter(string, column), а возвращается
 с помощью метода getFilterColumn().


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Установим фильтр
Tree.setFilter("Node2", 0);
// Получим столбец проверки фильтрации
Tree.getFilterColumn();
// -> 0
В результате выполнения примера был получен текущий столбец для проверки
 фильтрации.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
