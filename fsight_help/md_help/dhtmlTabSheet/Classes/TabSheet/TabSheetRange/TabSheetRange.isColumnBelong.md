# TabSheetRange.isColumnBelong

TabSheetRange.isColumnBelong
-


**


# TabSheetRange.isColumnBelong


## Синтаксис


isColumnBelong(colIndex: Number);


## Параметры


colIndex. Индекс столбца таблицы.


## Описание


Метод isColumnBelong** определяет, входит ли столбец с указанным индексом в данный диапазон.


## Комментарии


Метод возвращает значение true, если столбец с указанным индексом входит в данный диапазон, и значение false, если не входит.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Определим диапазон B1:B2 и проверим, входят ли него столбец B, строка с индексом 1 и ячейка B2:


// Определим диапазон B1:B2
var range = tabSheet.getRange(1, 1, 1, 2);
// Определим координаты угловых ячеек диапазона
var coords = range.getCorners();
console.log("Исходный диапазон: (" + coords.tlCoord.rowIndex + ", " + coords.tlCoord.colIndex + ")-(" +
    coords.brCoord.rowIndex + ", " + coords.brCoord.colIndex + ")");
// Проверим, входит ли столбец B в диапазон
var isColumnBelong = range.isColumnBelong(1);
console.log("Столбец B" + (isColumnBelong ? "" : " не") + " входит в диапазон");
// Проверим, входит ли строка с индексом 1 в диапазон
var isRowBelong = range.isRowBelong(1);
console.log("Строка с индексом 1" + (isRowBelong ? "" : " не") + " входит в диапазон");
// Проверим, принадлежит ли ячейка B2 диапазону
var isCoordBelong = range.isCoordBelong(tabSheet.coord(2, 1));
console.log("Ячейка B2" + (isCoordBelong ? "" : " не") + " принадлежит диапазону");

В результате выполнения примера в консоли браузера были выведены результаты проверки того, входят ли в диапазон B1:B2 столбец B, строка с индексом 1 и ячейка B2:


Исходный диапазон: (1, 1)-(2, 1)


Столбец B входит в диапазон


Строка с индексом 1 входит в диапазон


Ячейка B2 принадлежит диапазону


См. также:


[TabSheetRange](TabSheetRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
