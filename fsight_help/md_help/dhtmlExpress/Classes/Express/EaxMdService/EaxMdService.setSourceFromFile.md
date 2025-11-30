# EaxMdService.setSourceFromFile

EaxMdService.setSourceFromFile
-


**


# EaxMdService.setSourceFromFile


## Синтаксис


setSourceFromFile(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm), callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*callback.* Возвратная функция.


## Описание


Метод setSourceFromFile** отображает окно для открытия экспресс-отчёта из файла.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Отобразим окно для открытия отчёта из файла:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определим аргументы для возвратной функции
var args = new PP.Mb.Ui.PropertyChangedEventArgs({
    PropertyName: PP.Exp.Ui.ControlType.DataSources,
    Metadata: "Report", // Открываем экспресс-отчёт
    TypeUpdateData: [PP.Exp.Ui.ViewTypeUpdate.PropertyBar, PP.Exp.Ui.ViewTypeUpdate.DataView]
});
// Определим возвратную функцию
var onPanelChanged = function (n, t) {
    var chartView = expressBox.getDataView().getChartView();
    t ? (chartView.DataChanged.fire(chartView, t.Args), t.Args.fireCallback(n, t)) : chartView.DataChanged.fire(chartView, t);
};
// Отобразим диалог для загрузки отчёта из файла
eaxMbService.setSourceFromFile(eaxAnalyzer, PP.Delegate(this.onPanelChanged, eaxMdService, args));

В результате выполнения примера было отображено окно для открытия отчёта из файла:


![](EaxMdService_setSourceFromFile.png)


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
