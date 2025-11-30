# TabSheetMeasures.getColumnIndexByPos

TabSheetMeasures.getColumnIndexByPos
-


**


# TabSheetMeasures.getColumnIndexByPos


## Синтаксис


getColumnIndexByPos(colPosition: Number);


## Параметры


*colPosition. Позиция
 столбца в таблице, индекс которого необходимо определить.*


## Описание


Метод getColumnIndexByPos**
 определяет индекс столбца по его позиции в таблице.


## Комментарии


Метод возвращает значение типа Number.


Позиция столбца соответствует его индексу без учёта прокрутки таблицы
 по горизонтали.


## Пример


Для выполнения примера необходимо наличие
 на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Выполним прокрутку таблицы к строке
 с индексом 1 и к столбцу с индексом 2. Затем определим индекс строки и
 индекс столбца таблицы, находящиеся в позиции 1:


// Получим измерения таблицы
var measures = tabSheet.getMeasures();
// Выполним прокрутку к определённой строке и столбцу
tabSheet.scrollToRow(1);
tabSheet.scrollToColumn(2);
// Зададим позицию строки и столбца
var rowPos = 1;
var columnPos = 1;
// Получим индекс строки в указанной позиции
var rowIndex = measures.getRowIndexByPos(rowPos);
console.log("Индекс строки в позиции " + rowPos + ": " + rowIndex);
// Получим индекс столбца в указанной позиции
var columnIndex = measures.getColumnIndexByPos(columnPos);
console.log("Индекс столбца в позиции " + columnPos + ": " + columnIndex);

В результате выполнения примера таблица
 была прокручена к строке с индексом 1 и к столбцу с индексом 2:


![](TabSheetMeasures.getColumnPosByIndex.png)


При этом в консоли браузера были выведены
 индексы строки и столбца, находящиеся в позиции 1:


Индекс строки в позиции 0: 2


Индекс столбца в позиции 0: 3


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
