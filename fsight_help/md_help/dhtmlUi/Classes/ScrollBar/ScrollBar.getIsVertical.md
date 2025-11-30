# ScrollBar.getIsVertical

ScrollBar.getIsVertical
-


# ScrollBar.getIsVertical


## Синтаксис


getIsVertical() : Boolean;


## Описание


Метод getIsVertical определяет,
 является ли полоса прокрутки вертикальной.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](dhtmlUiTree.chm::/Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Отобразим полосу прокрутки расширив заголовок
caps = Tree.getCaptions();
caps.getCaptions()[0].setWidth(300);
caps.getCaptions()[1].setWidth(300);
// Получим полосу прокрутки
scroll = Tree.getScrollBarH();
// Проверим, является ли полоса прокрутки вертикальной
scroll.getIsVertical();
В результате выполнения примера было определено, является ли полоса
 прокрутки вертикальной.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
