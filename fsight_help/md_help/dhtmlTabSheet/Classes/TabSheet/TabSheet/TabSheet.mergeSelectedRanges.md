# TabSheet.mergeSelectedRanges

TabSheet.mergeSelectedRanges
-


**


# TabSheet.mergeSelectedRanges


## Синтаксис


mergeSelectedRanges();


## Описание


Метод mergeSelectedRanges**
 объединяет ячейки для всех выделенных диапазонов таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Перед выполнением примера выделите
 диапазон ячеек.


Объединим выделенные ячейки в одну и получим координаты, соответствующие
 сдвигу на одну ячейку вправо и одну ячейку вниз без учётом объединения
 ячеек:


// Получим диапазон выделенных ячеек
tabSheet.mergeSelectedRanges();
// Получим измерения таблицы
var measure = tabSheet.getMeasures();
/* Вычислим координаты сдвига на одну ячейку вправо и одну ячейку вниз,
учитывая размеры заголовков строк и столбцов */
var caclWidth = measure.getRowHeaderWidth() + tabSheet.getColumnWidth(0) + 2;
var caclHeight = measure.getHeaderHeight() + tabSheet.getRowHeight(0) + 2;
// Получим координаты ячейки, соответствующие сдвигу с учётом объединения ячеек
var tabSheetCoord = tabSheet.calcCoordByOffset(caclWidth, caclHeight, false);
// Выведем полученные координаты
console.log("Координаты ячейки: (" + tabSheetCoord.rowIndex + ", " + tabSheetCoord.colIndex + ")");
После выполнения примера выделенный диапазон ячеек будет объединен в
 одну. В консоли браузера будут выведены координаты верхней левой ячейки
 из данного диапазона:


Координаты ячейки: (3, 3)


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
