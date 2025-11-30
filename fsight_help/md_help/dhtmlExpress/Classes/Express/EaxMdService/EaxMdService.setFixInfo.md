# EaxMdService.setFixInfo

EaxMdService.setFixInfo
-


**


# EaxMdService.setFixInfo


## Синтаксис


setFixInfo(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm), metadata: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчета;


*metadata.* Данные измерения в виде JSON-объекта со следующими полями: dimKey - ключ измерения, value - признак того, что он перемещён в группу частных измерений;


*callback.* Возвратная функция.


## Описание


Метод setFixInfo** изменяет информацию о фиксации измерений экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для экспресс-отчета должно быть задано несколько источников данных В этом случае будет доступна вкладка «Частные измерения».


Переместим измерение с ключом 105 в группу частных измерений:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определим метаданные для фильтра данных
var fixInfoMetadata = {
    dimKey: 105,
    value: true
};
// Определим аргументы для возвратной функции
var args = new PP.Mb.Ui.PropertyChangedEventArgs({
    PropertyName: PP.Exp.Ui.ControlType.FixInfo,
    Metadata: fixInfoMetadata,
    TypeUpdateData: [PP.Exp.Ui.ViewTypeUpdate.DataView, PP.Exp.Ui.ViewTypeUpdate.Ribbon,
        PP.Exp.Ui.ViewTypeUpdate.DimBar, PP.Exp.Ui.ViewTypeUpdate.PropertyBar]
});
// Определим возвратную функцию
var onPanelChanged = function (n, t) {
    var chartView = expressBox.getDataView().getChartView();
    t ? (chartView.DataChanged.fire(chartView, t.Args), t.Args.fireCallback(n, t)) : chartView.DataChanged.fire(chartView, t);
};
// Изменим информацию о фиксации измерения
eaxMdService.setFixInfo(eaxAnalyzer, fixInfoMetadata, PP.Delegate(onPanelChanged, eaxMdService, args));
// Обновим экспресс-отчёт
expressBox.refreshAll();

В результате выполнения примера измерение с наименованием «Территориальные преобразования» и с ключом 105 было перенесено в группу частных измерений.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
