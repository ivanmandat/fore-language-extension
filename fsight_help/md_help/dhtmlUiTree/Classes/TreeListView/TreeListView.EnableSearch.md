# TreeListView.EnableSearch

TreeListView.EnableSearch
-


# TreeListView.EnableSearch


## Синтаксис


EnableSearch: Boolean;


## Описание


Свойство EnableSearch определяет
 возможность поиска в дереве.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableSearch,
 а возвращается с помощью метода getEnableSearch.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Запретим производить поиск
Tree.setEnableSearch(false);
В результате выполнения примера в дереве был запрещен поиск.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
