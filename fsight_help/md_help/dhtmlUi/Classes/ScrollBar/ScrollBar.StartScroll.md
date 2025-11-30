# ScrollBar.StartScroll

ScrollBar.StartScroll
-


# ScrollBar.StartScroll


## Синтаксис


StartScroll: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


	- Event. Событие мыши;


	- Position. String. Направление смещение ползунка. Может содержать
	 значения Left | Right;


	- UseMoveEvent. Boolean. Используется событие мыши или нет.


## Описание


Событие StartScroll наступает
 при начале перемещения ползунка.


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
// Зададим событие
scroll.StartScroll.add( function(sender, args) {
  console.log("Событие StartScroll:");
  console.log(args);
});
// Инициируем событие переместив ползунок мышью или кнопкой
В результате выполнения примера добавлено событие.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
