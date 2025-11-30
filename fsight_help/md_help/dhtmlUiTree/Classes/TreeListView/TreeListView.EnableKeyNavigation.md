# TreeListView.EnableKeyNavigation

TreeListView.EnableKeyNavigation
-


# TreeListView.EnableKeyNavigation


## Синтаксис


EnableKeyNavigation: Boolean;


## Описание


Свойство EnableKeyNavigation
 определяет возможность использования клавиатуры для навигации в дереве.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableKeyNavigation,
 а возвращается с помощью метода getEnableKeyNavigation.


По умолчанию содержит значение true.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Выключим возможность навигации с клавиатуры
Tree.setEnableKeyNavigation(false);
В результате выполнения примера была выключена возможность навигации
 в дереве при помощи клавиатуры.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
