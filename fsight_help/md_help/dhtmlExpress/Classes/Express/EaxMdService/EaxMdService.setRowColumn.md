# EaxMdService.setRowColumn

EaxMdService.setRowColumn
-


**


# EaxMdService.setRowColumn


## Синтаксис


setRowColumn(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 metadata: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*metadata.* Настройки взаимной замены
 осей диаграммы. Параметр представляет собой JSON-объект со свойством seriesInRows,
 являющимся признаком отображения данных строк в рядах диаграммы;


*callback.* Возвратная функция.


## Описание


Метод setRowColumn** осуществляет
 взаимную замену осей диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной диаграммой в рабочей
 области экспресс-отчёта. Обменяем горизонтальную и вертикальную ось данной
 диаграммы между собой:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определим метаданные
var metadata = {
    seriesInRows: false // Ряды данных будет отображать относительно вертикальной оси
};
// Определим аргументы для возвратной функции
var args = new PP.Mb.Ui.PropertyChangedEventArgs({
    PropertyName: PP.Exp.Ui.RibbonChartEnum.RowColumn,
    Metadata: metadata,
    TypeUpdateData: [PP.Exp.Ui.ViewTypeUpdate.Chart, PP.Exp.Ui.ViewTypeUpdate.Table]
});
// Определим возвратную функцию
var onPanelChanged = function (n, t) {
    var chartView = expressBox.getDataView().getChartView();
    t ? (chartView.DataChanged.fire(chartView, t.Args), t.Args.fireCallback(n, t)) : chartView.DataChanged.fire(chartView, t);
};
// Осуществим взаимную замену горизонтальной и вертикальной оси диаграммы
eaxMbService.setRowColumn(eaxAnalyzer, metadata, PP.Delegate(this.onPanelChanged, eaxMdService, args));
// Обновим экспресс-отчет
expressBox.refreshAll();

В результате выполнения примера была осуществлена взаимная замена горизонтальной
 и вертикальная оси диаграммы экспресс-отчёта.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
