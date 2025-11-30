# TreeListView.EnableColumnsMenu

TreeListView.EnableColumnsMenu
-


# TreeListView.EnableColumnsMenu


## Синтаксис


EnableColumnsMenu: Boolean;


## Описание


Свойство EnableColumnsMenu определяет
 видимость меню выбора столбцов.


## Комментарии


Меню выбора колонок представляет собой стрелочку в правом углу.


Значение свойства устанавливается из JSON и с помощью метода setEnableColumnsMenu,
 а возвращается с помощью метода getEnableColumnsMenu.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Скроем меню столбцов
Tree.setEnableColumnsMenu(false);
В результате выполнения примера было скрыто меню выбора столбцов.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
