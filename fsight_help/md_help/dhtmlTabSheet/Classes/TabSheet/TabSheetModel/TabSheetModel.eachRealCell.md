# TabSheetModel.eachRealCell

TabSheetModel.eachRealCell
-


**


# TabSheetModel.eachRealCell


## Синтаксис


eachRealCell(action: function, context);


## Параметры


*action.* Функция, которую нужно выполнить над реальными ячейками таблицы;


*context.* Контекст, из которого вызван данный метод.


## Описание


Метод eachRealCell** выполняет указанную функцию для каждой реальной ячейки таблицы.


## Комментарии


Под реальной понимается ячейка не из кеша таблицы. Если ячейка берётся из кеша, то она называется виртуальной.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Добавим к значению каждой реальной ячейки таблицы символ «+»:


// Получим модель данных таблицы
var model = tabSheet.getModel();
// Для каждой реальной ячейки таблицы добавим к значению символ «+»
model.eachRealCell(function (cell) {
    var coord = cell.getCoord();
    tabSheet.setCellValue("+" + cell.CellData.FormattedText, coord.rowIndex, coord.colIndex)
}, this);

В результате выполнения примера к значению каждой реальной ячейки таблицы был добавлен символ «+»:


![](TabSheetModel.eachArrayOfArray.png)


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
