# TabSheet.getColumnHeaderId

TabSheet.getColumnHeaderId
-


**


# TabSheet.getColumnHeaderId


## Синтаксис


getColumnHeaderId(colIndex: Number);


## Параметры


*colIndex.* Индекс столбца таблицы.


## Описание


Метод getColumnHeaderId** возвращает идентификатор заголовка столбца таблицы.


## Комментарии


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим идентификатор, DOM-элемент, текст заголовка и идентификатор содержимого заголовка столбца с индексом 1:


// Зададим индекс заголовка столбца
var index = 1;
console.log("Индекс заголовка столбца: " + index);
// Получим идентификатор заголовка столбца
var id = tabSheet.getColumnHeaderId(index);
console.log("Идентификатор: " + id);
// Получим DOM-элемент заголовка столбца
var element = tabSheet.getColumnHeaderNode(index);
console.log("DOM-элемент:");
console.log(element);
// Получим текст заголовка столбца
var header = tabSheet.getColumnHeaderText(index);
// Выведем полученное значение
console.log("Текст заголовка: «" + header + "»");
// Получим идентификатор содержимого заголовка столбца
var contentId = tabSheet.getColumnHeaderContentId(index);
console.log("Идентификатор содержимого заголовка столбца: " + contentId);

В результате выполнения примера в консоли браузера были выведены идентификатор, DOM-элемент, текст заголовка и идентификатор содержимого заголовка столбца с индексом 1:


Индекс заголовка столбца: 1

Идентификатор: headerCell_1_tabSheet1

DOM-элемент:

<td id="headerCell_1_tabSheet1" class="PPUiTabSheetHeaderCell PPUiTabSheetColHeaderCell" style="height:18px; width: 99px;">…</td>

Текст заголовка: «B»

Идентификатор содержимого заголовка столбца: div_headerCell_1_tabSheet1


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
