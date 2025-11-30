# TreeListBase.isPartialRequestPossible

TreeListBase.isPartialRequestPossible
-


# TreeListBase.isPartialRequestPossible


## Синтаксис


isPartialRequestPossible();


## Описание


Метод isPartialRequestPossible
 определяет возможность частичной загрузки ветвей.


## Комментарии


Частичная загрузка ветвей возможна, если было настроено свойство [SortDirection](TreeListBase.getSortDirection.htm) или [FilterString](TreeListBase.FilterString.htm).


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Проверим возможность частичной загрузки
Tree.isPartialRequestPossible();
// -> true
В результате выполнения примера будет получена возможность частичной
 загрузки ветвей.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
