# TabSheetMeasures.isColInsideVisibleRange

TabSheetMeasures.isColInsideVisibleRange
-


**


# TabSheetMeasures.isColInsideVisibleRange


## Синтаксис


isColInsideVisibleRange(colIndex: Number);


## Параметры


*colIndex. Индекс столбца таблицы.*


## Описание


Метод isColInsideVisibleRange** определяет, находится ли указанный столбец внутри видимого диапазона таблицы.


## Комментарии


Метод возвращает значение true, если указанный столбец находится внутри видимого диапазона таблицы, иначе - значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Скроем в таблице строку и столбец с индексами 2. Затем определим, входят ли в видимый диапазон ячейка с координатами (3, 3), столбцы D и E, строки с индексами 4 и 5. Также проверим, является ли последние строка и столбец видимого диапазона последними нескрытыми в таблице:


// Получим измерения таблицы
var measures = tabSheet.getMeasures();
// Скроем строку и столбец с индексами 2
if (!measures.isRowHidden(2)) {
    measures.addHiddenRow(2)
};
if (!measures.isColumnHidden(2)) {
    measures.addHiddenColumn(2)
};
// Обновим таблицу
tabSheet.rerender();
// Получим информацию и строках и столбцах таблицы
var coord = tabSheet.coord(2, 3);
console.log("Координаты (3, 3) в видимый диапазон " + (measures.isCoordInsideVisibleRange(coord) ? "входят" : "не входят."));
console.log("Столбец D в видимый диапазон " + (measures.isColInsideVisibleRange(4) ? "входит." : "не входит."));
console.log("Столбец E в видимый диапазон " + (measures.isColInsideVisibleRange(5) ? "входит." : "не входит."));
var isLastVisibleColumn = measures.isLastVisibleColumnLastNonHidden() ? "является." : "не является.";
console.log("Последний столбец видимого диапазона " + isLastVisibleColumn + " последним нескрытым в таблице.");
console.log("Строка с индексом 4 в видимый диапазон " + (measures.isRowInsideVisibleRange(4) ? "входит." : "не входит."));
console.log("Строка с индексом 5 в видимый диапазон " + (measures.isRowInsideVisibleRange(5) ? "входит." : "не входит."));
var isLastVisibleRow = measures.isLastVisibleRowLastNonHidden() ? "является." : "не является.";
console.log("Последняя строка видимого диапазона " + isLastVisibleRow + " последней нескрытой в таблице.");

В результате выполнения примера были скрыты строка и столбец с индексами 2:


![](TabSheetMeasures.isColInsideVisibleRange.png)


В консоли браузера были выведены сведения о том, входят ли в видимый диапазон ячейка с координатами (3, 3), столбцы D и E, строки с индексами 4 и 5, а также информация о том, является ли последние строка и столбец видимого диапазона последними нескрытыми в таблице:


Координаты (3, 3) в видимый диапазон входят


Столбец D в видимый диапазон входит.


Столбец E в видимый диапазон не входит.


Последний столбец видимого диапазона не является. последним нескрытым в таблице.


Строка с индексом 4 в видимый диапазон входит.


Строка с индексом 5 в видимый диапазон не входит.


Последняя строка видимого диапазона не является. последней нескрытой в таблице.


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
