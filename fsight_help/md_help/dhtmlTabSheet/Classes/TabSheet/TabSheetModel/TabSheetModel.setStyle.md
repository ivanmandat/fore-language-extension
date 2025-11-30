# TabSheetModel.setStyle

TabSheetModel.setStyle
-


# TabSheetModel.setStyle


## Синтаксис


setStyle(range, style, fireEvent);


## Параметры


*range.* [PP.Ui.TabSheetRange](../TabSheetRange/TabSheetRange.htm).
 Диапазон ячеек;


style. [PP.Ui.TabSheetCellStyle](../TabSheetCellStyle/TabSheetCellStyle.htm).
 Стиль ячейки;


fireEvent. Boolean. Признак генерации событий StyleChanged/StyleChanging.
 Значение по умолчанию - true.


## Описание


Метод setStyle задает стиль
 выбранному диапазону ячеек.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Зададим стиль:


// Получим модель данных таблицы
var model = tabSheet.getModel();
// Получим первый стиль
var style = model.getStyleByIndex(0);
// Зададим диапазон
var range = tabSheet.getRange(1, 1, 5, 3);
// Установим диапазону новый стиль
model.setStyle(range, style, false);

В результате выполнения примера был задан стиль для диапазона ячеек.


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
