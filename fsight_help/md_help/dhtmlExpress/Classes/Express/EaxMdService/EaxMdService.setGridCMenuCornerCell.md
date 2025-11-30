# EaxMdService.setGridCMenuCornerCell

EaxMdService.setGridCMenuCornerCell
-


**


# EaxMdService.setGridCMenuCornerCell


## Синтаксис


setGridCMenuCornerCell(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 metadata: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчета;


*metadata.* Настройки угловой ячейки
 заголовка таблицы в виде JSON-объекта со свойством headerTitleType, определяющим
 тип содержимого данной ячейки;


*callback.* Возвратная функция.


## Описание


Метод setGridCMenuCornerCell**
 реализует пункты контекстного меню угловой ячейки заголовка таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей в рабочей
 области экспресс-отчёта. Отобразим в угловой ячейке заголовка таблицы
 наименования измерений по строкам:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определим метаданные
var metadata = {
    headerTitleType: "Rows" // Берём названия измерений по строкам
};
// Определим аргументы для возвратной функции
var args = new PP.Mb.Ui.PropertyChangedEventArgs({
    PropertyName: PP.Exp.Ui.GridCMenu.CornerCell,
    Metadata: metadata,
    TypeUpdateData: PP.Exp.Ui.ViewTypeUpdate.Table
});
// Определим возвратную функцию
var onSetCallbackSuccess = function (sender, args) {
    var grid = expressBox.getDataView().getGridView();
    grid.ContextMenuChanged.fire(grid, args.Args);
};
// В угловой ячейке таблицы разместим название измерений по строкам
eaxMbService.setGridCMenuCornerCell(eaxAnalyzer, metadata, PP.Delegate(onSetCallbackSuccess, eaxMdService, args));

В результате выполнения примера в угловой ячейке заголовка таблицы будет
 отображено наименование измерения по строкам.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
