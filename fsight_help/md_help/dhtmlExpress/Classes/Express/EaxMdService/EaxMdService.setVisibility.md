# EaxMdService.setVisibility

EaxMdService.setVisibility
-


**


# EaxMdService.setVisibility


## Синтаксис


setVisibility(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm), metadata: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*metadata.* Объект с настройками видимости представлений экспресс-отчёта - пузырьковой диаграммы, диаграммы, таблицы и карты;


*callback.* Возвратная функция.


## Описание


Метод setVisibility** управляет видимостью представлений экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Скроем представление «Диаграмма» экспресс-отчета:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определим настройки видимости представлений экспресс-отчета
var metadata = {
    bubbleChart: {
        enabled: true,
        visible: false
    },
    chart: { // Скроем представление «Диаграмма»
        enabled: false,
        visible: false
    },
    grid: {
        enabled: true,
        visible: true
    },
    map: {
        enabled: true,
        visible: true
    }
};
// Определим аргументы для возвратной функции
var args = new PP.Mb.Ui.PropertyChangedEventArgs({
    PropertyName: PP.Exp.Ui.ControlType.ObjVisibility,
    Metadata: metadata,
    TypeUpdateData: PP.Exp.Ui.ViewTypeUpdate.All
});
// Определим возвратную функцию
var onPanelChanged = function (n, t) {
    var chartView = expressBox.getDataView().getChartView();
    t ? (chartView.DataChanged.fire(chartView, t.Args), t.Args.fireCallback(n, t)) : chartView.DataChanged.fire(chartView, t);
    // Обновим область данных экспресс-отчета
    var dataView = expressBox.getDataView();
    dataView.refreshAll();
};
// Скроем представление «Диаграмма» экспресс-отчёта
eaxMbService.setVisibility(eaxAnalyzer, metadata, PP.Delegate(this.onPanelChanged, eaxMdService, args));

В результате выполнения примера было скрыто представление «Диаграмма» экспресс-отчета.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
