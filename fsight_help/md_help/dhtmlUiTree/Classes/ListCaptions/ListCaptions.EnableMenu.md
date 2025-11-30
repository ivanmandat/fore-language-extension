# ListCaptions.EnableMenu

ListCaptions.EnableMenu
-


# ListCaptions.EnableMenu


## Синтаксис


EnableMenu: Boolean;


## Описание


Свойство EnableMenu определяет
 признак активности меню видимости столбцов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableMenu, а возвращается с
 помощью метода getEnableMenu.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим заголовки дерева
caps = Tree.getCaptions();
// Выключим меню видимости столбцов
caps.setEnableMenu(false);
В результате выполнения примера было выключено и спрятано меню видимости
 столбцов.


См. также:


[ListCaptions](ListCaptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
