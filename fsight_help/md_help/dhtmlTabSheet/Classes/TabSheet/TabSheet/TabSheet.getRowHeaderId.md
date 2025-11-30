# TabSheet.getRowHeaderId

TabSheet.getRowHeaderId
-


**


# TabSheet.getRowHeaderId


## Синтаксис


getRowHeaderId(rowIndex: Number);


## Параметры


*rowIndex.* Индекс строки таблицы.


## Описание


Метод getRowHeaderId** возвращает идентификатор заголовка строки таблицы.


## Комментарии


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим идентификатор, DOM-элемент и идентификатор содержимого заголовка строки с индексом 1:


// Зададим индекс заголовка строки
var index = 1;
console.log("Индекс заголовка строки: " + index);
// Получим идентификатор заголовка строки
var id = tabSheet.getRowHeaderId(index);
console.log("Идентификатор: " + id);
// Получим DOM-элемент заголовка строки
var element = tabSheet.getRowHeaderNode(index);
console.log("DOM-элемент:");
console.log(element);
// Получим идентификатор содержимого заголовка строки
var contentId = tabSheet.getRowHeaderContentId(index);
console.log("Идентификатор содержимого заголовка строки: " + contentId);

В результате выполнения примера в консоли браузера были выведены идентификатор, DOM-элемент и идентификатор содержимого заголовка строки с индексом 1:


Индекс заголовка строки: 1

Идентификатор: rowHeaderCell_row_1_tabSheet1

DOM-элемент:

<td id="rowHeaderCell_row_1_tabSheet1" class="PPUiTabSheetHeaderCell PPUiTabSheetRowHeaderCell" style="height: 49px; width: 33px;">…</td>

Идентификатор содержимого заголовка строки: div_rowHeaderCell_row_1_tabSheet1


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
