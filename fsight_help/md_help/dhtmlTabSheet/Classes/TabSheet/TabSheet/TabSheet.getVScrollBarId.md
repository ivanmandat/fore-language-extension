# TabSheet.getVScrollBarId

TabSheet.getVScrollBarId
-


**


# TabSheet.getVScrollBarId


## Синтаксис


getVScrollBarId();


## Описание


Метод getVScrollBarId** возвращает идентификатор контейнера вертикальной полосы прокрутки в таблице.


## Комментарии


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим идентификатор, DOM-элемент и ширину вертикальной полосы прокрутки:


// Получим идентификатор контейнера вертикальной полосы прокрутки
var id = tabSheet.getVScrollBarId();
console.log("Идентификатор вертикальной полосы прокрутки: " + id);
// Получим DOM-элемент контейнера вертикальной полосы прокрутки
var domElement = tabSheet.getVScrollBarContainer();
console.log("DOM-элемент контейнера:");
console.log(domElement);
// Получим значение ширины вертикальной полосы прокрутки
var width = tabSheet.getVScrollbarWidth();
console.log("Ширина: " + width);

В результате выполнения примера в консоли браузера были выведены идентификатор, DOM-элемент и ширина вертикальной полосы прокрутки:


Идентификатор вертикальной полосы прокрутки: tabSheet1_vertical_scrollbar

DOM-элемент контейнера:

<div id=​"tabSheet1_vertical_scrollbar" class=​"PPUiTabSheetScrollBarContainer" style=​"right:​ 0px;​ top:​ 0px;​ width:​ 16px;​ height:​ 190px;​ padding-top:​ 0px;​">​…​</div>​

Ширина: 16


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
