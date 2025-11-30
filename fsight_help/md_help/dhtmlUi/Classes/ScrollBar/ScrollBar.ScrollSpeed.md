# ScrollBar.ScrollSpeed

ScrollBar.ScrollSpeed
-


# ScrollBar.ScrollSpeed


## Синтаксис


ScrollSpeed: Number;


## Описание


Свойство ScrollSpeed определяет
 скорость прокрутки кнопками.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setScrollSpeed, а возвращается с
 помощью метода getScrollSpeed.


Значение задается в процентах от общей длинны.


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
// Зададим скорость прокрутки
scroll.setScrollSpeed(30);
В результате выполнения примера была установлена скорость прокрутки.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
