# TabSheetModel.getCellSpans

TabSheetModel.getCellSpans
-


**


# TabSheetModel.getCellSpans


## Синтаксис


getCellSpans();


## Описание


Метод getCellSpans** возвращает массив объединений ячеек таблицы.


## Комментарии


Метод возвращает массив объектов типа PP.Ui.[TabSheetCellSpan](../TabSheetCellSpan/TabSheetCellSpan.htm).


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
// Получим все объединения ячеек в таблице
var cellSpans = tabSheet.getModel().getCellSpans();
// Выделим все объединения ячеек
for (var i in cellSpans) {
    tabSheet.select(cellSpans[i].getRange(tabSheet), true)
};

В результате выполнения примера были созданы и выделены три диапазона объединённых ячеек:


![](TabSheetModel.eachCellSpan.png)


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
