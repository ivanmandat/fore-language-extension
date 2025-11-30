# TabSheet.getHScrollBarId

TabSheet.getHScrollBarId
-


**


# TabSheet.getHScrollBarId


## Синтаксис


getHScrollBarId();


## Описание


Метод getHScrollBarId** возвращает идентификатор контейнера горизонтальной полосы прокрутки в таблице.


## Комментарии


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим идентификатор, DOM-элемент и высоту горизонтальной полосы прокрутки:


// Получим идентификатор контейнера горизонтальной полосы прокрутки
var id = tabSheet.getHScrollBarId();
console.log("Идентификатор горизонтальной полосы прокрутки: " + id);
// Получим DOM-элемент контейнера горизонтальной полосы прокрутки
var domElement = tabSheet.getHScrollBarContainer();
console.log("DOM-элемент контейнера:");
console.log(domElement);
// Получим значение высоты горизонтальной полосы прокрутки
var height = tabSheet.getHScrollbarHeight();
console.log("Высота: " + height);

В результате выполнения примера в консоли браузера были выведены идентификатор, DOM-элемент и высота горизонтальной полосы прокрутки:


Идентификатор горизонтальной полосы прокрутки: tabSheet1_horizontal_scrollbar

DOM-элемент контейнера:

<div id=​"tabSheet1_horizontal_scrollbar" class=​"PPUiTabSheetScrollBarContainer" style=​"bottom:​ 0px;​ width:​ 350px;​ height:​ 16px;​ padding-left:​ 0px;​">​…​</div>​

Высота: 16


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
