# ScrollBar.ScrollButtonsEnabled

ScrollBar.ScrollButtonsEnabled
-


# ScrollBar.ScrollButtonsEnabled


## Синтаксис


ScrollButtonsEnabled: Boolean;


## Описание


Свойство ScrollButtonsEnabled
 определяет признак видимости кнопок прокрутки.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setScrollButtonsEnabled, а возвращается
 с помощью метода getScrollButtonsEnabled.


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
// Спрячем кнопки прокрутки
scroll.setScrollButtonsEnabled(false);
В результате выполнения примера были спрятаны кнопки прокрутки.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
