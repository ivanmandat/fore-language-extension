# TabSheetModel.getRowCells

TabSheetModel.getRowCells
-


**


# TabSheetModel.getRowCells


## Синтаксис


getRowCells(rowIndex: Number, startColIndex: Number, endColIndex: Number);


## Параметры


*rowIndex.* Индекс строки таблицы;


*startRowIndex.* Индекс столбца, с которого начинается выборка ячеек в указанной строке;


*endRowIndex.* Индекс столбца, с которого заканчивается выборка ячеек в указанной строке.


## Описание


Метод getRowCells** возвращает массив ячеек в указанной строке и в указанном диапазоне столбцов таблицы.


## Комментарии


Метод возвращает массив объектов типа PP.Ui.[TabSheetCell](../TabSheetCell/TabSheetCell.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим координаты и значения ячеек из строки с индексом 1, расположенных внутри диапазона столбцов с индексами от 0 до 2 включительно:


// Получим модель данных таблицы
var model = tabSheet.getModel();
// Получим ячейки из строки с индексом 1 в диапазоне столбцов с индексами от 0 до 2
var rowCells = model.getRowCells(1, 0, 2);
// Выведем информацию о полученных ячейках
for (var i in rowCells) {
    // Определим координаты ячейки
    var coord = rowCells[i].getCoord();
    console.log("Значение ячейки: (" + coord.rowIndex + ", " + coord.colIndex + "): " + rowCells[i].CellData.FormattedText);
};

В результате выполнения примера в консоли браузера были выведены координаты и значения ячеек из строки с индексом 1, расположенных внутри диапазона столбцов с индексами от 0 до 2 включительно:


Значение ячейки: (1, 0): 19281

Значение ячейки: (1, 1): 5315

Значение ячейки: (1, 2): 14031


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
