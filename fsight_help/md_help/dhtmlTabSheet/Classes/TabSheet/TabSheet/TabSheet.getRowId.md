# TabSheet.getRowId

TabSheet.getRowId
-


**


# TabSheet.getRowId


## Синтаксис


getRowId(rowIndex: Number);


## Параметры


*rowIndex.* Индекс строки
 таблицы.


## Описание


Метод getRowId** возвращает
 идентификатор строки таблицы.


## Комментарии


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим идентификатор и DOM-элемент
 строки с индексом 1:


// Зададим индекс строки
var index = 1;
console.log("Индекс строки: " + index);
// Получим идентификатор строки таблицы
var id = tabSheet.getRowId(index);
console.log("Идентификатор строки: " + id);
// Получим DOM-элемент строки
var rowNode = tabSheet.getRowNode(index);
console.log("DOM-элемент строки:");
console.log(rowNode);

В результате выполнения примера в консоли браузера были выведены идентификатор
 и DOM-элемент строки с индексом 1:


Индекс строки: 1

Идентификатор строки: row_1_tabSheet1

DOM-элемент строки:

<tr id=​"row_1_tabSheet1" style=​"height:​ 49px;​">​…​</tr>​


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
