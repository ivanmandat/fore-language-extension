# TabSheetMeasures.getLastColIndex

TabSheetMeasures.getLastColIndex
-


**


# TabSheetMeasures.getLastColIndex


## Синтаксис


getLastColIndex();


## Описание


Метод getLastColIndex**
 возвращает индекс последнего столбца в таблице.


## Комментарии


Метод возвращает значение типа Number.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Скроем последнюю строку и столбец
 таблицы. Далее определим индексы последнего столбца, последнего нескрытого
 столбца, последнего видимого столбца, последнего полностью видимого столбца
 и последнего видимого целиком столбца. Аналогично получим информацию о
 строках таблицы. Для наглядности примера прокрутим таблицу к последним
 строке и столбцу:


// Получим измерения таблицы
var measures = tabSheet.getMeasures();
// Скроем последную строку и столбец таблицы
measures.addHiddenColumn(measures.getLastColIndex());
measures.addHiddenRow(measures.getLastRowIndex());
console.log("Информация о столбцах таблицы:");
console.log("Индекс последнего столбца: " + measures.getLastColIndex());
console.log("Индекс последнего нескрытого столбца: " + measures.getLastNonHiddenColIndex());
console.log("Индекс последнего видимого столбца: " + measures.getLastVisibleColIndex());
console.log("Индекс последнего полностью видимого столбца: " + measures.getLastColFullyVisible());
console.log("Индекс последнего видимого целиком столбца: " + measures.getLastEntirelyVisibleColIndex());
console.log("Информация о строках таблицы:");
console.log("Индекс последней строки: " + measures.getLastRowIndex());
console.log("Индекс последней нескрытой строки: " + measures.getLastNonHiddenRowIndex());
console.log("Индекс последней видимой строки: " + measures.getLastVisibleRowIndex());
console.log("Индекс последней полностью видимой строки в таблице: " + measures.getLastRowFullyVisible());
console.log("Индекс последней видимой целиком строки: " + measures.getLastEntirelyVisibleRowIndex());
// Выполним прокрутку к определённой строке и столбцу
tabSheet.scrollToRow(measures.getLastRowIndex());
tabSheet.scrollToColumn(measures.getLastColIndex());

Изначально таблица имела следующий вид:


![](../TabSheet/TabSheet.addCellControl_2.png)


При выполнении примера были скрыты последняя строка и столбец таблицы,
 а затем в консоль браузера были выведены индексы последнего столбца, последнего
 нескрытого столбца, последнего видимого столбца, последнего полностью
 видимого столбца и последнего видимого целиком столбца. Аналогичная информация
 была отображена о строках таблицы:


Информация о столбцах таблицы:

Индекс последнего столбца: 5

Индекс последнего нескрытого столбца: 4

Индекс последнего видимого столбца: 3

Индекс последнего полностью видимого столбца: 2

Индекс последнего видимого целиком столбца: 3

Информация о строках таблицы:

Индекс последней строки: 5

Индекс последней нескрытой строки: 4

Индекс последней видимой строки: 3

Индекс последней полностью видимой строки в таблице: 2

Индекс последней видимой целиком строки: 3


Затем для наглядности примера была выполнена прокрутка таблицы к последним
 строке и столбцу:


![](TabSheetMeasures.getLastColIndex.png)


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
