# ScrollBar.EnableMouseWheel

ScrollBar.EnableMouseWheel
-


# ScrollBar.EnableMouseWheel


## Синтаксис


EnableMouseWheel: Boolean;


## Описание


Свойство EnableMouseWheel определяет
 возможность прокручивать ползунок колесиком мыши.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableMouseWheel, а возвращается
 с помощью метода getEnableMouseWheel.


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
// Запретим прокручивать колесом мыши
scroll.setEnableMouseWheel(false);
В результате выполнения примера была отключена возможность прокручивать
 ползунок колесом мыши.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
