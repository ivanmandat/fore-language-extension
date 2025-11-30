# TreeListBase.isSortActive

TreeListBase.isSortActive
-


# TreeListBase.isSortActive


## Синтаксис


isSortActive();


## Описание


Метод isSortActive возвращает
 признак активности сортировки.


## Комментарии


Частичная загрузка ветвей возможна, если было настроено свойство [SortDirection](TreeListBase.getSortDirection.htm) или [FilterString](TreeListBase.FilterString.htm).


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Проверим включение сортировки
Tree.isSortActive();
// ->  false
В результате выполнения примера был получен признак активности сортировки.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
