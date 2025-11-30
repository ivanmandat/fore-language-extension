# TabSheet.getTable

TabSheet.getTable
-


**


# TabSheet.getTable


## Синтаксис


getTable();


## Описание


Метод getTable** возвращает DOM-элемент таблицы.


## Комментарии


Метод возвращает значение типа HTMLTableElement.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим DOM-элемент таблицы, а также DOM-элемент контейнера таблицы и его идентификатор:


// Получим DOM-элемент таблицы
var table = tabSheet.getTable();
console.log("DOM-элемент таблицы:");
console.log(table);
// Получим идентификатор DOM-элемента контейнера таблицы
var id = tabSheet.getTableContainerId();
console.log("Идентификатор DOM-элемента контейнера таблицы: " + id);
// Получим DOM-элемент контейнера таблицы
var container = tabSheet.getTableContainer();
console.log("Контейнер таблицы:");
console.log(container);

В результате выполнения примера в консоли браузера были выведен DOM-элемент таблицы, а также DOM-элемент контейнера таблицы и его идентификатор:


DOM-элемент таблицы:

<table class=​"PPUiTabSheet PPUiTabSheetGrid" cellspacing=​"0">​…​</table>​

Идентификатор DOM-элемента контейнера таблицы: tabSheet1_table_container

Контейнер таблицы:

<div id=​"tabSheet1_table_container" style=​"overflow:​ hidden;​ height:​ 190px;​ width:​ 350px;​ direction:​ ltr;​" class=​"PPUiTabSheetNoRTL">​…​</div>​


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
