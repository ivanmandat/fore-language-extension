# TreeListBase.SortColumn

TreeListBase.SortColumn
-


# TreeListBase.SortColumn


## Синтаксис


SortColumn: Number;


## Описание


Свойство SortColumn определяет
 столбец сортировки.


## Комментарии


Значение свойства устанавливается через JSON, а возвращается с помощью
 метода getSortColumn.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Настроим сортировку
Tree.setSort(0, PP.Ui.TreeSortDirection.Asc, PP.Ui.TreeSortMethod.String)
// Получим столбец сортировки
Tree.getSortColumn();
// -> "0"
// Получим направление сортировки
Tree.getSortDirection();
// -> "Asc"
// Получим столбец сортировки
Tree.getSortMethod();
// -> "String"
В результате выполнения примера будет получена информация о текущих
 настройках метода сортировки.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
