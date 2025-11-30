# TabSheetModel.getCellSpansJSON

TabSheetModel.getCellSpansJSON
-


**


# TabSheetModel.getCellSpansJSON


## Синтаксис


getCellSpansJSON();


## Описание


Метод getCellSpansJSON** возвращает массив объединений ячеек таблицы в JSON-формате.


## Комментарии


Метод возвращает массив JSON-объектов со следующими полями: H - высота объединения, выраженная в количестве охватываемых им строк таблицы, L - индекс его крайнего левого столбца, T - индекс его крайней верхней строки, W - ширина, выраженная в количестве охватываемых им столбцов таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Создадим три диапазона объединённых ячеек и выделим их:


// Получим диапазоны ячеек по заданным координатам
var range1 = tabSheet.getRange(0, 0, 0, 1);
var range2 = tabSheet.getRange(1, 1, 1, 2);
var range3 = tabSheet.getRange(2, 0, 2, 1);
// Выполним объединение ячеек по полученным диапазонам
tabSheet.merge(range1);
tabSheet.merge(range2);
tabSheet.merge(range3);
// Обновим таблицу
tabSheet.rerender();
// Получим все объединения ячеек в JSON-формате
var cellSpansJSON = tabSheet.getModel().getCellSpansJSON();
// Выделим все объединения ячеек
for (var i in cellSpansJSON) {
    var cell = cellSpansJSON[i];
    // Получим диапазон, соответствующий i-му объединению ячеек
    var range = tabSheet.getRange(cell.L, cell.T, cell.L + cell.W, cell.T + cell.H);
    // Выделим полученный диапазон
    tabSheet.select(range, true)
};

В результате выполнения примера были созданы и выделены три диапазона объединённых ячеек:


![](TabSheetModel.eachCellSpan.png)


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
