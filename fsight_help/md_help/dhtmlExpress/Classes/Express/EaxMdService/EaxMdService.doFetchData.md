# EaxMdService.doFetchData

EaxMdService.doFetchData
-


**


# EaxMdService.doFetchData


## Синтаксис


doFetchData(report: PP.Exp.[EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm),
 callback: PP.Delegate, fromDimKey: Number);


## Параметры


*report.* Экспресс-отчёт, для которого
 необходимо выполнить обновление;


*callback.* Возвратная функция для
 получения метаданных отчета;


*fromDimKey.* Измерение,
 с которого идёт изменение отметки.


## Описание


Метод doFetchData** обновляет
 данные в экспресс-отчёте, при этом изменённые и несохранённые данные в
 таблице потеряются.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»), а также должна быть открыта таблица,
 у которой существует ячейка D3. Изменим значение этой ячейки и затем обновим
 все данные экспресс-отчёта без сохранения изменений:


// Получим таблицу экспресс-отчета
var gridView = expressBox.getDataView().getGridView();
// Установим значение для ячейки таблицы
gridView.setCellValue(12, 2, 2);
// Подговим координаты ячейки
var coord = new PP.Ui.TabSheetCoord({
    rowIndex: 3,
    colIndex: 3
});
// Объявляем обратную функцию
var callback = function () {
    gridView && gridView.getSource().getMetadata() && gridView.refreshAll()
};
// Получим значение ячейки
var value = gridView.getTabSheet().getModel().getCell(coord).getValue();
console.log("Значение ячейки D3 до обновления: " + value);
// Обновляет данные в экспресс-отчёте без сохранения изменений
expressBox.getService().doFetchData(expressBox.getSource(), PP.Delegate(callback, expressBox));
// Обновляем таблицу экспресс-отчета
gridView.refreshAll();
// Получим новое значенией ячейки
value = gridView.getTabSheet().getModel().getCell(coord).getValue();
if (value != null & value != undefined & value != "") {
    console.log("Значение ячейки D3 после обновления: " + value);
} else {
    console.log("Значение ячейки D3 после обновления не определено");
};

В результате выполнения примера ячейке D3, имеющей координаты (3, 3)
 (отсчёт ведётся с нуля), было задано значение 12. Затем был обновлен экспресс-отчет
 без сохранения изменений, в итоге несохраненное значение потерялось:


Значение ячейки D3 до обновления: 12


Значение ячейки D3 после обновления не определено


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
