# TabSheetMeasures.iterateColumnWidth

TabSheetMeasures.iterateColumnWidth
-


**


# TabSheetMeasures.iterateColumnWidth


## Синтаксис


iterateColumnWidth(action: function, context: Object, reverse: Boolean);


## Параметры


*action.* Функция, вызываемая при каждом обходе значений ширины столбцов таблицы;


*context.* Контекст, из которого вызван данный метод. Необязательный параметр, по умолчанию равен текущему контексту this;


*reverse.* Признак, определяющий направление обхода по значениям ширины столбцов таблицы. Если параметр равен значению true, то обход начинается со значения ширины последнего столбца, если false - то наоборот. Необязательный параметр, по умолчанию равен значению false.


## Описание


Метод iterateColumnWidth** перебирает значения ширины столбцов таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Изменим ширину столбцов и высоту строк таблицы, а также добавим символ «+» к значениям каждой ячейки:


// Получим измерения таблицы
var measures = tabSheet.getMeasures();
// Объявим вспомогательные переменные
var i = 0;
var oldWidht = 0;
var oldHeigth = 0;
// Установим коэффициент новой ширины и высоты столбцов и строк таблицы
var k = 1.3;
// Изменим значение ширины каждого столбца таблицы
measures.iterateColumnWidth(function (width) {
    if (i == 0) {
        oldWidth = width;
    } else {
        var newWidth = (width - oldWidth);
        oldWidth += newWidth;
        tabSheet.setColumnWidth((newWidth * k), (i - 1));
    }
    i++;
});
i = 0; // Обнулим счетчик
// Изменим значение высоты каждой строки таблицы
measures.iterateRowHeight(function (height) {
    if (i == 0) {
        oldHeight = height;
    } else {
        var newHeight = (height - oldHeight);
        oldHeight += newHeight;
        tabSheet.setRowHeight((newHeight * k), (i - 1));
    }
    i++;
});
// Добавим символ «+» к значению каждой ячейки
measures.eachVisibleColIndex(function (col) {
    measures.eachVisibleRowIndex(function (row) {
        var value = tabSheet.getModel().getCell(tabSheet.coord(row, col)).CellData.FormattedText;
        tabSheet.setCellValue("+ " + value, row, col);
    });
});

В результате выполнения примера ширина столбцов и высота строк таблицы были увеличены в 1.3 раза, а к значениям каждой ячейки таблицы был добавлен символ «+»:


![](TabSheetMeasures.iterateColumnWidth.png)


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
