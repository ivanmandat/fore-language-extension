# TabSheet.getCellNode

TabSheet.getCellNode
-


**


# TabSheet.getCellNode


## Синтаксис


getCellNode(rowIndex: Number, colIndex: Number);


## Параметры


*rowIndex.* Индекс строки ячейки;


*colIndex.* Индекс столбца ячейки.


## Описание


Метод getCellNode** возвращает DOM-элемент ячейки таблицы.


## Комментарии


Метод возвращает значение типа HTMLTableCellElement.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим DOM-элемент ячейки таблицы по её координатам и выполним также обратное преобразование:


// Получим DOM-элемент ячейки таблицы
var domElement = tabSheet.getCellNode(1, 1);
// Выведем информацию об элементе
console.log("DOM-элемент:");
console.log(domElement);
// Выполним обратное преобразование
var coord = tabSheet.getCoordByNode(domElement);
// Выведем полученные координаты
console.log("Координаты ячейки: (" + coord.rowIndex + ", " + coord.colIndex + ")");

В результате выполнения примера в консоли браузера был выведен DOM-элемент ячейки и её координаты:


DOM-элемент:

<td id="cell_r_1_c_1_tabSheet1" class="PPUiTabSheetCell" style="background-color: rgb(210, 223, 238); vertical-align: middle; border-right-width: 1px; border-right-style: solid; border-right-color: rgb(255, 255, 255); border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); height: 49px; width: 99px;">…</td>

Координаты ячейки: (1, 1)


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
